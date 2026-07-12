import { ServicePage } from '@/components/ServicePage';
// 1. MAKE SURE THIS IMPORT IS HERE
import OvenCategories from '@/app/context/OvenCategories';

export default function OvenPage() {
  return (
    <main className="bg-ink min-h-screen">
      <ServicePage
        navKey="nav.oven"
        heroEn="Oven Maintenance & Repair"
        heroAr="صيانة أفران"
        image="/services/oven-bg.jfif"
        includes={[
          { en: 'Gas leak detection and repair', ar: 'كشف تسربات الغاز وإصلاحها' },
          { en: 'Electric heating element replacement', ar: 'استبدال عنصر التسخين الكهربائي' },
          { en: 'Deep cleaning and grease removal', ar: 'التنظيف العميق وإزالة الشحوم' },
          { en: 'Door glass and hinge repair', ar: 'إصلاح زجاج الباب والمفصلات' },
        ]}
        brands={['Glem Gas', 'Universal', 'Bosch', 'Siemens', 'Beko', 'Ariston']}
      >
        {/* 2. MAKE SURE THE COMPONENT IS NESTED RIGHT HERE */}
        <OvenCategories />
      </ServicePage>
    </main>
  );
}