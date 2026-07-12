'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { useLang } from '@/app/context/LanguageContext';
import { Shell } from '@/components/Shell';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { cn } from '@/lib/utils';

interface ServicePageProps {
  navKey: string;
  heroAr: string;
  heroEn: string;
  image: string;
  includes: { en: string; ar: string }[];
  brands: string[];
  children?: React.ReactNode; // <-- Added this so React knows it can accept child components
}

const processSteps = [
  { key: 'service.page.step1' },
  { key: 'service.page.step2' },
  { key: 'service.page.step3' },
  { key: 'service.page.step4' },
];

export function ServicePage({ navKey, heroEn, heroAr, image, includes, brands, children }: ServicePageProps) {
  const { t, lang } = useLang();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowUpRight;
  const BackIcon = lang === 'ar' ? ArrowRight : ArrowLeft;

  return (
    <Shell>
      {/* ───────── HERO ───────── */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden grain">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-40 pb-16 md:pb-24">
          <Reveal>
            <Link
              href="/#services"
              className={cn(
                'inline-flex items-center gap-2 text-xs tracking-wide2 uppercase text-white/40 hover:text-gold transition-colors mb-8',
                lang === 'ar' && 'font-arabic',
              )}
            >
              <BackIcon className="w-4 h-4" />
              {t('service.page.back')}
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <span className={cn('block text-xs tracking-ultra uppercase text-gold mb-6', lang === 'ar' && 'font-arabic')}>
              {t(navKey)}
            </span>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className={cn('text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[1.05] text-balance max-w-4xl', lang === 'ar' && 'font-arabic leading-[1.3]')}>
              {lang === 'en' ? heroEn : heroAr}
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                className={cn(
                  'group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-ink text-sm tracking-wide2 uppercase font-medium hover:shadow-[0_0_40px_-5px_rgba(212,175,55,0.6)] transition-all duration-500',
                  lang === 'ar' && 'font-arabic',
                )}
              >
                {t('service.page.cta')}
                <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── INCLUDES ───────── */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            <Reveal className="md:col-span-4">
              <span className={cn('text-xs tracking-ultra uppercase text-gold', lang === 'ar' && 'font-arabic')}>
                {t(navKey)}
              </span>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-8">
              <h2 className={cn('text-3xl md:text-5xl font-display text-white leading-[1.1] text-balance', lang === 'ar' && 'font-arabic')}>
                {t('service.page.includes')}
              </h2>
            </Reveal>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {includes.map((item, i) => (
              <StaggerItem key={i} className="bg-ink p-8 md:p-10 flex items-start gap-5 hover:bg-ink-50 transition-colors duration-500">
                <div className="mt-1 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="text-xs tracking-ultra uppercase text-white/20 font-display block mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className={cn('text-lg md:text-xl font-display text-white/90 leading-snug', lang === 'ar' && 'font-arabic')}>
                    {lang === 'en' ? item.en : item.ar}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ───────── PROCESS ───────── */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
            <Reveal className="md:col-span-4">
              <span className={cn('text-xs tracking-ultra uppercase text-gold', lang === 'ar' && 'font-arabic')}>
                {lang === 'en' ? 'How it works' : 'آلية العمل'}
              </span>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-8">
              <h2 className={cn('text-3xl md:text-5xl font-display text-white leading-[1.1] text-balance', lang === 'ar' && 'font-arabic')}>
                {t('service.page.process')}
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.key} delay={i * 0.1}>
                <div className="relative p-8 md:p-10 rounded-2xl border border-white/8 hover-gold min-h-[240px] flex flex-col justify-between">
                  <span className="text-5xl md:text-6xl font-display gold-text leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className={cn('text-lg font-display text-white mb-2', lang === 'ar' && 'font-arabic')}>
                      {t(`${step.key}`)}
                    </h3>
                    <p className={cn('text-sm text-white/40 leading-relaxed', lang === 'ar' && 'font-arabic')}>
                      {t(`${step.key}.desc`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── INJECTED CATEGORY GRID ───────── */}
      {/* This perfectly positions your grid right after "Our Process" */}
      {children}

      {/* ───────── BRANDS ───────── */}
      <section className="relative py-20 md:py-28 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className={cn('block text-center text-xs tracking-ultra uppercase text-white/30 mb-10', lang === 'ar' && 'font-arabic')}>
              {lang === 'en' ? 'Brands we service' : 'العلامات التي نخدمها'}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-16 gap-y-6">
              {brands.map((brand) => (
                <span key={brand} className="text-xl md:text-3xl font-display text-white/25 hover:text-gold/60 transition-colors duration-500">
                  {brand}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="relative py-24 md:py-40 px-6 md:px-10 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className={cn('text-4xl md:text-7xl font-display text-white leading-[1.1] text-balance', lang === 'ar' && 'font-arabic')}>
              {lang === 'en' ? (
                <>
                  Ready when <span className="gold-text italic">you are.</span>
                </>
              ) : (
                <>
                  نحن جاهزون <span className="gold-text">عندما تكون جاهزاً.</span>
                </>
              )}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <button
              className={cn(
                'group mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-ink text-sm tracking-wide2 uppercase font-medium hover:shadow-[0_0_40px_-5px_rgba(212,175,55,0.6)] transition-all duration-500',
                lang === 'ar' && 'font-arabic',
              )}
            >
              {t('service.page.cta')}
              <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>
      </section>
    </Shell>
  );
}