"use client";
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useLang } from '@/app/context/LanguageContext';
import { cn } from '@/lib/utils';
import { acData } from '@/data/acData';

export default function AcDetailsPage({ params }: { params: { id: string } }) {
  const { lang, dir } = useLang();
  
  const currentService = acData.find((s) => s.id === params.id);
  if (!currentService) return notFound();

  const sidebarServices = acData.filter(s => s.id !== params.id).slice(0, 5); 
  const l = lang as 'en' | 'ar';

  return (
    <div className="min-h-screen bg-ink text-white pt-32 pb-24 px-6 md:px-10" dir={dir}>
      <div className="max-w-7xl mx-auto">
        
        <div className={cn("text-xs tracking-wider uppercase text-white/40 mb-12", lang === 'ar' && 'font-arabic')}>
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services/ac" className="hover:text-gold transition-colors">
            {lang === 'en' ? 'AC Repair' : 'صيانة مكيفات'}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gold">{currentService[l]}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <aside className="lg:col-span-3 order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-white/10 pt-10 lg:pt-0 lg:pr-10 rtl:lg:border-r-0 rtl:lg:border-l rtl:lg:pl-10">
            <h3 className={cn("text-lg font-display text-white mb-8 border-b border-white/10 pb-4", lang === 'ar' && 'font-arabic')}>
              {lang === 'en' ? 'Other AC Services' : 'خدمات التكييف الأخرى'}
            </h3>
            <div className="space-y-6">
              {sidebarServices.map((item) => (
                <Link href={`/services/ac/${item.id}`} key={item.id} className="flex gap-4 group">
                  <div className="w-16 h-16 shrink-0 rounded-md overflow-hidden bg-white/5 border border-white/10 relative">
                    <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url('${item.img}')` }} />
                  </div>
                  <p className={cn("text-sm text-white/70 group-hover:text-gold transition-colors line-clamp-3", lang === 'ar' && 'font-arabic')}>
                    {item[l]}
                  </p>
                </Link>
              ))}
            </div>
          </aside>

          <main className="lg:col-span-9 order-1 lg:order-2">
            <h1 className={cn("text-3xl md:text-5xl font-display text-gold mb-8 leading-tight", lang === 'ar' && 'font-arabic')}>
              {currentService[l]}
            </h1>
            
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 mb-12 relative">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${currentService.img}')` }} />
            </div>

            <article className="prose prose-invert prose-lg max-w-none">
              {currentService.seoContent.map((block, idx) => {
                if (block.type === 'p') {
                  return <p key={idx} className={cn("text-white/70 leading-relaxed mb-6", lang === 'ar' && 'font-arabic')}>{block[l] as string}</p>;
                }
                if (block.type === 'h2') {
                  return <h2 key={idx} className={cn("text-2xl md:text-3xl font-display text-white mt-12 mb-6", lang === 'ar' && 'font-arabic')}>{block[l] as string}</h2>;
                }
                if (block.type === 'ul') {
                  const listItems = block[l] as string[];
                  return (
                    <ul key={idx} className="space-y-3 mb-8 border border-white/5 bg-white/5 p-6 rounded-xl">
                      {listItems.map((li, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                          <span className={cn("text-white/80", lang === 'ar' && 'font-arabic')}>{li}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}