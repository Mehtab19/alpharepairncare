"use client";

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useLang } from '@/app/context/LanguageContext';
import { cn } from '@/lib/utils';
import { allServicesData, AnyServiceItem } from '@/data/allServicesData';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface ServiceDetailsClientProps {
  id: string;
}

export default function ServiceDetailsClient({ id }: ServiceDetailsClientProps) {
  const { lang, dir, t } = useLang();
  
  // Find the current service based on the URL ID
  const service = allServicesData.find((s) => s.id === id);
  if (!service) return notFound(); // Show 404 if ID is wrong

  // Grab a few random/top items for the sidebar
  const sidebarServices = allServicesData.slice(0, 5); 
  
  const l = lang as 'en' | 'ar';
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-ink text-white pt-32 pb-24 px-6 md:px-10" dir={dir}>
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumbs */}
        <div className={cn("text-xs tracking-wider uppercase text-white/40 mb-12", lang === 'ar' && 'font-arabic')}>
          <Link href="/" className="hover:text-gold transition-colors">{t('nav.home')}</Link>
          <span className="mx-2">/</span>
          <Link href="/#services" className="hover:text-gold transition-colors">{t('services.label')}</Link>
          <span className="mx-2">/</span>
          <span className="text-gold">{service[l]}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Sidebar - Matches Left Column in screenshots */}
          <aside className="lg:col-span-3 order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-white/10 pt-10 lg:pt-0 lg:pr-10 rtl:lg:border-r-0 rtl:lg:border-l rtl:lg:pl-10">
            <h3 className={cn("text-lg font-display text-white mb-8 border-b border-white/10 pb-4", lang === 'ar' && 'font-arabic')}>
              {lang === 'en' ? 'Most requested services' : 'الخدمات الأكثر طلباً'}
            </h3>
            <div className="space-y-6">
              {sidebarServices.map((item) => (
                <Link href={`/services/${item.id}`} key={item.id} className="flex gap-4 group">
                  <div className="w-16 h-16 shrink-0 rounded-md overflow-hidden bg-white/5 border border-white/10">
                    <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url('${item.img}')` }} />
                  </div>
                  <p className={cn("text-sm text-white/70 group-hover:text-gold transition-colors line-clamp-3", lang === 'ar' && 'font-arabic')}>
                    {item[l]}
                  </p>
                </Link>
              ))}
            </div>
            
            {/* CTA Sidebar Banner */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 text-center">
              <h4 className={cn("text-lg font-display text-gold mb-3", lang === 'ar' && 'font-arabic')}>
                {lang === 'en' ? 'Need Immediate Help?' : 'هل تحتاج إلى مساعدة فورية؟'}
              </h4>
              <p className={cn("text-sm text-white/70 mb-6", lang === 'ar' && 'font-arabic')}>
                {lang === 'en' ? 'Contact our specialists via WhatsApp for a quick response.' : 'تواصل مع متخصصينا عبر واتساب للحصول على استجابة سريعة.'}
              </p>
              <a 
                href="https://wa.me/966542173874" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn("inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-ink text-sm font-medium hover:bg-white transition-colors w-full justify-center", lang === 'ar' && 'font-arabic')}
              >
                {lang === 'en' ? 'WhatsApp Us' : 'تواصل عبر واتساب'}
                <ArrowIcon className="w-4 h-4" />
              </a>
            </div>
          </aside>

          {/* Main Article Content - Matches Right Column in screenshots */}
          <main className="lg:col-span-9 order-1 lg:order-2">
            
            {/* H1 Title */}
            <h1 className={cn("text-3xl md:text-5xl font-display text-gold mb-8 leading-tight", lang === 'ar' && 'font-arabic')}>
              {service[l]}
            </h1>
            
            {/* Main Image */}
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 mb-12">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${service.img}')` }} />
            </div>

            {/* Dynamic SEO Content Blocks */}
            <article className="prose prose-invert prose-lg max-w-none">
              {service.seoContent.map((block, idx) => {
                
                // Render Paragraphs
                if (block.type === 'p') {
                  return (
                    <p key={idx} className={cn("text-white/70 leading-relaxed mb-6", lang === 'ar' && 'font-arabic')}>
                      {block[l] as string}
                    </p>
                  );
                }
                
                // Render Headings (H2)
                if (block.type === 'h2') {
                  return (
                    <h2 key={idx} className={cn("text-2xl md:text-3xl font-display text-white mt-12 mb-6", lang === 'ar' && 'font-arabic')}>
                      {block[l] as string}
                    </h2>
                  );
                }
                
                // Render Headings (H3)
                if (block.type === 'h3') {
                  return (
                    <h3 key={idx} className={cn("text-xl md:text-2xl font-display text-gold mt-10 mb-4", lang === 'ar' && 'font-arabic')}>
                      {block[l] as string}
                    </h3>
                  );
                }
                
                // Render Bullet Lists
                if (block.type === 'ul') {
                  const listItems = block[l] as string[];
                  return (
                    <ul key={idx} className="space-y-3 mb-8 border border-white/5 bg-white/5 p-6 rounded-xl">
                      {listItems.map((li, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                          <span className={cn("text-white/80", lang === 'ar' && 'font-arabic')}>{li}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                
                // Render Image
                if (block.type === 'image' && block.url) {
                  return (
                     <div key={idx} className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10 my-10">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${block.url}')` }} />
                     </div>
                  )
                }

                return null;
              })}
            </article>

            {/* Contact Information */}
            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20">
              <h3 className={cn("text-2xl font-display text-gold mb-6", lang === 'ar' && 'font-arabic')}>
                {lang === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <span className="text-gold">📞</span>
                  </div>
                  <div>
                    <p className={cn("text-sm text-white/50 mb-1", lang === 'ar' && 'font-arabic')}>
                      {lang === 'en' ? 'Phone' : 'الهاتف'}
                    </p>
                    <p className={cn("text-lg text-white font-medium", lang === 'ar' && 'font-arabic')}>
                      +966542173874
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <span className="text-gold">🏢</span>
                  </div>
                  <div>
                    <p className={cn("text-sm text-white/50 mb-1", lang === 'ar' && 'font-arabic')}>
                      {lang === 'en' ? 'Company' : 'الشركة'}
                    </p>
                    <p className={cn("text-lg text-white font-medium leading-relaxed", lang === 'ar' && 'font-arabic')}>
                      {lang === 'en' 
                        ? 'ALPHA CARE Home Appliances, Refrigeration & Air Conditioning Company'
                        : 'شركة ألفا كير لصيانة الأجهزة المنزلية والتبريد والتكييف'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </main>
        </div>

      </div>
    </div>
  );
}
