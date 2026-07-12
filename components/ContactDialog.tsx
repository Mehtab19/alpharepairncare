'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MapPin } from 'lucide-react';
import { useLang } from '@/app/context/LanguageContext';
import { cn } from '@/lib/utils';

export function ContactDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, lang } = useLang();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-md" onClick={onClose} />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg glass-card border border-white/10 rounded-2xl p-8 md:p-10 lux-shadow"
          >
            <button
              onClick={onClose}
              className="absolute top-5 end-5 p-2 text-white/40 hover:text-gold transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-8">
              <span className={cn('block text-xs tracking-ultra uppercase text-gold mb-3', lang === 'ar' && 'font-arabic')}>{t('nav.contact')}</span>
              <h2 className={cn('text-3xl md:text-4xl font-display text-white mb-2', lang === 'ar' && 'font-arabic')}>{t('contact.title')}</h2>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-black/40 border border-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:border-gold/60 transition-colors">
                <span className={cn('text-[10px] tracking-widest uppercase text-gold', lang === 'ar' && 'font-arabic')}>
                  {lang === 'ar' ? 'رقم الهاتف' : 'PHONE NUMBER'}
                </span>
                <a href="tel:+966542173874" className="flex items-center gap-3 text-white hover:text-gold transition-colors font-medium text-sm md:text-base">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <span className={cn(lang === 'ar' && 'font-arabic')}>{t('footer.phone')}</span>
                </a>
              </div>

              <div className="flex flex-col gap-2 p-5 rounded-xl bg-black/40 border border-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:border-gold/60 transition-colors">
                <span className={cn('text-[10px] tracking-widest uppercase text-gold', lang === 'ar' && 'font-arabic')}>
                  {lang === 'ar' ? 'العنوان' : 'ADDRESS'}
                </span>
                <div className="flex items-start gap-3 text-white/90 hover:text-gold transition-colors text-sm md:text-base">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className={cn('leading-relaxed', lang === 'ar' && 'font-arabic')}>{t('footer.address')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
