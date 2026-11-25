'use client';

import { useEffect, useState } from 'react';
import { Menu, Send, X } from 'lucide-react';
import { navigation } from '@/data/profile';
import { useLanguage } from '@/components/language-provider';
import { LanguageSwitcher } from '@/components/language-switcher';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const { t } = useLanguage();
  useEffect(() => {
    const sections = ['home', ...navigation.map(item => item.href.slice(1)), 'contact'].map(id => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, .2, .5] });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const navLabels = [t('nav.about'), t('nav.projects'), t('nav.interests'), t('nav.experience'), t('nav.education')];
  return <header className="site-header"><nav className="nav-shell" aria-label={t('nav.label')}>
    <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-name"><b>Cristhian Soto</b><small>{t('nav.brandRole')}</small></span></a>
    <span className="nav-divider" aria-hidden="true" />
    <button className="menu-toggle" type="button" aria-label={open ? t('nav.close') : t('nav.open')} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
    <div className={`nav-links ${open ? 'nav-open' : ''}`}>
      <a href="#home" aria-current={active === '#home' ? 'location' : undefined} onClick={() => setOpen(false)}>{t('nav.home')}</a>
      {navigation.map((item, index) => <a key={item.href} href={item.href} aria-current={active === item.href ? 'location' : undefined} onClick={() => setOpen(false)}>{navLabels[index]}</a>)}
      <a className="nav-contact-mobile" href="#contact" onClick={() => setOpen(false)}>{t('nav.cta')} <Send size={15} /></a>
    </div>
    <span className="nav-divider nav-divider-end" aria-hidden="true" />
    <LanguageSwitcher />
    <a className="nav-cta" href="#contact" aria-current={active === '#contact' ? 'location' : undefined}><span>{t('nav.cta')}</span><Send size={16} /></a>
  </nav></header>;
}
