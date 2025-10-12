package com.linguabridge.app

import android.app.Application
import com.linguabridge.app.data.ConversationOrchestrator
import com.linguabridge.app.data.SpeechRecognizerManager
import com.linguabridge.app.data.TextToSpeechManager
import com.linguabridge.app.data.TranslationManager

class LinguaBridgeApp : Application() {
    lateinit var orchestrator: ConversationOrchestrator
        private set

    override fun onCreate() {
        super.onCreate()
        val translationManager = TranslationManager()
        val ttsManager = TextToSpeechManager(this)
        val speechRecognizerManager = SpeechRecognizerManager(this)
        orchestrator = ConversationOrchestrator(
            speechRecognizerManager = speechRecognizerManager,
            translationManager = translationManager,
            textToSpeechManager = ttsManager
        )
    }
}
