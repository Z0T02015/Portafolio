export interface LinkItem { label: string; href: string; external?: boolean }
export interface Credential { name: string; issuer: string; detail: string; date?: string; result?: string; verificationUrl?: string; image?: string; imageAlt?: string; orientation?: 'landscape' | 'portrait'; category: 'technical' | 'soft' | 'language' }
export interface Project { name: string; label: string; description: string; meta: string[]; image?: string; imageAlt?: string; href?: string }
export interface Experience { organization: string; role: string; period: string; description?: string; project?: string; technology?: string; duration?: string; evidenceImage?: string; evidenceAlt?: string; kind?: 'professional' | 'formative' }
