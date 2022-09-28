import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_common from './en/common.json';
import en_navbar from './en/navbar.json';
import en_onboarding from './en/onboarding.json';
import en_tracker from './en/tracker.json';
import en_settings from './en/settings.json';

import ja_common from './ja/common.json';
import ja_navbar from './ja/navbar.json';
import ja_onboarding from './ja/onboarding.json';
import ja_tracker from './ja/tracker.json';
import ja_settings from './ja/settings.json';

const resources = {
  en: {
    common: en_common,
    navbar: en_navbar,
    onboarding: en_onboarding,
    tracker: en_tracker,
    settings: en_settings,
  },
  ja: {
    common: ja_common,
    navbar: ja_navbar,
    onboarding: ja_onboarding,
    tracker: ja_tracker,
    settings: ja_settings,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // FIXME: fjtsh for debug.
    lng: 'ja', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
