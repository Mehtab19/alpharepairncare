import { ServicePage } from '@/components/ServicePage';
import AcCategories from '@/app/context/ACCategories'; // Make sure this path points to wherever you saved Step 2!

export default function AcPage() {
  return (
    <main className="bg-ink min-h-screen">
      <ServicePage
        navKey="nav.ac"
        heroEn="Air Conditioning Maintenance"
        heroAr="صيانة مكيفات"
        image="/services/Ac-service.jfif" // Update with your actual local hero background image
        includes={[
          { en: 'Freon gas charging and leak fixing', ar: 'شحن غاز الفريون وإصلاح التسريبات' },
          { en: 'Compressor repair and replacement', ar: 'إصلاح واستبدال الضاغط' },
          { en: 'Deep coil and filter cleaning', ar: 'تنظيف عميق للملفات والفلاتر' },
          { en: 'Thermostat and electrical diagnostics', ar: 'فحص الثرموستات والدوائر الكهربائية' },
        ]}
        brands={['Gree', 'O General', 'LG', 'Samsung', 'Carrier', 'Daikin']}
      >
        {/* The AC Categories grid will render right under Our Process! */}
        <AcCategories />
      </ServicePage>
    </main>
  );
}