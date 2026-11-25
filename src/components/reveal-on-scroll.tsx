'use client';

import { useEffect } from 'react';

export function RevealOnScroll() {
  useEffect(() => {
    const elements = [...document.querySelectorAll<HTMLElement>('.reveal')];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${(index % 4) * 65}ms`);
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return null;
}
