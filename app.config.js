require('dotenv').config()

module.exports = {
  name: "Wordanki",
  slug: "wordanki-mvp",
  owner: "wordanki",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/adaptive-icon.png",
  scheme: "com.wordanki.mvp",
  entryPoint : "./index.js",
  androidStatusBar: {
    backgroundColor: "#222228",
    barStyle: "light-content",
    translucent: true
  },
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#222228"
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier:"com.wordanki.mvp"
  },
  android: {
    package: "com.wordanki.mvp",
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#222228"
    }
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  extra: {
    eas: {
      projectId: "c41ad981-4632-441a-a036-928f593d708e"
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