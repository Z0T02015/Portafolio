'use client';

import Image from 'next/image';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

type LightboxImage = { src: string; alt: string; width: number; height: number };
type LightboxDocument = { title: string; pages: LightboxImage[] };
type LightboxContent = { kind: 'image'; image: LightboxImage } | { kind: 'document'; document: LightboxDocument };
type LightboxContextValue = { openImage: (image: LightboxImage) => void; openDocument: (document: LightboxDocument) => void };
const LightboxContext = createContext<LightboxContextValue | null>(null);

export function ImageLightboxProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<LightboxContent | null>(null);
  const { language } = useLanguage();
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!content) return;
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.querySelector<HTMLButtonElement>('.lightbox-close')?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setContent(null); };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener('keydown', onKeyDown);
      previousFocus.current?.focus();
    };
  }, [content]);
  const close = () => setContent(null);
  const documentTitle = content?.kind === 'document' ? content.document.title : null;
  const hint = content?.kind === 'document'
    ? language === 'en' ? 'Scroll to view all pages · Click outside or press Esc to close' : language === 'pt' ? 'Role para ver todas as páginas · Clique fora ou pressione Esc para fechar' : 'Desplázate para ver todas las páginas · Haz clic fuera o presiona Esc para cerrar'
    : language === 'en' ? 'Click outside or press Esc to close' : language === 'pt' ? 'Clique fora ou pressione Esc para fechar' : 'Haz clic fuera o presiona Esc para cerrar';
  return <LightboxContext.Provider value={{ openImage: image => setContent({ kind: 'image', image }), openDocument: document => setContent({ kind: 'document', document }) }}>
    {children}
    {content && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={content.kind === 'document' ? content.document.title : content.image.alt} onMouseDown={event => { if (event.target === event.currentTarget) close(); }}>
      <button className="lightbox-close" type="button" onClick={close} aria-label={language === 'en' ? 'Close image' : language === 'pt' ? 'Fechar imagem' : 'Cerrar imagen'}><X size={21} /></button>
      {content.kind === 'image' ? <div className="lightbox-image-frame"><Image src={content.image.src} alt={content.image.alt} width={content.image.width} height={content.image.height} priority /></div> : <div className="lightbox-document-frame"><h2 className="lightbox-document-title">{documentTitle}</h2><div className="lightbox-document-pages">{content.document.pages.map((page, index) => <Image key={page.src} src={page.src} alt={`${content.document.title}, ${language === 'en' ? 'page' : language === 'pt' ? 'página' : 'página'} ${index + 1}`} width={page.width} height={page.height} priority={index === 0} />)}</div></div>}
      <p className="lightbox-hint">{hint}</p>
    </div>}
  </LightboxContext.Provider>;
}

export function LightboxTrigger({ src, alt, width, height, className, children, label }: LightboxImage & { className: string; children: ReactNode; label: string }) {
  const context = useContext(LightboxContext);
  if (!context) throw new Error('LightboxTrigger must be used inside ImageLightboxProvider');
  return <button className={`image-trigger ${className}`} type="button" onClick={() => context.openImage({ src, alt, width, height })} aria-label={label}>{children}</button>;
}

export function DocumentLightboxTrigger({ title, pages, className, children, label }: LightboxDocument & { className: string; children: ReactNode; label: string }) {
  const context = useContext(LightboxContext);
  if (!context) throw new Error('DocumentLightboxTrigger must be used inside ImageLightboxProvider');
  return <button className={`image-trigger ${className}`} type="button" onClick={() => context.openDocument({ title, pages })} aria-label={label}>{children}</button>;
}
