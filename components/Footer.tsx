'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLang } from '@/app/context/LanguageContext';
import { cn } from '@/lib/utils';

const serviceLinks = [
  { href: '/services/washing-machine', key: 'nav.washing' },
  { href: '/services/refrigerator', key: 'nav.fridge' },
  { href: '/services/ac', key: 'nav.ac' },
  { href: '/services/oven', key: 'nav.oven' },
  { href: '/services/electronics', key: 'nav.electronics' },
];

const companyLinks = [
  { href: '/about', key: 'footer.about' },
  { href: '/privacy', key: 'footer.privacy' },
  { href: '/terms', key: 'footer.terms' },
  { href: '/contact', key: 'footer.contact' },
];

export function Footer({ onContact }: { onContact: () => void }) {
  const { t, lang } = useLang();

  return (
    <footer className="relative border-t border-white/5 bg-ink-100 grain overflow-hidden">
      {/* Top gold line */}
      <div className="h-px gold-line opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Massive brand */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <img src="/logo.jpg" alt="Alpha care Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]" />
          <h2 className={cn('text-5xl md:text-8xl font-display text-white/8 leading-none tracking-tight', lang === 'ar' && 'font-arabic')}>
            {t('brand.name')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand desc */}
          <div className="md:col-span-4">
            <p className={cn('text-sm text-white/50 leading-relaxed max-w-xs', lang === 'ar' && 'font-arabic')}>
              {t('footer.desc')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-gold/60">
              <MapPin className="w-4 h-4" />
              <span className={cn('text-xs tracking-wide2 uppercase', lang === 'ar' && 'font-arabic')}>
                {lang === 'en' ? 'Riyadh · Jeddah · Madinah' : 'الرياض · جدة · المدينة المنورة'}
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3 md:col-start-6">
            <span className={cn('block text-xs tracking-ultra uppercase text-white/30 mb-5', lang === 'ar' && 'font-arabic')}>
              {t('footer.services')}
            </span>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className={cn('text-sm text-white/60 hover:text-gold transition-colors duration-300', lang === 'ar' && 'font-arabic')}
                  >
                    {t(s.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <span className={cn('block text-xs tracking-ultra uppercase text-white/30 mb-5', lang === 'ar' && 'font-arabic')}>
              {t('footer.company')}
            </span>
            <ul className="space-y-3">
              {companyLinks.map((c) => (
                <li key={c.href}>
                  {c.key === 'footer.contact' ? (
                    <button
                      onClick={onContact}
                      className={cn('text-sm text-white/60 hover:text-gold transition-colors duration-300 text-start', lang === 'ar' && 'font-arabic')}
                    >
                      {t(c.key)}
                    </button>
                  ) : (
                    <Link
                      href={c.href}
                      className={cn('text-sm text-white/60 hover:text-gold transition-colors duration-300', lang === 'ar' && 'font-arabic')}
                    >
                      {t(c.key)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <span className={cn('block text-xs tracking-ultra uppercase text-white/30 mb-5', lang === 'ar' && 'font-arabic')}>
              {t('footer.contact.title')}
            </span>
            <ul className="space-y-3">
              <li>
                <a href="tel:+966542173874" className="flex items-start gap-3 text-sm text-white/60 hover:text-gold transition-colors">
                  <Phone className="w-4 h-4 text-gold/60 mt-0.5 shrink-0" />
                  <span className={cn(lang === 'ar' && 'font-arabic', 'leading-relaxed')}>{t('footer.phone')}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/60 hover:text-gold transition-colors">
                  <MapPin className="w-4 h-4 text-gold/60 mt-0.5 shrink-0" />
                  <span className={cn(lang === 'ar' && 'font-arabic', 'leading-relaxed max-w-xs')}>{t('footer.address')}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={cn('text-xs text-white/30 tracking-wide2', lang === 'ar' && 'font-arabic')}>
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
            <span className={cn('text-xs text-white/30 tracking-wide2 uppercase', lang === 'ar' && 'font-arabic')}>
              {lang === 'en' ? 'Crafted with precision' : 'صُنع بإتقان'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
