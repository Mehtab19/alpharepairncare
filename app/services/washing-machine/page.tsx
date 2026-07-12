import { ServicePage } from '@/components/ServicePage';
import WashingMachineCategories from '@/app/context/WashingMachineCategories';

export default function WashingMachinePage() {
  return (
    <main>
      {/* Notice how WashingMachineCategories is now INSIDE the ServicePage tags! */}
      <ServicePage
        navKey="nav.washing"
        heroEn="Washing Machine Repair"
        heroAr="صيانة غسالات"
        image="/services/washing-machine (5).jfif" 
        includes={[
          { en: 'Drum, bearing, and motor diagnostics', ar: 'تشخيص الحلة والمحامل والمحرك' },
          { en: 'Control board repair and recalibration', ar: 'إصلاح وإعادة معايرة لوحة التحكم' },
          { en: 'Water pump and inlet valve replacement', ar: 'استبدال مضخة الماء وصمام الدخول' },
          { en: 'Door seal, lock, and gasket service', ar: 'صيانة باب الغسالة والإحكام والقفل' },
        ]}
        brands={['Samsung', 'Ariston', 'LG', 'Bosch', 'Whirlpool', 'Electrolux']}
      >
        {/* THIS IS THE INJECTED CHILD COMPONENT */}
        <WashingMachineCategories />
      </ServicePage>
    </main>
  );
}