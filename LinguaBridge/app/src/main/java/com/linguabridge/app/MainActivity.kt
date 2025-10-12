package com.linguabridge.app

import android.Manifest
import android.content.pm.PackageManager
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.activity.viewModels
import androidx.compose.material3.SnackbarHostState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.core.content.ContextCompat
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.linguabridge.app.ui.TranslatorScreen
import com.linguabridge.app.ui.TranslatorViewModel
import com.linguabridge.app.ui.theme.LinguaBridgeTheme

class MainActivity : ComponentActivity() {

    private val permissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->
        hasAudioPermission = granted
    }

    private var hasAudioPermission by mutableStateOf(false)

    private val viewModel: TranslatorViewModel by viewModels {
        val app = application as LinguaBridgeApp
        object : ViewModelProvider.Factory {
            override fun <T : ViewModel> create(modelClass: Class<T>): T {
                @Suppress("UNCHECKED_CAST")
                return TranslatorViewModel(app.orchestrator) as T
            }
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        refreshPermissionState()
        setContent {
            LinguaBridgeTheme {
                val snackbarHost = remember { SnackbarHostState() }
                TranslatorScreen(
                    viewModel = viewModel,
                    snackbarHostState = snackbarHost,
                    hasAudioPermission = hasAudioPermission,
                    onRequestPermission = ::maybeRequestMicrophone
                )
            }
        }
    }

    private fun maybeRequestMicrophone() {
        permissionLauncher.launch(Manifest.permission.RECORD_AUDIO)
    }

    private fun refreshPermissionState() {
        hasAudioPermission = ContextCompat.checkSelfPermission(
            this,
            Manifest.permission.RECORD_AUDIO
        ) == PackageManager.PERMISSION_GRANTED
    }
}
