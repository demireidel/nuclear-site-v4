'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { defaultLocale, type Locale, locales } from './routing';
type Ctx = { locale: Locale; setLocale: (l: Locale) => void };
const Ctx = createContext<Ctx>({ locale: defaultLocale, setLocale: () => {} });
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  useEffect(() => { const q = new URLSearchParams(window.location.search).get('lang'); if (q && locales.includes(q as Locale)) setLocale(q as Locale); }, []);
  return <Ctx.Provider value={{ locale, setLocale }}>{children}</Ctx.Provider>;
}
export function useLocale(){ return useContext(Ctx); }
