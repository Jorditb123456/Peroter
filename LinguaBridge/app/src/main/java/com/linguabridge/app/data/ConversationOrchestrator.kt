package com.linguabridge.app.data

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.cancel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.channelFlow
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch

class ConversationOrchestrator(
    private val speechRecognizerManager: SpeechRecognizerManager,
    private val translationManager: TranslationManager,
    private val textToSpeechManager: TextToSpeechManager
) {

    enum class ConversationDirection(val sourceTag: String, val targetTag: String) {
        LOCAL_TO_REMOTE(sourceTag = "es", targetTag = "zh"),
        REMOTE_TO_LOCAL(sourceTag = "zh", targetTag = "es")
    }

    sealed class ConversationEvent {
        data class Partial(val text: String) : ConversationEvent()
        data class Final(val original: String, val translated: String) : ConversationEvent()
        data class Error(val throwable: Throwable) : ConversationEvent()
        data object Complete : ConversationEvent()
    }

    fun listen(direction: ConversationDirection): Flow<ConversationEvent> = channelFlow {
        val scope = CoroutineScope(Dispatchers.Main)
        val job = scope.launch {
            speechRecognizerManager.listen(direction.sourceTag)
                .catch { cause ->
                    send(ConversationEvent.Error(cause))
                    send(ConversationEvent.Complete)
                }
                .collect { chunk ->
                    if (!isActive) return@collect
                    if (chunk.isFinal) {
                        val original = chunk.text
                        val translated = try {
                            translationManager.translate(
                                text = original,
                                sourceTag = direction.sourceTag,
                                targetTag = direction.targetTag
                            )
                        } catch (error: Throwable) {
                            send(ConversationEvent.Error(error))
                            ""
                        }
                        if (translated.isNotBlank()) {
                            textToSpeechManager.speak(translated, direction.targetTag)
                        }
                        send(ConversationEvent.Final(original = original, translated = translated))
                        send(ConversationEvent.Complete)
                        cancel()
                    } else {
                        send(ConversationEvent.Partial(chunk.text))
                    }
                }
        }
        awaitClose {
            job.cancel()
            scope.cancel()
        }
    }
}
