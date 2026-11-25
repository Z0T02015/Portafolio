import { Github, Linkedin, MessageCircle, Phone } from 'lucide-react';
import { links } from '@/data/links';
import { useLanguage } from '@/components/language-provider';

const contactMethods = [
  { name: 'GitHub', href: links.github, Icon: Github, external: true },
  { name: 'LinkedIn', href: links.linkedin, Icon: Linkedin, external: true },
  { name: 'WhatsApp', href: links.whatsapp, Icon: MessageCircle, external: true },
  { name: 'Llamar', href: links.phone, Icon: Phone, external: false },
];

export function ContactLinks({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  const names: Record<string, string> = { WhatsApp: t('contact.whatsapp'), Llamar: t('contact.phone') };
  return <div className={`contact-links ${compact ? 'contact-links-compact' : ''}`} aria-label={t('contact.sociallinks')}>
    {contactMethods.map(({ name, href, Icon, external }) => <a
      className="contact-icon-link"
      href={href}
      key={name}
      data-social={name.toLowerCase()}
      aria-label={names[name] ?? name}
      title={names[name] ?? name}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    ><Icon size={18} strokeWidth={1.8} aria-hidden="true" /></a>)}
  </div>;
}
