import i18n from "i18next";
import { ReactNode } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import noTranslation from "./locales/no.json";

const resources = {
  en: { translation: enTranslation },
  no: { translation: noTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "no", // Default language
  fallbackLng: "no", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes data
  },
});

function Provider({ children }: { children?: ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export default Provider;
