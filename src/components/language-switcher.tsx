'use client';

import { ChevronDown, Globe2 } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import type { Language } from '@/data/translations';

const languageNames: Record<Language, string> = { es: 'Español', en: 'English', pt: 'Português' };

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  return <details className="language-switcher">
    <summary aria-label={t('lang.globe')}><Globe2 size={17} /><span>{language.toUpperCase()}</span><ChevronDown className="language-chevron" size={14} /></summary>
    <div className="language-options" role="group" aria-label={t('lang.globe')}>
      {(Object.keys(languageNames) as Language[]).map(item => <button key={item} type="button" lang={item} aria-pressed={language === item} onClick={event => { setLanguage(item); event.currentTarget.closest('details')?.removeAttribute('open'); }}>{languageNames[item]}<span>{item.toUpperCase()}</span></button>)}
    </div>
  </details>;
}
