"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/app/context/LanguageContext'; 
import { cn } from '@/lib/utils';
import { servicesData } from '@/data/servicesData'; // <-- Make sure this path points to where you saved the file above!

const localText = {
  title: { en: 'Washing Machine', ar: 'أقسام' },
  titleItalic: { en: 'Categories', ar: 'الغسالات' },
  desc: { 
    en: 'Al Omran Company for Automatic Washing Machine Maintenance in the Kingdom of Saudi Arabia offers maintenance services for all different types of automatic washing machines, most notably Daewoo, Toshiba, Samsung, Ariston, and many other international brands.', 
    ar: 'تقدم شركة العمران لصيانة الغسالات الأوتوماتيكية في المملكة العربية السعودية خدمات الصيانة لجميع أنواع الغسالات الأوتوماتيكية المختلفة، وأبرزها دايو، توشيبا، سامسونج، أريستون، والعديد من العلامات التجارية العالمية الأخرى.' 
  },
  prev: { en: 'Previous page', ar: 'الصفحة السابقة' },
  next: { en: 'Next page', ar: 'الصفحة التالية' },
  moreInfo: { en: 'More information', ar: 'مزيد من المعلومات' }
};

export default function WashingMachineCategories() {
  const { lang, dir } = useLang();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(servicesData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = servicesData.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
  const handlePrev = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10 border-t border-white/5" dir={dir}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <span className={cn('text-xs tracking-ultra uppercase text-gold block', lang === 'ar' && 'font-arabic')}>
              {localText.title[lang]}
            </span>
          </div>
          <div className="md:col-span-8">
            <h2 className={cn('text-3xl md:text-5xl font-display text-white leading-[1.1] text-balance mb-6', lang === 'ar' && 'font-arabic')}>
              {localText.title[lang]} <span className="text-gold italic">{localText.titleItalic[lang]}</span>
            </h2>
            <p className={cn('text-sm md:text-base text-white/40 leading-relaxed max-w-2xl', lang === 'ar' && 'font-arabic')}>
              {localText.desc[lang]}
            </p>
          </div>
        </div>

        {/* Grid with Hover Overlay & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <Link href={`/services/${item.id}`} key={item.id} className="block group">
              <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden group-hover:border-gold/30 transition-colors duration-500 relative">
                
                {/* Image Area */}
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${item.img}')` }} />
                  
                  {/* Default tint */}
                  <div className="absolute inset-0 bg-ink/40 transition-colors duration-500" />
                  
                  {/* HOVER OVERLAY (Matches your image!) */}
                  <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className={cn("bg-ink/90 text-white px-5 py-2.5 text-sm font-medium border border-white/10 shadow-lg", lang === 'ar' && 'font-arabic')}>
                      {localText.moreInfo[lang]}
                    </span>
                  </div>
                </div>

                {/* Text Area */}
                <div className="p-8">
                  <h3 className={cn('text-xl font-display text-white/90 group-hover:text-gold transition-colors duration-500 leading-snug', lang === 'ar' && 'font-arabic')}>
                    {item[lang as 'en' | 'ar']}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={`mt-16 flex items-center justify-center space-x-4 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
            <button onClick={handlePrev} disabled={currentPage === 1} className={cn(`px-6 py-2 rounded-full border transition-all duration-300 text-sm tracking-wide uppercase`, currentPage === 1 ? 'border-white/5 text-white/20 cursor-not-allowed' : 'border-white/20 text-white/70 hover:border-gold hover:text-gold', lang === 'ar' && 'font-arabic')}>
              {localText.prev[lang]}
            </button>
            <div className={`flex space-x-2 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button key={pageNum} onClick={() => setCurrentPage(pageNum)} className={`w-10 h-10 rounded-full flex items-center justify-center font-display transition-all duration-300 ${currentPage === pageNum ? 'bg-gold text-ink font-medium' : 'border border-white/10 text-white/50 hover:border-gold/50 hover:text-white'}`}>
                    {pageNum}
                  </button>
                );
              })}
            </div>
            <button onClick={handleNext} disabled={currentPage === totalPages} className={cn(`px-6 py-2 rounded-full border transition-all duration-300 text-sm tracking-wide uppercase`, currentPage === totalPages ? 'border-white/5 text-white/20 cursor-not-allowed' : 'border-white/20 text-white/70 hover:border-gold hover:text-gold', lang === 'ar' && 'font-arabic')}>
              {localText.next[lang]}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}