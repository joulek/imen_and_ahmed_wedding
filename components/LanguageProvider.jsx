"use client";

import { createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import fr from "@/locales/fr";
import en from "@/locales/en";
import ar from "@/locales/ar";

const dictionaries = { fr, en, ar };

export const LANGS = [
  { code: "fr", label: "FR" },
  { code: "ar", label: "عربي" },
  { code: "en", label: "EN" },
];

const LanguageContext = createContext({
  lang: "fr",
  t: fr,
  dir: "ltr",
  setLang: () => {},
});

// La langue vient de l'URL (/fr, /ar, /en)
export function LanguageProvider({ lang = "fr", children }) {
  const router = useRouter();
  const current = dictionaries[lang] ? lang : "fr";
  const dir = current === "ar" ? "rtl" : "ltr";

  const setLang = (code) => {
    if (code !== current) router.push(`/${code}`);
  };

  return (
    <LanguageContext.Provider
      value={{ lang: current, dir, setLang, t: dictionaries[current] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
