export type SeoBlock = {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'image';
  en: string | string[];
  ar: string | string[];
  url?: string;
};

export interface ElectronicsItem {
  id: string;
  img: string;
  en: string;
  ar: string;
  seoContent: SeoBlock[];
}

export const electronicsData: ElectronicsItem[] = [
  {
    id: "tv-screen-repair-jeddah",
    img: "/services/tv-repair(2).jfif", // Add this image to your public/services folder
    en: "TV screen repair in Jeddah with warranty",
    ar: "صيانة شاشات بجدة مع الضمان",
    seoContent: [
      { 
        type: 'p', 
        en: "Modern televisions are highly sensitive electronic devices. Our specialized screen repair center in Jeddah offers professional diagnostic and maintenance services for all major TV brands, including LED, OLED, and QLED displays.", 
        ar: "تعتبر أجهزة التلفزيون الحديثة أجهزة إلكترونية حساسة للغاية. يقدم مركز صيانة الشاشات المتخصص لدينا في جدة خدمات تشخيص وصيانة احترافية لجميع العلامات التجارية الكبرى للتلفزيونات، بما في ذلك شاشات LED و OLED و QLED." 
      },
      { 
        type: 'h2', 
        en: "Common TV Screen Repairs", 
        ar: "إصلاحات شاشات التلفزيون الشائعة" 
      },
      { 
        type: 'ul', 
        en: [
          "Backlight replacement for dark or flickering screens.",
          "Motherboard and power supply repair.",
          "Resolving distorted colors, vertical lines, and pixel damage.",
          "Smart TV software updates and Wi-Fi connectivity fixes."
        ], 
        ar: [
          "استبدال الإضاءة الخلفية للشاشات المظلمة أو الوامضة.",
          "إصلاح اللوحة الأم ومزود الطاقة.",
          "حل مشكلات الألوان المشوهة، والخطوط العمودية، وتلف البكسل.",
          "تحديثات برامج التلفزيون الذكي وإصلاحات اتصال Wi-Fi."
        ] 
      }
    ]
  }
  // You can easily add more categories here later!
];