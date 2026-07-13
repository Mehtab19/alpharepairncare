import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Amiri } from 'next/font/google';
import { LanguageProvider } from './context/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const amiri = Amiri({ subsets: ['arabic', 'latin'], variable: '--font-amiri', weight: ['400', '700'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://alphacare.vercel.app'), // Replace with final domain when ready
  title: 'ALPHA CARE Home Appliances, Refrigeration & Air Conditioning',
  description:
    'Luxury-grade home appliance maintenance — Samsung, Hitachi, Ariston, AC, ovens, and screens. Serving Medinah.',
  openGraph: {
    title: 'ALPHA CARE Home Appliances, Refrigeration & Air Conditioning',
    description:
      'Certified technicians. Genuine parts. Service across Medinah.',
  },
};

import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${amiri.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <WhatsAppIcon />
      </body>
    </html>
  );
}
