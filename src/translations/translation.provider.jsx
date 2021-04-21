import { defaultLanguage } from "@utils/language.util";
import i18next from "i18next";
import backend from "i18next-chained-backend";
import httpApi from "i18next-http-backend";
import localStorageBackend from "i18next-localstorage-backend";
import React, { useLayoutEffect, useState } from "react";
import { initReactI18next, useTranslation } from "react-i18next";
import { languages, TranslationContext } from "./translation.context";

const LOCALES_KEY = "ecommerce-site-locales-";
const LANGUAGE_KEY = "ecommerce-site-language";

const version = "1.0.0";

const selectLanguage = () =>
  window.localStorage.getItem(LANGUAGE_KEY) || defaultLanguage;
const changeLanguage = lng => {
  window.localStorage.setItem(LANGUAGE_KEY, lng);
  i18next.changeLanguage(lng);
};
const getVersion = () => {
  const versions = {};

  languages.forEach(lng => {
    versions[lng] = version;
  });

  return versions;
};

function setupI18next() {
  const language = window.localStorage.getItem(LANGUAGE_KEY);
  const backends = [httpApi];
  const backendOptions = [];

  let lng = defaultLanguage;

  if (languages.includes(language)) {
    lng = language;
  }

  backendOptions.push({
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  });
  backendOptions.push({
    prefix: LOCALES_KEY,
    expirationTime: 7 * 24 * 60 * 60 * 1000,
    versions: getVersion(),
    defaultVersion: version,
    store: window.localStorage,
  });

  backends.push(localStorageBackend);

  i18next
    .use(backend)
    .use(initReactI18next)
    .init({
      backend: {
        backends,
        backendOptions,
      },
      lng,
      ns: ["translation"],
      fallbackLng: defaultLanguage,
      preload: [defaultLanguage],
      interpolation: { escapeValue: false },
      react: {
        useSuspense: false,
      },
    });
}

setupI18next();

export function TranslationProvider({ children }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(selectLanguage());

  const updateLanguage = lng => setLanguage(lng);

  useLayoutEffect(() => {
    i18n.language !== language && changeLanguage(language);
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, updateLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}
