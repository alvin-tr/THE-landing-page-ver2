import commonVi from './vi/common'
import commonEn from './en/common'
import homeVi from './vi/home'
import homeEn from './en/home'

export default {
    legacy: false,
    locales: ['en', 'vi'],
    defaultLocale: 'vi',
    fallbackLocale: 'vi',
    detectBrowserLanguage: false,
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