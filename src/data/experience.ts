import type { Experience } from '@/types/portfolio';

export const experience: Experience[] = [
  {
    organization: 'Fibertel Networks S.A.C.',
    role: 'Diseñador de páginas web · Pasantía',
    period: '5 de enero – 5 de febrero de 2026',
    description: 'Diseñé páginas web para Mistilabs, aplicando diseños responsive y utilizando Astro con librerías de su ecosistema.',
    project: 'Mistilabs',
    technology: 'Astro',
    evidenceImage: '/images/certificates/full/fibertel-internship.webp',
    evidenceAlt: 'Certificado completo de pasantías de Fibertel Networks, con la firma del emisor visible',
    kind: 'professional',
  },
  {
    organization: 'TECSUP',
    role: 'Experiencia formativa en situaciones reales de trabajo',
    period: 'Periodo académico 2026-1',
    description: 'Experiencia formativa relacionada con SAFE HAND PRO.',
    project: 'SAFE HAND PRO',
    duration: '96 horas',
    evidenceImage: '/images/certificates/full/safe-hand-pro.webp',
    evidenceAlt: 'Constancia completa de TECSUP con el dato de identidad oculto y la firma institucional visible',
    kind: 'formative',
  },
];
