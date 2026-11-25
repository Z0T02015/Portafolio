import { Navigation } from '@/components/navigation';
import { About, Contact, Credentials, ExperienceSection, Footer, Hero, Projects, Skills } from '@/components/sections';
import { RevealOnScroll } from '@/components/reveal-on-scroll';

export default function Home() {
  return <><RevealOnScroll /><Navigation /><main><Hero /><div className="section-divider" /><About /><Skills /><Projects /><ExperienceSection /><Credentials /><Contact /></main><Footer /></>;
}
