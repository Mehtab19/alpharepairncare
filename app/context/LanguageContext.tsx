'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type Lang = 'en' | 'ar';

type Dict = Record<string, { en: string; ar: string }>;

const dict: Dict = {
  // Brand
  'brand.name': { en: 'Alpha care', ar: 'ألفا كير' },
  'brand.tagline': { en: 'Home Appliance Maintenance', ar: 'صيانة الأجهزة المنزلية' },

  // Nav
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.washing': { en: 'Washing Machine', ar: 'غسالات' },
  'nav.fridge': { en: 'Refrigerator', ar: 'ثلاجات' },
  'nav.ac': { en: 'AC Repair', ar: 'مكيفات' },
  'nav.oven': { en: 'Oven & Cleaning', ar: 'أفران' },
  'nav.electronics': { en: 'Electronics & Screens', ar: 'إلكترونيات' },
  'nav.contact': { en: 'Contact Us', ar: 'اتصل بنا' },

  // Hero
  'hero.title': { en: 'Precision Home Appliance Maintenance', ar: 'شـركـة ألفا كير | لصيانة الإجهزة المنزلية' },
  'hero.subtitle': { en: 'Certified technicians. Genuine parts. Service across Riyadh, Jeddah, and Madinah — delivered with the discipline of a luxury concierge.', ar: 'فنيون معتمدون. قطع غيار أصلية. خدمة في الرياض وجدة والمدينة المنورة — بدقة و انضباط الاستضافة الفاخرة.' },
  'hero.cta': { en: 'Request Service', ar: 'اطلب الخدمة' },
 

  // Services section
  'services.label': { en: 'Our Services', ar: 'خدماتنا' },
  'services.title': { en: 'Specialized Maintenance, Engineered for Every Appliance', ar: 'صيانة متخصصة لكل جهاز على حدة' },
  'services.subtitle': { en: 'Six disciplines. One standard of excellence.', ar: 'ست تخصصات. معيار واحد من التميز.' },

  // Bento cards
  'service.1.title': { en: 'Samsung Washing Machine Repair', ar: 'صيانة غسالات سامسونج الرياض بالضمان' },
  'service.1.desc': { en: 'Authorized Samsung warranty service in Riyadh — drum, motor, and control board specialists.', ar: 'خدمة سامسونج المعتمدة بالضمان في الرياض — متخصصون في الحلة والمحرك ولوحة التحكم.' },
  'service.2.title': { en: 'Screen & TV Repair', ar: 'صيانة شاشات وتليفزيونات بجدة' },
  'service.2.desc': { en: 'Panel-level diagnostics and repair for LED, OLED, and QLED screens in Jeddah.', ar: 'تشخيص وإصلاح على مستوى الشاشة لـ LED و OLED و QLED في جدة.' },
  'service.3.title': { en: 'Hitachi Fridge Technician', ar: 'فني صيانة ثلاجات بجدة ثلاجة هيتاشي' },
  'service.3.desc': { en: 'Dedicated Hitachi refrigerator service in Jeddah — compressor, gas charge, and sealing.', ar: 'خدمة ثلاجات هيتاشي dedic في جدة — الضاغط وشحن الغاز والإحكام.' },
  'service.4.title': { en: 'AC Repair Madinah', ar: 'صيانة مكيفات بالمدينة المنورة' },
  'service.4.desc': { en: 'Split, cassette, and ducted AC maintenance across Madinah — cooling restored to factory spec.', ar: 'صيانة مكيفات سبليت وكاسيت ومركزي بالمدينة المنورة — تبريد يعود لمواصفات المصنع.' },
  'service.5.title': { en: 'Ariston Washing Machine', ar: 'صيانة غسالات اريستون بالرياض' },
  'service.5.desc': { en: 'Ariston-certified repair in Riyadh — bearing replacement, pump service, and recalibration.', ar: 'صيانة اريستون المعتمدة في الرياض — استبدال المحامل وخدمة المضخة وإعادة المعايرة.' },
  'service.6.title': { en: 'Oven Cleaning & Polishing', ar: 'شركة تنظيف افران بالرياض' },
  'service.6.desc': { en: 'Deep clean, degrease, and polish for ovens in Riyadh — interior and exterior restoration.', ar: 'تنظيف عميق وإزالة شحم وتلميع للأفران في الرياض — ترميم داخلي و خارجي.' },

  'services.cta': { en: 'Request this service', ar: 'اطلب هذه الخدمة' },

  // Features
  'features.label': { en: 'Why Alpha care', ar: 'لماذا ألفا كير' },
  'features.title': { en: 'A standard measured in guarantees, not promises', ar: 'معيار يُقاس بالضمانات لا بالوعود' },
  'feature.1.value': { en: '24/7', ar: '٢٤/٧' },
  'feature.1.label': { en: 'Emergency Service', ar: 'خدمة الطوارئ' },
  'feature.1.desc': { en: 'Rapid-response dispatch, day or night.', ar: 'استجابة سريعة، ليلاً ونهاراً.' },
  'feature.2.value': { en: '100%', ar: '١٠٠٪' },
  'feature.2.label': { en: 'Guaranteed Parts', ar: 'قطع غيار مضمونة' },
  'feature.2.desc': { en: 'Only genuine, manufacturer-traced components.', ar: 'قطع أصلية فقط، قابلة للتتبع من المصنع.' },
  'feature.3.value': { en: '90', ar: '٩٠' },
  'feature.3.label': { en: 'Days Warranty', ar: 'يوم ضمان' },
  'feature.3.desc': { en: 'Written warranty on every repair we complete.', ar: 'ضمان مكتوب على كل إصلاح نُتقنه.' },

  // Service page
  'service.page.back': { en: 'All services', ar: 'كل الخدمات' },
  'service.page.cta': { en: 'Book this service', ar: 'احجز هذه الخدمة' },
  'service.page.includes': { en: 'What this service includes', ar: 'ما تتضمنه هذه الخدمة' },
  'service.page.process': { en: 'Our process', ar: 'آلية العمل' },
  'service.page.step1': { en: 'Diagnose', ar: 'تشخيص' },
  'service.page.step1.desc': { en: 'On-site inspection and fault identification with manufacturer-grade tools.', ar: 'فحص ميداني وتحديد العطل بأدوات بمستوى المصنع.' },
  'service.page.step2': { en: 'Quote', ar: 'تسعير' },
  'service.page.step2.desc': { en: 'Transparent fixed quote before any work begins — no surprises.', ar: 'تسعير شفاف وثابت قبل بدء أي عمل — بلا مفاجآت.' },
  'service.page.step3': { en: 'Repair', ar: 'إصلاح' },
  'service.page.step3.desc': { en: 'Genuine parts fitted by certified technicians, calibrated to factory spec.', ar: 'قطع أصلية يركبها فنيون معتمدون، معايرة لمواصفات المصنع.' },
  'service.page.step4': { en: 'Warranty', ar: 'ضمان' },
  'service.page.step4.desc': { en: '90-day written warranty and post-service follow-up call.', ar: 'ضمان مكتوب ٩٠ يوماً ومكالمة متابعة بعد الخدمة.' },

  // Footer
  'footer.about': { en: 'About Us', ar: 'عن العمران' },
  'footer.privacy': { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
  'footer.terms': { en: 'Terms of Use', ar: 'سياسة الاستخدام' },
  'footer.contact': { en: 'Contact Us', ar: 'اتصل بنا' },
  'footer.copyright': { en: 'Copyright 2024 © All rights reserved to Alpha care Company', ar: 'حقوق النشر 2024 © جميع الحقوق محفوظة لشركة ألفا كير' },
  'footer.desc': { en: 'Luxury-grade home appliance maintenance, delivered with the discipline of a concierge.', ar: 'صيانة فاخرة للأجهزة المنزلية، بدقة و انضباط الاستضافة.' },
  'footer.services': { en: 'Services', ar: 'الخدمات' },
  'footer.company': { en: 'Company', ar: 'الشركة' },
  'footer.contact.title': { en: 'Get in touch', ar: 'تواصل معنا' },
  'footer.phone': { en: '+966 54 217 3874', ar: '+966 54 217 3874' },
  'footer.address': { en: 'Near صالون أجمل القصات، 7462 الحارث بن محمد، 5404، DMWB5404, Madinah 42394, Saudi Arabia', ar: 'Near صالون أجمل القصات، 7462 الحارث بن محمد، 5404، DMWB5404, Madinah 42394, Saudi Arabia' },

  // Contact dialog
  'contact.title': { en: 'Request a Service', ar: 'اطلب خدمة' },
  'contact.subtitle': { en: 'Tell us what you need. A specialist will call you back within the hour.', ar: 'أخبرنا بما تحتاجه. سيتصل بك مختص خلال ساعة.' },
  'contact.name': { en: 'Full name', ar: 'الاسم الكامل' },
  'contact.phone': { en: 'Phone number', ar: 'رقم الجوال' },
  'contact.service': { en: 'Service needed', ar: 'الخدمة المطلوبة' },
  'contact.submit': { en: 'Submit request', ar: 'إرسال الطلب' },
  'contact.success': { en: 'Request received. We will call you shortly.', ar: 'تم استلام طلبك. سنتصل بك قريباً.' },
};

interface LanguageContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar');
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const t = useCallback(
    (key: string) => {
      const entry = dict[key];
      if (!entry) return key;
      return entry[lang];
    },
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
