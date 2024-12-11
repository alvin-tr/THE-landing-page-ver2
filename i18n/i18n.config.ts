import commonVi from './vi/common'
import commonEn from './en/common'
import homeVi from './vi/home'
import homeEn from './en/home'

export default {
    legacy: false,
    locale: 'vi',
    detectBrowserLanguage: false,
    strategy: 'no_prefix',
    locales: ['en', 'vi'],
    useCookie: true,
    messages: {
        vi: {
            common: commonVi,
            home: homeVi,
        },
        en: {
            common: commonEn,
            home: homeEn,
        }
    },
}

// export default defineNuxtConfig({
//     i18n: {
//         locales: ['en', 'fr', 'es'], // Define your locales
//         defaultLocale: 'en',        // Default locale
//         strategy: 'prefix_except_default',
//         cookie: true,               // Enable cookie support
//         cookieKey: 'i18n_redirected', // Default is 'i18n_redirected'
//         detectBrowserLanguage: {
//             useCookie: true,
//             cookieKey: 'i18n_redirected',
//             fallbackLocale: 'en',
//             alwaysRedirect: false, // Redirect only if the detected locale is different
//         },
//     },
// });