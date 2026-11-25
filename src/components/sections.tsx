'use client';

import Image from 'next/image';
import { ArrowDown, ArrowRight, ArrowUpRight, Award, Bot, BriefcaseBusiness, Cloud, Code2, Database, FileText, Globe2, GraduationCap, Layers3, MapPin, MessageCircle, Phone, Pickaxe, Sparkles } from 'lucide-react';
import { ContactLinks } from '@/components/contact-links';
import { credentials } from '@/data/credentials';
import { complementaryDocuments } from '@/data/education';
import { experience } from '@/data/experience';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { links } from '@/data/links';
import { areasOfInterest } from '@/data/skills';
import { ContactBar } from '@/components/contact-bar';
import { useLanguage } from '@/components/language-provider';
import { DocumentLightboxTrigger, LightboxTrigger } from '@/components/image-lightbox';
import { assetPath } from '@/lib/asset-path';

export function Hero() {
  const { t } = useLanguage();
  const technologies = ['JavaScript', 'Python', 'TypeScript', 'Dart', 'SQL', 'Kotlin', 'C++', t('hero.embedded'), 'Astro'];
  return <section className="hero section-wrap" id="home">
    <div className="hero-copy reveal">
      <div className="eyebrow"><span className="status-dot" /> {t('hero.eyebrow')}</div>
      <h1><span className="hero-greeting">{t('hero.greeting')}</span><br /><span className="name-accent">Cristhian Soto.</span><br /><span className="title-line">{t('hero.headline')}</span><br />{t('hero.headline2')}</h1>
      <p className="hero-role">{t('hero.role')}</p>
      <p className="hero-intro">{t('hero.intro')}</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">{t('hero.projects')} <ArrowDown size={16} /></a><a className="button button-quiet" href="#contact">{t('hero.contact')} <ArrowRight size={16} /></a></div>
      <div className="hero-socials"><span>{t('hero.social')}</span><ContactLinks compact /></div>
      <div className="hero-technologies"><span>{t('hero.skills')}</span><div>{technologies.map(item => <small key={item}>{item}</small>)}</div><p>{t('hero.skillsnote')}</p></div>
    </div>
    <div className="hero-art reveal" aria-label="Retrato de Cristhian Soto"><div className="portrait-card"><div className="portrait-image"><Image src={assetPath('/images/profile/cristhian-soto.webp')} alt="Cristhian Soto con traje azul" width={1100} height={1059} priority /></div><div className="portrait-caption"><div><strong>Cristhian Soto</strong><span>{t('hero.cardrole')}</span></div><span className="portrait-location"><MapPin size={15} />{t('hero.location')}</span></div><div className="portrait-orbit portrait-orbit-one" /><div className="portrait-orbit portrait-orbit-two" /></div><DocumentLightboxTrigger className="hero-cv" title="CV de Cristhian Soto" label={t('hero.cv')} pages={[{ src: assetPath('/images/cv/cv-page-1.webp'), alt: 'CV de Cristhian Soto, página 1', width: 1325, height: 1872 }, { src: assetPath('/images/cv/cv-page-2.webp'), alt: 'CV de Cristhian Soto, página 2', width: 1325, height: 1872 }]}><FileText size={16} /><span>CV</span><ArrowUpRight size={13} /></DocumentLightboxTrigger></div>
    <a className="hero-scroll" href="#about"><span /> {t('hero.scroll')}</a>
  </section>;
}

export function About() {
  const { t } = useLanguage();
  return <section className="section-wrap section-block" id="about"><div className="section-heading reveal"><div><span className="section-kicker">{t('about.kicker')}</span><h2>{t('about.title')}<br /><span className="muted-heading">{t('about.title2')}</span></h2></div><p className="section-intro">{t('about.intro')}</p></div><div className="about-grid"><article className="about-card panel reveal"><span className="mini-label">{t('about.focus')}</span><h3>{t('about.focusTitle')}</h3><p>{t('about.body')}</p><a className="text-link" href="#experience">{t('nav.experience')} <ArrowUpRight size={15} /></a></article><div className="about-note panel reveal"><span className="mini-label">{t('about.quoteLabel')}</span><p>{t('about.quote')}</p><span className="about-note-mark"><MapPin size={130} /></span></div></div></section>;
}

