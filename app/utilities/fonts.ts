import { Inter, Lato, Playfair_Display } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lato = Lato({ subsets: ['latin', 'latin-ext'], weight: ['400', '900'] });
export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});
