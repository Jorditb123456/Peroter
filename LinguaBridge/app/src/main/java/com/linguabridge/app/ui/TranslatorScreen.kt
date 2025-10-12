package com.linguabridge.app.ui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Mic
import androidx.compose.material.icons.filled.Stop
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.FilledTonalButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.linguabridge.app.R
import com.linguabridge.app.data.ConversationOrchestrator

@Composable
fun TranslatorScreen(
    viewModel: TranslatorViewModel,
    snackbarHostState: SnackbarHostState,
    hasAudioPermission: Boolean,
    onRequestPermission: () -> Unit
) {
    val state by viewModel.state.collectAsStateWithLifecycle()

    LaunchedEffect(state.error) {
        state.error?.let { message ->
            snackbarHostState.showSnackbar(message)
            viewModel.clearError()
        }
    }

    Scaffold(
        snackbarHost = { SnackbarHost(hostState = snackbarHostState) }
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .padding(horizontal = 16.dp, vertical = 12.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Text(
                text = stringResource(id = R.string.conversation_header),
                style = MaterialTheme.typography.headlineSmall,
                fontWeight = FontWeight.Bold
            )

            if (!hasAudioPermission) {
                Text(
                    text = stringResource(id = R.string.microphone_permission_hint),
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.error
                )
            }

            ConversationCard(
                title = stringResource(id = R.string.user_prompt_label),
                subtitle = stringResource(id = R.string.start_spanish_prompt),
                isActive = state.isListening &&
                    state.direction == ConversationOrchestrator.ConversationDirection.LOCAL_TO_REMOTE,
                partialText = state.partialText.takeIf {
                    state.direction == ConversationOrchestrator.ConversationDirection.LOCAL_TO_REMOTE
                } ?: "",
                hasAudioPermission = hasAudioPermission,
                onAction = {
                    if (state.isListening) {
                        viewModel.stopListening()
                    } else {
                        if (hasAudioPermission) {
                            viewModel.startListening(ConversationOrchestrator.ConversationDirection.LOCAL_TO_REMOTE)
                        } else {
                            onRequestPermission()
                        }
                    }
                }
            )

            ConversationCard(
                title = stringResource(id = R.string.partner_prompt_label),
                subtitle = stringResource(id = R.string.start_chinese_prompt),
                isActive = state.isListening &&
                    state.direction == ConversationOrchestrator.ConversationDirection.REMOTE_TO_LOCAL,
                partialText = state.partialText.takeIf {
                    state.direction == ConversationOrchestrator.ConversationDirection.REMOTE_TO_LOCAL
                } ?: "",
                hasAudioPermission = hasAudioPermission,
                onAction = {
                    if (state.isListening) {
                        viewModel.stopListening()
                    } else {
                        if (hasAudioPermission) {
                            viewModel.startListening(ConversationOrchestrator.ConversationDirection.REMOTE_TO_LOCAL)
                        } else {
                            onRequestPermission()
                        }
                    }
                }
            )

            Text(
                text = stringResource(id = R.string.history_section),
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Medium
            )

            LazyColumn(
                modifier = Modifier.weight(1f),
                contentPadding = PaddingValues(bottom = 32.dp),
                verticalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                items(state.history) { message ->
                    HistoryItem(message)
                }
            }
        }
    }
}

@Composable
private fun ConversationCard(
    title: String,
    subtitle: String,
    isActive: Boolean,
    partialText: String,
    hasAudioPermission: Boolean,
    onAction: () -> Unit
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Text(text = title, style = MaterialTheme.typography.titleMedium)
            Text(text = subtitle, style = MaterialTheme.typography.bodyMedium)

            if (partialText.isNotBlank()) {
                Text(
                    text = partialText,
                    style = MaterialTheme.typography.bodyLarge,
                    fontWeight = FontWeight.SemiBold
                )
            }

            FilledTonalButton(
                onClick = onAction,
                modifier = Modifier.align(Alignment.End)
            ) {
                Icon(
                    imageVector = if (isActive) Icons.Filled.Stop else Icons.Filled.Mic,
                    contentDescription = null
                )
                Text(
                    text = when {
                        isActive -> stringResource(id = R.string.stop_listening)
                        !hasAudioPermission -> stringResource(id = R.string.request_microphone)
                        else -> stringResource(id = R.string.speak_now)
                    }
                )
            }
        }
    }
}

@Composable
private fun HistoryItem(message: TranslatorViewModel.ConversationMessage) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = when (message.direction) {
                    ConversationOrchestrator.ConversationDirection.LOCAL_TO_REMOTE -> "ES → ZH"
                    ConversationOrchestrator.ConversationDirection.REMOTE_TO_LOCAL -> "ZH → ES"
                },
                style = MaterialTheme.typography.labelMedium,
                fontWeight = FontWeight.SemiBold
            )
            Text(
                text = message.originalText,
                style = MaterialTheme.typography.bodyMedium,
                modifier = Modifier.padding(top = 4.dp)
            )
            Text(
                text = message.translatedText,
                style = MaterialTheme.typography.bodyLarge,
                fontWeight = FontWeight.Bold,
                modifier = Modifier.padding(top = 4.dp)
            )
        }
    }
}
