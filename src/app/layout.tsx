import type { Metadata } from 'next';
import './globals.css';
import './portfolio.css';
import { LanguageProvider } from '@/components/language-provider';
import { ImageLightboxProvider } from '@/components/image-lightbox';
import { assetPath } from '@/lib/asset-path';

export const metadata: Metadata = {
  title: 'Cristhian Soto | Portafolio',
  description: 'Portafolio de Cristhian Soto, estudiante de Diseño y Desarrollo de Software en TECSUP, Arequipa.',
  openGraph: { title: 'Cristhian Soto | Portafolio', description: 'Estudiante de Diseño y Desarrollo de Software en TECSUP, Arequipa.', type: 'website', locale: 'es_PE' },
  icons: { icon: assetPath('/icon.svg') },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><div className="site-background" aria-hidden="true" style={{ backgroundImage: `linear-gradient(90deg,rgba(5,13,23,.82),rgba(5,15,27,.69) 54%,rgba(5,15,27,.46)),url("${assetPath('/images/background/navy-waves-v2.webp')}")` }} /><LanguageProvider><ImageLightboxProvider>{children}</ImageLightboxProvider></LanguageProvider></body></html>;
}
