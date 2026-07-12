import { ServicePage } from '@/components/ServicePage';
import ElectronicsCategories from '@/app/context/ElectronicsCategories'; 

export default function ElectronicsPage() {
  return (
    <main className="bg-ink min-h-screen">
      <ServicePage
        navKey="nav.electronics"
        heroEn="Electronics & Screen Maintenance"
        heroAr="صيانة الإلكترونيات والشاشات"
        image="/services/tv-bg.jfif" // Update with your actual local hero background image
        includes={[
          { en: 'LED, OLED, and QLED screen repairs', ar: 'إصلاح شاشات LED و OLED و QLED' },
          { en: 'Motherboard and circuit diagnostics', ar: 'تشخيص اللوحة الأم والدوائر الكهربائية' },
          { en: 'Backlight and power supply replacement', ar: 'استبدال الإضاءة الخلفية ومزود الطاقة' },
          { en: 'Software updates and system resets', ar: 'تحديثات البرامج وإعادة ضبط النظام' },
        ]}
        brands={['Samsung', 'LG', 'Sony', 'TCL', 'Hisense', 'Panasonic']}
      >
        {/* The Electronics Categories grid will render right under Our Process! */}
        <ElectronicsCategories />
      </ServicePage>
    </main>
  );
}