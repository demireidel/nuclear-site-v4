import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { Inter } from 'next/font/google';
import { ConsentBanner } from '@/components/consent-banner';
import { Analytics } from '@/components/analytics';
import { LocaleProvider } from '@/i18n/locale-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'World-Class Web App',
  description: 'Best-practice Next.js 15 + React 19 skeleton',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = headers().get('x-nonce') ?? undefined;
  return (
    <html lang="en" className={inter.className}>
      <body>
        <LocaleProvider>
          <ConsentBanner />
          <Analytics nonce={nonce} />
          <main className="min-h-dvh">{children}</main>
        </LocaleProvider>
      </body>
    </html>
  );
}
