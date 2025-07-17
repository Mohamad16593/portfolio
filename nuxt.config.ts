import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
  //css global config
  css: ["@/assets/css/style.css"],
  // Vuetify Configuration
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxtjs/i18n", //for i18
    "nuxt-swiper", //for swiper
    //for google fonts
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Open+Sans": [300, 400, 600, 700],
          Cairo: [300, 400, 600, 700],
        },
        display: "swap",
        preconnect: true,
        preload: true,
      },
    ],
  ],
  plugins: [{ src: "~/plugins/gsap.client.ts", mode: "client" }],
  vite: {
    plugins: [vuetify({ autoImport: true })],
    vue: {
      template: {
        transformAssetUrls: {
          // Optional: customize asset handling here
        },
      },
    },
  },

  //configuration language change with i18 library
  i18n: {
    lazy: true,
    locales: [
      { code: "en", name: "English", file: "en.json", dir: "ltr" },
      { code: "ar", name: "العربية", file: "ar.json", dir: "rtl" },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    strategy: "prefix_except_default",
    vueI18n: "i18n.config.ts",
  },

  //config server
  runtimeConfig: {
    smtpUser: process.env.USER_NAME,
    smtpPass: process.env.USER_PASS,
  },

  components: true,
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
});
