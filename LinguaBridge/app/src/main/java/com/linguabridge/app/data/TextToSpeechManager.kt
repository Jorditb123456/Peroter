package com.linguabridge.app.data

import android.content.Context
import android.speech.tts.TextToSpeech
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.util.Locale

class TextToSpeechManager(context: Context) {

    private val deferred = CompletableDeferred<TextToSpeech>()
    private val textToSpeech: TextToSpeech = TextToSpeech(context) { status ->
        if (status == TextToSpeech.SUCCESS) {
            deferred.complete(textToSpeech)
        } else {
            deferred.completeExceptionally(
                IllegalStateException("TextToSpeech init failed: $status")
            )
        }
    }

    suspend fun speak(text: String, languageTag: String) {
        if (text.isBlank()) return
        val tts = deferred.await()
        withContext(Dispatchers.Main) {
            val locale = Locale.forLanguageTag(languageTag)
            tts.language = locale
            tts.setSpeechRate(0.95f)
            tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "speech_${System.currentTimeMillis()}")
        }
    }

    suspend fun warmUp(languageTag: String) {
        val tts = deferred.await()
        withContext(Dispatchers.Main) {
            tts.language = Locale.forLanguageTag(languageTag)
        }
    }

    suspend fun shutdown() {
        val tts = deferred.await()
        withContext(Dispatchers.Main) {
            tts.stop()
            tts.shutdown()
        }
    }
}
