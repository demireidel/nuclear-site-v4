'use client';
import { useEffect } from 'react';
export function Analytics({ nonce }: { nonce?: string }) {
  useEffect(() => {
    try {
      const raw = localStorage.getItem('consent.v1');
      const consent = raw ? JSON.parse(raw) : { analytics: false };
      if (!consent.analytics) return;
      const script = document.createElement('script');
      script.setAttribute('defer','');
      script.setAttribute('data-domain', process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || '');
      script.src = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC || 'https://plausible.io/js/script.js';
      if (nonce) script.setAttribute('nonce', nonce);
      document.head.appendChild(script);
    } catch {}
  }, [nonce]);
  return null;
}
