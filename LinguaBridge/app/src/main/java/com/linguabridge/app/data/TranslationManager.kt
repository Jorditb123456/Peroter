package com.linguabridge.app.data

import com.google.mlkit.common.model.DownloadConditions
import com.google.mlkit.nl.translate.TranslateLanguage
import com.google.mlkit.nl.translate.Translation
import com.google.mlkit.nl.translate.Translator
import kotlinx.coroutines.tasks.await
import java.util.Locale
import java.util.concurrent.ConcurrentHashMap

class TranslationManager {

    private val translators = ConcurrentHashMap<Pair<String, String>, Translator>()

    suspend fun translate(text: String, sourceTag: String, targetTag: String): String {
        if (text.isBlank()) return text
        val translator = getOrCreateTranslator(sourceTag, targetTag)
        translator.downloadModelIfNeeded(DownloadConditions.Builder().build()).await()
        return translator.translate(text).await()
    }

    private fun getOrCreateTranslator(sourceTag: String, targetTag: String): Translator {
        val key = sourceTag to targetTag
        return translators.getOrPut(key) {
            val source = TranslateLanguage.fromLanguageTag(sourceTag)
                ?: throw IllegalArgumentException("Unsupported source language: $sourceTag")
            val target = TranslateLanguage.fromLanguageTag(targetTag)
                ?: throw IllegalArgumentException("Unsupported target language: $targetTag")
            Translation.getClient(
                com.google.mlkit.nl.translate.TranslatorOptions.Builder()
                    .setSourceLanguage(source)
                    .setTargetLanguage(target)
                    .build()
            )
        }
    }

    fun preferredLocale(languageTag: String): Locale = Locale.forLanguageTag(languageTag)
}
