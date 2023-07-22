require('dotenv').config()

module.exports = {
  name: "Wordanki",
  slug: "wordanki-app",
  owner: "wordanki",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  scheme: "com.wordanki.app",
  entryPoint : "./index.js",
  androidStatusBar: {
    backgroundColor: "#2299ff",
    barStyle: "light-content",
    translucent: false
  },
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#2299ff"
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier:"com.wordanki.app"
  },
  android: {
    package: "com.wordanki.app",
    versionCode: 2,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff"
    }
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  extra: {
    eas: {
      projectId: "bdf52748-b43e-4037-87b0-3d5b40dd14a6"
    },
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    firebaseAppId: process.env.FIREBASE_APP_ID,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    facebookClientId: process.env.FACEBOOK_CLIENT_ID
  }
}