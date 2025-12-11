import Header from '@/components/Header/Header';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import ColorModeProvider from './components/ColorModeProvider/ColorModeProvider';
import { ContentProvider } from './components/ContentProvider/ContentProvider';
import Footer from './components/Footer/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://psullivan6.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Patrick Sullivan',
    template: '%s | Patrick Sullivan',
  },
  description: 'Patrick Sullivan is a software engineer who loves building things with code.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} bg-background scroll-smooth scroll-pt-[71px]`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ColorModeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ContentProvider>
            <Header />

            {children}

            <Footer />

            <Analytics />
            <SpeedInsights />
            <Toaster />
          </ContentProvider>
        </ColorModeProvider>
      </body>
    </html>
  );
}
