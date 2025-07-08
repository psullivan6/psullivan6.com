import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
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
    <html lang="en" className={`${inter.className} dark:bg-slate-950 bg-white`}>
      <body className="antialiased tracking-tight">
        <main className="prose prose-slate lg:prose-xl dark:prose-invert mx-auto my-6 p-6">
          {children}
        </main>
        <footer>Fun Stuff here, like a copyright with the wrong year</footer>
        <Analytics />
      </body>
    </html>
  );
}
