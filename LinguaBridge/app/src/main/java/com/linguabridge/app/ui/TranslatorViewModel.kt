package com.linguabridge.app.ui

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.linguabridge.app.data.ConversationOrchestrator
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class TranslatorViewModel(
    private val orchestrator: ConversationOrchestrator
) : ViewModel() {

    data class ConversationMessage(
        val direction: ConversationOrchestrator.ConversationDirection,
        val originalText: String,
        val translatedText: String,
        val timestamp: Long = System.currentTimeMillis()
    )

    data class UiState(
        val isListening: Boolean = false,
        val direction: ConversationOrchestrator.ConversationDirection? = null,
        val partialText: String = "",
        val history: List<ConversationMessage> = emptyList(),
        val error: String? = null
    )

    private val mutableState = MutableStateFlow(UiState())
    val state: StateFlow<UiState> = mutableState.asStateFlow()

    private var listenJob: Job? = null

    fun startListening(direction: ConversationOrchestrator.ConversationDirection) {
        if (listenJob?.isActive == true) return
        mutableState.update {
            it.copy(
                isListening = true,
                direction = direction,
                partialText = "",
                error = null
            )
        }
        listenJob = viewModelScope.launch {
            orchestrator.listen(direction).collect { event ->
                when (event) {
                    is ConversationOrchestrator.ConversationEvent.Partial -> {
                        mutableState.update { state ->
                            state.copy(partialText = event.text)
                        }
                    }
                    is ConversationOrchestrator.ConversationEvent.Final -> {
                        mutableState.update { state ->
                            state.copy(
                                partialText = "",
                                history = state.history + ConversationMessage(
                                    direction = direction,
                                    originalText = event.original,
                                    translatedText = event.translated
                                )
                            )
                        }
                    }
                    is ConversationOrchestrator.ConversationEvent.Error -> {
                        mutableState.update { state ->
                            state.copy(error = event.throwable.localizedMessage ?: event.throwable.message)
                        }
                    }
                    ConversationOrchestrator.ConversationEvent.Complete -> {
                        mutableState.update { state ->
                            state.copy(isListening = false, direction = null, partialText = "")
                        }
                    }
                }
            }
        }
    }

    fun stopListening() {
        listenJob?.cancel()
        listenJob = null
        mutableState.update {
            it.copy(isListening = false, direction = null, partialText = "")
        }
    }

    fun clearError() {
        mutableState.update { it.copy(error = null) }
    }
}
