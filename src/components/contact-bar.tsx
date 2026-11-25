'use client';

import { useState } from 'react';
import { Check, Copy, Github, Linkedin, MoveUpRight } from 'lucide-react';
import { links } from '@/data/links';
import { useLanguage } from '@/components/language-provider';

export function ContactBar() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.emailDisplay);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = links.email;
    }
  }
  return <div className="contact-bar"><span className="contact-bar-label">{t('contact.label')}</span><a className="contact-email-link" href={links.email}>{links.emailDisplay}</a><button className="copy-email" onClick={copyEmail} type="button" aria-label={t('contact.copy')}>{copied ? <Check size={16} /> : <Copy size={16} />}<span>{copied ? t('contact.copied') : t('contact.copy')}</span></button><a href={links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} /><span>{t('contact.linkedin')}</span><MoveUpRight size={14} /></a><a href={links.github} target="_blank" rel="noopener noreferrer"><Github size={18} /><span>{t('contact.github')}</span><MoveUpRight size={14} /></a></div>;
}
