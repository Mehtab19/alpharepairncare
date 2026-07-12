'use client';
import WashingMachineCategories from '@/app/context/WashingMachineCategories';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Plus } from 'lucide-react';
import { useLang } from '@/app/context/LanguageContext';
import { Shell } from '@/components/Shell';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { cn } from '@/lib/utils';

const bento = [
  { 
    id: 1, 
    key: 'service.1', 
    href: '/services/washing-machine', 
    span: 'lg:col-span-2 lg:row-span-2', // Large featured card
    img: '/services/washing-machine (5).jfif' // Replace with your actual image path
  },
  { 
    id: 2, 
    key: 'service.2', 
    href: '/services/electronics', 
    span: '', 
    img: '/services/tv-repair.jfif' 
  },
  { 
    id: 3, 
    key: 'service.3', 
    href: '/services/refrigerator', 
    span: '', 
    img: '/services/fridge-repair.jfif' 
  },
  { 
    id: 4, 
    key: 'service.4', 
    href: '/services/ac', 
    span: 'lg:col-span-2', // Wide card
    img: '/services/ac-repair.jfif' 
  },
  { 
    id: 5, 
    key: 'service.5', 
    href: '/services/dishwasher', // Optional extra service
    span: '', 
    img: '/services/washing-machine (7).jfif' 
  },
  { 
    id: 6, 
    key: 'service.6', 
    href: '/services/oven', 
    span: '', 
    img: '/services/oven-cleaning.jfif' 
  },
];

const features = [
  { key: 'feature.1' },
  { key: 'feature.2' },
  { key: 'feature.3' },
];

