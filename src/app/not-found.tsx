import Link from 'next/link';

export default function NotFound() { return <main className="not-found"><span className="section-kicker">404 — PÁGINA NO ENCONTRADA</span><h1>Esta ruta no<br />existe todavía<span className="period">.</span></h1><p>Vuelve al portafolio para seguir explorando.</p><Link className="button button-primary" href="/">Ir al inicio <span>↗</span></Link></main>; }
