import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/locales/en.json'
import zhCn from '@/locales/zh-cn.json'
 
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      zhCn: {
        translation: zhCn,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
 
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
  });
 
export default i18n;