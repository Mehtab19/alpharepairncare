'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Languages } from 'lucide-react';
import { useLang } from '@/app/context/LanguageContext';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', key: 'nav.home' },
  { href: '/services/washing-machine', key: 'nav.washing' },
  { href: '/services/refrigerator', key: 'nav.fridge' },
  { href: '/services/ac', key: 'nav.ac' },
  { href: '/services/oven', key: 'nav.oven' },
  { href: '/services/electronics', key: 'nav.electronics' },
];

export function Navbar({ onContact }: { onContact: () => void }) {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 md:pt-6"
      >
        <nav
          className={cn(
            'w-full max-w-7xl rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4 lg:gap-8 transition-all duration-500',
            'glass border border-white/10',
            scrolled ? 'lux-shadow' : 'shadow-none',
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group shrink-0">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden shrink-0 rounded-xl bg-white shadow-inner">
              <img src="/logo.jpg" alt="Alpha care Logo" className="w-[80%] h-[80%] object-contain" />
            </div>
            <div className="leading-tight shrink-0 hidden sm:block">
              <span className={cn('block font-display tracking-widest text-base md:text-lg text-white font-medium', lang === 'ar' && 'font-arabic')}>
                {t('brand.name')}
              </span>
              <span className={cn('block text-[9px] md:text-[11px] tracking-widest uppercase text-white/50 mt-1', lang === 'ar' && 'font-arabic')}>
                {t('brand.tagline')}
              </span>
            </div>
          </Link>

          {/* Inline nav (desktop) */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-3 py-2 text-[10px] tracking-widest uppercase rounded-full transition-all duration-300 whitespace-nowrap',
                    active ? 'text-gold' : 'text-white/60 hover:text-white',
                    lang === 'ar' && 'font-arabic text-xs',
                  )}
                >
                  {t(item.key)}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full border border-gold/30 bg-gold/5"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={toggleLang}
              className="group flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/10 hover:border-gold/40 transition-colors duration-300"
              aria-label="Toggle language"
            >
              <Languages className="w-3.5 h-3.5 text-white/60 group-hover:text-gold transition-colors" />
              <span className={cn('text-xs tracking-wide2 uppercase text-white/70 group-hover:text-gold transition-colors', lang === 'ar' && 'font-arabic')}>
                {lang === 'en' ? 'AR' : 'EN'}
              </span>
            </button>

            <button
              onClick={onContact}
              className={cn(
                'hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-gold text-ink text-xs tracking-wide2 uppercase font-medium hover:bg-gold/90 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.5)]',
                lang === 'ar' && 'font-arabic text-sm',
              )}
            >
              {t('nav.contact')}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-white/70 hover:text-gold transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-ink/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-y-0 end-0 w-full max-w-sm bg-ink-100 border-s border-white/10 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <span className="font-display text-white text-lg">{t('brand.name')}</span>
                <button onClick={() => setOpen(false)} className="text-white/60 hover:text-gold transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-1">
                {navItems.map((item, i) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'block py-4 border-b border-white/5 text-2xl font-display transition-colors',
                          active ? 'text-gold' : 'text-white/80 hover:text-gold',
                          lang === 'ar' && 'font-arabic',
                        )}
                      >
                        {t(item.key)}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-auto p-6 space-y-3">
                <button
                  onClick={() => { setOpen(false); onContact(); }}
                  className={cn('w-full py-4 rounded-full bg-gold text-ink text-sm tracking-wide2 uppercase font-medium', lang === 'ar' && 'font-arabic')}
                >
                  {t('nav.contact')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
