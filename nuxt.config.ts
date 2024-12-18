import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    head: {
      title: "The Human Express",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
        { rel: "icon", type: "image/x-icon", href: "/logo.svg" },
      ],
    },
  },
  modules: ["@nuxtjs/i18n", "@nuxt/ui"],

  i18n: {
    vueI18n: "./i18n/i18n.config.ts", // if you are using custom path, default
  },
  css: ["~/assets/css/style.css"],

  // devServer: {
  //   port: 7000
  // },

  runtimeConfig: {
    app: {
      mode: process.env.NODE_ENV || "",
      api: {
        baseURL: `${process.env.API_URL}/v1`,
      },
    },
    runtimeConfig: {
      public: {
        API_URL: process.env.API_URL,
      },
    },
  },

  imports: {
    dirs: [
      "composables", // Tự động import các composables
      "composables/*/index.{ts,js,mjs,mts}",
      "stores", // Tự động import các stores (Pinia)
      "stores/**",
      "utils", // Tự động import các hàm tiện ích (helpers)
      "utils/**",
      "middleware", // Tự động import các middleware
      "plugins/composables", // Tự động import composables từ plugin
      "modules/external-composables",
      "constant/**",
    ],
  },
});