export default function Home() {
  const { t, lang } = useLang();
  const ArrowIcon = lang === 'ar' ? ArrowRight : ArrowUpRight;
  return (
    <Shell>
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden grain">
        {/* Background */}
<div className="absolute inset-0">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('https://www.fixdar.com/wp-content/uploads/2025/04/Home-Appliances-Repair-services-in-Karachi.jpg')" }}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
  <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
</div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-12 h-px bg-gold/60" />
            <span className={cn('text-xs tracking-ultra uppercase text-gold', lang === 'ar' && 'font-arabic')}>
              {lang === 'en' ? 'Est. 2026 · Saudi Arabia' : 'تأسس ٢٠٢٤ · المملكة العربية السعودية'}
            </span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'text-5xl md:text-7xl lg:text-8xl font-display leading-[1.05] text-white text-balance',
                lang === 'ar' && 'font-arabic leading-[1.3]',
              )}
            >
              {lang === 'en' ? (
                <>
                  Precision <span className="gold-text italic">Home</span> Appliance Maintenance.
                </>
              ) : (
                t('hero.title')
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={cn('mt-8 max-w-xl text-base md:text-lg text-white/50 leading-relaxed', lang === 'ar' && 'font-arabic')}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <button
                className={cn(
                  'group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-ink text-sm tracking-wide2 uppercase font-medium hover:shadow-[0_0_40px_-5px_rgba(212,175,55,0.6)] transition-all duration-500',
                  lang === 'ar' && 'font-arabic',
                )}
              >
                {t('hero.cta')}
                <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="#services"
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-4 text-sm text-white/60 hover:text-gold transition-colors duration-300',
                  lang === 'ar' && 'font-arabic',
                )}
              >
                {t('hero.scroll')}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="absolute bottom-0 inset-x-0 overflow-hidden border-t border-white/5 py-4 bg-ink/50 backdrop-blur-sm">
          <div className="flex marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-6">
                {['Samsung', 'Hitachi', 'Ariston', 'LG', 'Bosch', 'Whirlpool', 'Electrolux', 'Midea', 'Carrier', 'Daikin'].map((brand) => (
                  <span key={brand + i} className="text-xs tracking-ultra uppercase text-white/20 font-display">
                    {brand}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── SERVICES BENTO ───────────────── */}
      <section id="services" className="relative py-24 md:py-40 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
            <Reveal className="md:col-span-4">
              <span className={cn('text-xs tracking-ultra uppercase text-gold', lang === 'ar' && 'font-arabic')}>
                {t('services.label')}
              </span>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-8">
              <h2 className={cn('text-4xl md:text-6xl font-display text-white leading-[1.1] text-balance', lang === 'ar' && 'font-arabic')}>
                {t('services.title')}
              </h2>
              <p className={cn('mt-6 text-sm text-white/40 max-w-md', lang === 'ar' && 'font-arabic')}>
                {t('services.subtitle')}
              </p>
            </Reveal>
          </div>

          {/* Bento grid */}
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[minmax(260px,auto)]">
            {bento.map((card) => (
              <StaggerItem
                key={card.id}
                className={cn('group relative overflow-hidden rounded-2xl border border-white/8 hover-gold', card.span)}
              >
                <Link href={card.href} className="absolute inset-0 z-10">
                  <span className="sr-only">{t(`${card.key}.title`)}</span>
                </Link>
                {/* Image */}
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${card.img}')`, transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
                </div>
                {/* Content */}
                <div className="relative h-full min-h-[260px] flex flex-col justify-end p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="text-xs tracking-ultra uppercase text-gold/70 font-display">
                      {String(card.id).padStart(2, '0')}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
                      <Plus className="w-4 h-4 text-white/40 group-hover:text-gold group-hover:rotate-45 transition-all duration-500" />
                    </div>
                  </div>
                  <h3 className={cn('text-xl md:text-2xl font-display text-white leading-tight', lang === 'ar' && 'font-arabic')}>
                    {t(`${card.key}.title`)}
                  </h3>
                  <p className={cn('mt-3 text-sm text-white/40 leading-relaxed line-clamp-2', lang === 'ar' && 'font-arabic')}>
                    {t(`${card.key}.desc`)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ───────────────── FEATURES ───────────────── */}
      <section className="relative py-24 md:py-40 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
            <Reveal className="md:col-span-4">
              <span className={cn('text-xs tracking-ultra uppercase text-gold', lang === 'ar' && 'font-arabic')}>
                {t('features.label')}
              </span>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-8">
              <h2 className={cn('text-4xl md:text-6xl font-display text-white leading-[1.1] text-balance', lang === 'ar' && 'font-arabic')}>
                {t('features.title')}
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {features.map((f, i) => (
              <Reveal key={f.key} delay={i * 0.1}>
                <div className="bg-ink p-10 md:p-14 h-full flex flex-col justify-between min-h-[300px] hover:bg-ink-50 transition-colors duration-500">
                  <span className="text-xs tracking-ultra uppercase text-white/20 font-display">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className={cn('text-6xl md:text-8xl font-display gold-text leading-none mb-6', lang === 'ar' && 'font-arabic')}>
                      {t(`${f.key}.value`)}
                    </div>
                    <h3 className={cn('text-lg font-display text-white mb-2', lang === 'ar' && 'font-arabic')}>
                      {t(`${f.key}.label`)}
                    </h3>
                    <p className={cn('text-sm text-white/40 leading-relaxed', lang === 'ar' && 'font-arabic')}>
                      {t(`${f.key}.desc`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── CTA ───────────────── */}
      <section className="relative py-24 md:py-40 px-6 md:px-10 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Reveal>
            <span className={cn('text-xs tracking-ultra uppercase text-gold mb-6 block', lang === 'ar' && 'font-arabic')}>
              {t('nav.contact')}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className={cn('text-4xl md:text-7xl font-display text-white leading-[1.1] text-balance', lang === 'ar' && 'font-arabic')}>
              {lang === 'en' ? (
                <>
                  Your appliance deserves <span className="gold-text italic">precision.</span>
                </>
              ) : (
                <>
                  جهازك يستحق <span className="gold-text">الإتقان.</span>
                </>
              )}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={cn('mt-8 text-base text-white/40 max-w-lg mx-auto', lang === 'ar' && 'font-arabic')}>
              {t('hero.subtitle')}
            </p>
          </Reveal>
        </div>
      </section>
    </Shell>
  )
  ;
}