export function Skills() {
  const { t } = useLanguage();
  const icons = { code: Code2, database: Database, data: Layers3, cloud: Cloud, ai: Bot, mining: Pickaxe };
  const skillKeys = [['skills.app','skills.appDetail'],['skills.database','skills.databaseDetail'],['skills.data','skills.dataDetail'],['skills.cloud','skills.cloudDetail'],['skills.ai','skills.aiDetail'],['skills.mining','skills.miningDetail']] as const;
  return <section className="section-wrap section-block skills-section" id="skills"><div className="section-heading reveal"><div><span className="section-kicker">{t('skills.kicker')}</span><h2>{t('skills.title')}<br /><span className="muted-heading">{t('skills.title2')}</span></h2></div><p className="section-intro">{t('skills.intro')}</p></div><div className="skills-grid">{areasOfInterest.map(({ icon }, index) => { const Icon = icons[icon]; const [label, detail] = skillKeys[index]; return <article className="skill-tile reveal" key={label}><span className="skill-number">0{index + 1}</span><Icon size={21} strokeWidth={1.5} /><h3>{t(label)}</h3><span>{t(detail)}</span></article>; })}</div></section>;
}

export function Projects() {
  const { t } = useLanguage();
  const projectKeys = [['projects.mistilabsLabel','projects.mistilabs'],['projects.safeLabel','projects.safe']] as const;
  const tagTranslation = (tag: string) => ({'Diseño web': t('projects.webdesign'),'Responsive': t('projects.responsive'),'Proyecto privado': t('projects.private'),'Módulo III': t('projects.module')}[tag] ?? tag);
  return <section className="section-wrap section-block" id="projects"><div className="section-heading reveal"><div><span className="section-kicker">{t('projects.kicker')}</span><h2>{t('projects.title')}<br /><span className="muted-heading">{t('projects.title2')}</span></h2></div><p className="section-intro">{t('projects.intro')}</p></div><div className="projects-grid">{projects.map((project, i) => { const [label, description] = projectKeys[i]; return <article className={`project-card panel reveal ${i === 0 ? 'project-featured' : ''}`} key={project.name}><div className="project-visual">{project.image ? <Image className="project-image" src={assetPath(project.image)} alt={project.imageAlt ?? `Imagen de ${project.name}`} width={900} height={540} /> : <><div className="visual-grid" />{i === 0 ? <div className="mistilabs-concept" aria-hidden="true"><div className="concept-browser"><div className="concept-browser-bar"><i /><i /><i /><span>mistilabs · web</span></div><div className="concept-page"><span className="concept-brand">mistilabs<span>.</span></span><div className="concept-columns"><div><b>{t('projects.mockHead')}</b><small>{t('projects.mockSub')}</small><em>{t('projects.mockButton')} <ArrowRight size={11} /></em></div><div className="concept-orbit"><span /><i /></div></div><div className="concept-cards"><i /><i /><i /></div></div></div><span className="concept-note">CSS · CONCEPT</span></div> : <div className="project-visual-icon"><Layers3 size={34} /></div>}</>}<span className="visual-index">0{i + 1}</span><span className="visual-caption">{t('projects.concept')}</span></div><div className="project-content"><span className="project-label">{t(label)}</span><h3>{project.name}</h3><p>{t(description)}</p><div className="tag-list">{project.meta.map(tag => <span className="tag" key={tag}>{tagTranslation(tag)}</span>)}</div>{project.href && <div className="project-footer"><a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">{t('hero.projects')} <ArrowRight size={15} /></a></div>}</div></article>;})}</div></section>;
}

export function ExperienceSection() {
  const { t } = useLanguage();
  return <section className="section-wrap section-block" id="experience"><div className="section-heading reveal"><div><span className="section-kicker">{t('experience.kicker')}</span><h2>{t('experience.title')}<br /><span className="muted-heading">{t('experience.title2')}</span></h2></div><p className="section-intro">{t('experience.intro')}</p></div><div className="experience-timeline">{experience.map((item, index) => <article className={`experience-card panel reveal experience-${item.kind}`} key={item.organization}><div className="experience-icon">{item.kind === 'professional' ? <BriefcaseBusiness size={23} /> : <GraduationCap size={23} />}</div><div className="experience-main"><span className="mini-label">{t(index === 0 ? 'experience.internship' : 'experience.formative')}</span><h3>{item.organization}</h3><p className="experience-role">{t(index === 0 ? 'experience.role' : 'experience.formrole')}</p><p>{t(index === 0 ? 'experience.internDesc' : 'experience.formDesc')}</p>{item.project && <div className="tag-list"><span className="tag">{item.project}</span>{item.technology && <span className="tag">{item.technology}</span>}{item.duration && <span className="tag">{item.duration}</span>}</div>}</div><div className="experience-date"><span className="date-dot" />{t(index === 0 ? 'experience.date' : 'experience.formDate')}</div>{item.evidenceImage && <LightboxTrigger className="experience-evidence evidence-portrait" src={assetPath(item.evidenceImage)} alt={item.evidenceAlt ?? `Certificado firmado de ${item.organization}`} width={1312} height={1853} label={t('experience.open')}><Image src={assetPath(item.evidenceImage)} alt="" width={1312} height={1853} /><span>{t('experience.open')} <ArrowUpRight size={13} /></span></LightboxTrigger>}</article>)}</div></section>;
}

function CredentialCard({ item, index }: { item: typeof credentials[number]; index: number }) {
  const { t, language: locale } = useLanguage();
  const formattedDate = item.date ? new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${item.date}T12:00:00`)) : '';
  const fullAlt = item.imageAlt ?? `Certificado completo de ${item.name}`;
  return <article className="credential-card panel reveal"><div className="credential-top"><span className="credential-icon"><Award size={19} /></span><span className="credential-index">{String(index + 1).padStart(2, '0')}</span></div>{item.image && <><LightboxTrigger className={`credential-preview credential-${item.orientation ?? 'landscape'}`} src={assetPath(item.image)} alt={fullAlt} width={1853} height={1310} label={t('credentials.open')}><Image src={assetPath(item.image)} alt="" width={1853} height={1310} /></LightboxTrigger><LightboxTrigger className="credential-full-link" src={assetPath(item.image)} alt={fullAlt} width={1853} height={1310} label={t('credentials.open')}>{t('credentials.open')} <ArrowUpRight size={13} /></LightboxTrigger></>}<span className="mini-label">{item.issuer || 'CERTIFICATION'}</span><h3>{item.name}</h3><div className="credential-meta">{item.detail && <span>{item.detail} {t('credentials.hours')}</span>}{item.result && <span className="result-chip">{t('credentials.score')}: {item.result}</span>}{formattedDate && <span>{t('credentials.issued')}: {formattedDate}</span>}</div>{item.verificationUrl && <a className="credential-verify" href={item.verificationUrl} target="_blank" rel="noopener noreferrer">{t('credentials.credly')} <ArrowUpRight size={14} /></a>}</article>;
}

export function Credentials() {
  const { t, language: locale } = useLanguage();
  const technical = credentials.filter(x => x.category === 'technical');
  const soft = credentials.filter(x => x.category === 'soft');
  const languageItem = credentials.find(x => x.category === 'language')!;
  const formatDate = (value?: string) => value ? new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${value}T12:00:00`)) : '';
  return <section className="section-wrap section-block" id="credentials">
    <div className="section-heading reveal"><div><span className="section-kicker">{t('credentials.kicker')}</span><h2>{t('credentials.title')}<br /><span className="muted-heading">{t('credentials.title2')}</span></h2></div><p className="section-intro">{t('credentials.intro')}</p></div>
    <div className="credential-group"><div className="group-title reveal"><span className="group-icon"><Award size={16} /></span><h3>{t('credentials.technical')}</h3><span>{technical.length} {t('credentials.count')}</span></div><div className="credential-grid">{technical.map((item, i) => <CredentialCard item={item} index={i} key={item.name} />)}</div></div>
    <div className="credential-group soft-credentials"><div className="group-title reveal"><span className="group-icon violet"><Sparkles size={16} /></span><h3>{t('credentials.soft')}</h3></div><div className="soft-list">{soft.map((item, i) => <article className="soft-item reveal" key={item.name}><span className="soft-item-index">0{i + 1}</span><div><span className="mini-label">{item.issuer}</span><h4>{item.name}</h4><p>{item.detail} {t('credentials.hours')}</p><small>{t('credentials.issued')}: {formatDate(item.date)}</small></div>{item.image && <LightboxTrigger className="soft-document" src={assetPath(item.image)} alt={item.imageAlt ?? `Certificado completo de ${item.name}`} width={1853} height={1310} label={t('credentials.open')}><Image className="soft-item-preview" src={assetPath(item.image)} alt="" width={1853} height={1310} /></LightboxTrigger>}</article>)}</div></div>
    <div className="language-card panel reveal"><div className="language-symbol"><Globe2 size={25} /></div><div className="language-copy"><span className="mini-label">{t('credentials.languages')}</span><h3>{languageItem.name}</h3><p>{languageItem.issuer} <span>·</span> {languageItem.detail} {t('credentials.hours')}</p>{languageItem.date && <small>{t('credentials.issued')}: {formatDate(languageItem.date)}</small>}</div><div className="language-level"><span>A2</span><small>{t('credentials.basic')}</small></div>{languageItem.image && <LightboxTrigger className="language-document" src={languageItem.image} alt={languageItem.imageAlt ?? `Certificado completo de ${languageItem.name}`} width={1853} height={1310} label={t('credentials.open')}><Image className="language-preview" src={languageItem.image} alt="" width={1853} height={1310} /></LightboxTrigger>}</div>
    <div className="documents panel reveal" id="documents"><div className="documents-title"><span className="group-icon"><GraduationCap size={16} /></span><div><span className="mini-label">{t('credentials.documents')}</span><h3>{t('credentials.docsTitle')}</h3></div></div><div className="document-list">{complementaryDocuments.map(doc => <div className="document-row" key={doc.title}><span><b>{t('credentials.module')}</b><small>{t('credentials.moduleDetail')}</small></span><LightboxTrigger className="document-open" src={assetPath("/images/certificates/full/safe-hand-pro.webp")} alt="Constancia completa con firma institucional visible y dato de identidad oculto" width={1312} height={1853} label={t('credentials.open')}>{t('credentials.open')} <ArrowUpRight size={13} /></LightboxTrigger></div>)}</div></div>
  </section>;
}

export function Contact() {
  const { t } = useLanguage();
  return <section className="contact-wrap" id="contact"><div className="contact-inner section-wrap reveal"><div className="contact-spark"><MessageCircle size={21} /></div><span className="section-kicker">{t('contact.kicker')}</span><h2>{t('contact.title')}<br /><span>{t('contact.title2')}</span></h2><p>{t('contact.body')}</p><ContactBar /><div className="contact-actions"><a className="button button-primary" href={links.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> {t('contact.whatsapp')}</a><a className="button button-quiet" href={links.phone}><Phone size={16} /> {t('contact.phone')} · {links.phoneDisplay}</a></div><div className="contact-orb" /></div></section>;
}

export function Footer() { const { t } = useLanguage(); return <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-name"><b>{profile.name}</b><small>PORTAFOLIO 2026</small></span></a><span>{t('footer.made')} <span className="footer-heart">✳</span> {t('footer.from')}</span><a className="back-top" href="#home">{t('footer.top')} <ArrowUpRight size={14} /></a></footer>; }
