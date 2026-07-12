import { ServicePage } from '@/components/ServicePage';
import FridgeCategories from '@/app/context/FridgeComponents';

export default function RefrigeratorPage() {
  return (
    <main className="bg-ink min-h-screen">
      <ServicePage
        navKey="nav.fridge"
        heroEn="Refrigerator Repair"
        heroAr="صيانة ثلاجات"
        // Update this exact line below:
        image="/services/fridge-bg.jfif"
        includes={[
          { en: 'Compressor and gas charge service', ar: 'صيانة الضاغط وشحن الغاز' },
          { en: 'Thermostat and temperature control repair', ar: 'إصلاح منظم الحرارة والتحكم بدرجة البرودة' },
          { en: 'Door sealing and gasket replacement', ar: 'إحكام الباب واستبدال المطاط' },
          { en: 'No-frost system and defrost heater repair', ar: 'صيانة نظام النوفروست وسخان الإذابة' },
        ]}
        brands={['Hitachi', 'Samsung', 'LG', 'Bosch', 'Whirlpool', 'Midea']}
      >
        {/* Your categories grid passed as a child */}
        <FridgeCategories />
      </ServicePage>
    </main>
  );
}