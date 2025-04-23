import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  dir: { pages: "routes" },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    locales: [
      { code: "en", language: "en-US", name: "English" },
      { code: "es", language: "es-ES", name: "Español" },
    ],
    defaultLocale: "en",
    strategy: "prefix",
    detectBrowserLanguage: false,
    vueI18n: "~/i18n.config.ts",
  },
});
