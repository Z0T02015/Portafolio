'use client';

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from 'react';
import { translations, type Language, type TranslationKey } from '@/data/translations';

type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageEvent = 'portfolio-language-change';
const subscribe = (callback: () => void) => {
  window.addEventListener(languageEvent, callback);
  return () => window.removeEventListener(languageEvent, callback);
};
const getLanguage = (): Language => {
  const value = window.localStorage.getItem('portfolio-language');
  return value === 'en' || value === 'pt' ? value : 'es';
};
const setLanguage = (language: Language) => {
  window.localStorage.setItem('portfolio-language', language);
  window.dispatchEvent(new Event(languageEvent));
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<Language>(subscribe, getLanguage, () => 'es');
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    t: key => translations[language][key],
  }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider');
  return value;
}
