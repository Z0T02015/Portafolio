'use client';

import Image from 'next/image';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

type LightboxImage = { src: string; alt: string; width: number; height: number };
type LightboxContextValue = { openImage: (image: LightboxImage) => void };
const LightboxContext = createContext<LightboxContextValue | null>(null);

export function ImageLightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<LightboxImage | null>(null);
  const { language } = useLanguage();
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!image) return;
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.querySelector<HTMLButtonElement>('.lightbox-close')?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setImage(null); };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener('keydown', onKeyDown);
      previousFocus.current?.focus();
    };
  }, [image]);
  return <LightboxContext.Provider value={{ openImage: setImage }}>
    {children}
    {image && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={image.alt} onMouseDown={event => { if (event.target === event.currentTarget) setImage(null); }}>
      <button className="lightbox-close" type="button" onClick={() => setImage(null)} aria-label={language === 'en' ? 'Close image' : language === 'pt' ? 'Fechar imagem' : 'Cerrar imagen'}><X size={21} /></button>
      <div className="lightbox-image-frame"><Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority /></div>
      <p className="lightbox-hint">{language === 'en' ? 'Click outside or press Esc to close' : language === 'pt' ? 'Clique fora ou pressione Esc para fechar' : 'Haz clic fuera o presiona Esc para cerrar'}</p>
    </div>}
  </LightboxContext.Provider>;
}

export function LightboxTrigger({ src, alt, width, height, className, children, label }: LightboxImage & { className: string; children: ReactNode; label: string }) {
  const context = useContext(LightboxContext);
  if (!context) throw new Error('LightboxTrigger must be used inside ImageLightboxProvider');
  return <button className={`image-trigger ${className}`} type="button" onClick={() => context.openImage({ src, alt, width, height })} aria-label={label}>{children}</button>;
}
