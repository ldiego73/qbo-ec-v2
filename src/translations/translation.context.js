import { defaultLanguage } from "@utils/language.util";
import { createContext } from "react";

export const languages = ["es", "en"];

export const TranslationContext = createContext({
  language: defaultLanguage,
  updateLanguage() {},
});
