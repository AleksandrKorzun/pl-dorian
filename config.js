module.exports = {
  name: "",
  networks: [
    "Applovin",
    "Facebook",
    "Google",
    "IronSource",
    "Liftoff",
    "TikTok",
    "UnityAds",
    "Vungle",
    "Landing",
    "Mindworks",
  ],
  customPhaser: true,
  qualityAtlas: [0.8, 0.8],
  qualityTexture: [0.8, 0.8],
  bitrateAudio: 32, // 128, 64, 32, 16
  ios: "https://apps.apple.com/us/app/dorian-comics-game-platform/id1529215455",
  android:
    "https://play.google.com/store/apps/details?id=com.dorian.playtogether&hl=en_US",
  currentVersion: "default", // после изменения значения нужно заново запустить npm run dev
  versions: {
    default: {
      lang: "en",
      audio: [],
      fonts: [],
      sheets: [],
      spine: [],
      textures: [],
    },
    mip_beach: {
      lang: "en",
      audio: [],
      fonts: [],
      sheets: [],
      spine: [],
      textures: ["bg_beach_horizontal", "bg_beach_vertical"],
    },
    sip_winter: {
      lang: "en",
      audio: [],
      fonts: [],
      sheets: [],
      spine: [],
      textures: [
        "bg_sip_horizontal",
        "bg_sip_vertical",
        "bg_winter_horizontal",
        "bg_winter_vertical",
      ],
    },
    sip_beach: {
      lang: "en",
      audio: [],
      fonts: [],
      sheets: [],
      spine: [],
      textures: [
        "bg_sip_horizontal",
        "bg_sip_vertical",
        "bg_beach_horizontal",
        "bg_beach_vertical",
      ],
    },
  },
};
