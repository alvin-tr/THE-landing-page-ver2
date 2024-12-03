import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'THEHUMAN Express',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      ],
      link: [{
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }
      ],
    }
  },
  modules: ['@nuxt/ui'],
  // i18n: {
  //   locales: [
  //     { code: 'en', name: 'English', iso: 'en-US', file: 'lang/en.json' },
  //     { code: 'vn', name: 'Tiếng Việt', iso: 'vi-VN', file: 'lang/vn.json' },
  //   ],
  //   lazy: true, // Tải bản dịch khi cần
  //   langDir: 'lang/', // Thư mục chứa các tệp ngôn ngữ
  //   defaultLocale: 'en',
  //   vueI18n: {
  //     legacy: false, // Sử dụng Composition API của Vue I18n
  //     locale: 'en',
  //     fallbackLocale: 'en',
  //   },
  // },
  css: ['~/assets/css/style.css']
})