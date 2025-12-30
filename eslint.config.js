import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['lib/browser/**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'script',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        Node: 'readonly',
        Element: 'readonly',
        Blob: 'readonly',
        Image: 'readonly',
        Event: 'readonly',
        QRCode: 'readonly',
        cancelAnimationFrame: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'off', // Browser scripts may define functions for external use
      'no-undef': 'error',
      'no-console': 'off'
    }
  },
  {
    files: ['webui/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        location: 'readonly',
        navigator: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        EventSource: 'readonly',
        WebSocket: 'readonly',
        Promise: 'readonly',
        File: 'readonly',
        FileReader: 'readonly',
        FormData: 'readonly',
        SpeechSynthesisUtterance: 'readonly',
        Audio: 'readonly',
        MediaRecorder: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        Blob: 'readonly',
        Image: 'readonly',
        Event: 'readonly',
        CustomEvent: 'readonly',
        QRCode: 'readonly',
        alert: 'readonly',
        confirm: 'readonly',
        prompt: 'readonly',
        // Custom globals from your app
        fetchApi: 'readonly',
        sendJsonData: 'readonly',
        toast: 'readonly',
        toastFrontendError: 'readonly',
        toastFrontendWarning: 'readonly',
        toastFrontendInfo: 'readonly',
        ace: 'readonly',
        settingsModalProxy: 'readonly',
        openModal: 'readonly',
        stopButton: 'readonly',
        originalStopContent: 'readonly',
        frontendOnly: 'readonly',
        Alpine: 'readonly',
        DOMParser: 'readonly',
        MutationObserver: 'readonly',
        katex: 'readonly',
        openImageModal: 'readonly',
        flatpickr: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      'no-undef': 'error',
      'no-console': 'off'
    }
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.venv/**',
      'docker/**',
      'webui/vendor/**',
      '**/*.min.js',
      'webui/js/transformers@3.0.2.js'
    ]
  }
];
