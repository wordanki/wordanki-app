require('dotenv').config()

module.exports = {
  name: "wordanki-english",
  slug: "wordanki-english",
  owner: "wordanki",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  scheme: "com.wordanki.english",
  entryPoint : "./index.js",
  androidStatusBar: {
    backgroundColor: "#222228",
    barStyle: "light-content",
    animated: true,
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
    bundleIdentifier:"com.wordanki.english"
  },
  android: {
    package: "com.wordanki.english",
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF"
    }
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  extra: {
    eas: {
      projectId: "a20932d2-cfa3-4566-b01b-0668facb7375"
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