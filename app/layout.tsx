import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import PageTransition from './components/PageTransition';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
  style: ['normal', 'italic'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://codio.dev'),
  title: {
    default: 'Codio — Engineering studio for software, mobile & cloud',
    template: '%s — Codio',
  },
  description:
    'Codio is a small senior engineering studio. We design, build and ship durable software for ambitious teams — web, mobile, cloud.',
  keywords: ['software studio', 'web development', 'mobile apps', 'cloud engineering', 'product design'],
  authors: [{ name: 'Codio' }],
  openGraph: {
    title: 'Codio — Engineering studio',
    description: 'Senior software engineering, end-to-end. Web, mobile, cloud.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#f4f3ee',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}>
      <body>
        <ScrollProgress />
        <Header />
        <main id="main">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
