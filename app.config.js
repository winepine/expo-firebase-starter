import "dotenv/config";

export default {
  updates: {
    url: "https://u.expo.dev/47c6cce1-dcb0-4cc6-bdc0-cada8cc54bb2",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
  expo: {
    name: "Smentry",
    slug: "smentry-final",
    privacy: "public",
    platforms: ["ios", "android"],
    version: "0.15.0",
    orientation: "portrait",
    icon: "./assets/flame.png",
    splash: {
      image: "./assets/splash3.png",
      resizeMode: "cover",
      backgroundColor: "#FFF",
    },
    plugins: [
      [
        "expo-image-picker",
        {
          photosPermission:
            "The app accesses your photos to let you share them with your friends.",
        },
      ],
    ],
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.smentry.app",
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      eas: {
        projectId: "47c6cce1-dcb0-4cc6-bdc0-cada8cc54bb2",
      },
    },
  },
};
