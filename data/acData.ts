export type SeoBlock = {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'image';
  en: string | string[];
  ar: string | string[];
  url?: string;
};

export interface AcItem {
  id: string;
  img: string;
  en: string;
  ar: string;
  seoContent: SeoBlock[];
}

export const acData: AcItem[] = [
  {
    id: "ac-repair-jeddah",
    img: "/services/ac-repair(1).jfif", // Add this image to your public/services folder
    en: "Air conditioning repair company in Jeddah",
    ar: "شركة تصليح مكيفات بجدة",
    seoContent: [
      { 
        type: 'p', 
        en: "Jeddah's intense heat and coastal humidity demand robust air conditioning systems. We provide expert repair services for all AC types, including split, window, and central units. Our certified technicians rapidly diagnose compressor failures, freon leaks, and electrical faults to restore your comfort.", 
        ar: "تتطلب حرارة جدة الشديدة ورطوبتها الساحلية أنظمة تكييف قوية. نقدم خدمات إصلاح متخصصة لجميع أنواع المكيفات، بما في ذلك وحدات السبلت والشباك والمركزية. يقوم فنيونا المعتمدون بتشخيص أعطال الضاغط وتسريبات الفريون والأعطال الكهربائية بسرعة لاستعادة راحتك." 
      },
      { 
        type: 'h2', 
        en: "Comprehensive AC Repair Services", 
        ar: "خدمات إصلاح المكيفات الشاملة" 
      },
      { 
        type: 'ul', 
        en: [
          "Original compressor replacements and repairs.",
          "Fixing water dripping and drainage blockages.",
          "Thermostat calibration and motherboard repairs.",
          "Fixing fan motors and resolving loud operational noises."
        ], 
        ar: [
          "استبدال وإصلاح الضواغط الأصلية.",
          "إصلاح تنقيط المياه وانسداد التصريف.",
          "معايرة الثرموستات وإصلاح اللوحة الأم.",
          "إصلاح محركات المروحة وحل مشكلات الضوضاء العالية."
        ] 
      }
    ]
  },
  {
    id: "ac-maintenance-mecca",
    img: "/services/ac-service(2).jfif", // Add this image to your public/services folder
    en: "Air conditioning maintenance company in Mecca",
    ar: "شركة صيانة مكيفات بمكة",
    seoContent: [
      { 
        type: 'p', 
        en: "In the Holy City of Mecca, continuous AC operation is essential. We offer fast, reliable maintenance services tailored to withstand high operational loads. Whether for residential homes, hotels, or commercial spaces, our preventive maintenance ensures uninterrupted cooling.", 
        ar: "في العاصمة المقدسة مكة، يعد التشغيل المستمر للمكيفات أمراً ضرورياً. نقدم خدمات صيانة سريعة وموثوقة مصممة لتحمل أعباء التشغيل العالية. سواء للمنازل السكنية أو الفنادق أو المساحات التجارية، تضمن صيانتنا الوقائية تبريداً دون انقطاع." 
      }
    ]
  },
  {
    id: "ac-maintenance-medina",
    img: "/services/ac-service(3).jfif", // Add this image to your public/services folder
    en: "Air conditioner maintenance in Medina",
    ar: "صيانة مكيفات بالمدينة المنورة",
    seoContent: [
      { 
        type: 'p', 
        en: "Serving Medina with top-tier air conditioning solutions. We specialize in deep coil cleaning, electrical safety checks, and system efficiency optimization. Let us extend the lifespan of your AC units while lowering your monthly energy consumption.", 
        ar: "نخدم المدينة المنورة بأفضل حلول تكييف الهواء. نحن متخصصون في التنظيف العميق للملفات، وفحوصات السلامة الكهربائية، وتحسين كفاءة النظام. دعنا نمدد عمر وحدات التكييف الخاصة بك مع خفض استهلاكك الشهري للطاقة." 
      }
    ]
  },
  {
    id: "ac-cleaning-jeddah",
    img: "/services/ac-service(4).jfif", // Add this image to your public/services folder
    en: "Air conditioning cleaning company in Jeddah",
    ar: "شركة تنظيف مكيفات بجدة",
    seoContent: [
      { 
        type: 'p', 
        en: "Dust and mold build-up inside AC units can severely impact indoor air quality and cooling performance. Our professional AC cleaning service in Jeddah uses specialized pressure washing bags and safe antibacterial chemicals to completely sanitize your split and window units without making a mess in your home.", 
        ar: "يمكن أن يؤثر تراكم الغبار والعفن داخل وحدات التكييف بشدة على جودة الهواء الداخلي وأداء التبريد. تستخدم خدمة تنظيف المكيفات الاحترافية لدينا في جدة أكياس غسيل بالضغط متخصصة ومواد كيميائية آمنة مضادة للبكتيريا لتعقيم وحدات السبلت والشباك بالكامل دون إحداث فوضى في منزلك." 
      },
      { 
        type: 'h2', 
        en: "Benefits of Deep AC Cleaning", 
        ar: "فوائد التنظيف العميق للمكيفات" 
      },
      { 
        type: 'ul', 
        en: [
          "Eliminates bad odors and airborne allergens.",
          "Restores maximum cooling airflow.",
          "Reduces energy bills by allowing the compressor to rest.",
          "Prevents sudden breakdowns caused by overheating."
        ], 
        ar: [
          "يقضي على الروائح الكريهة ومسببات الحساسية المحمولة جواً.",
          "يستعيد أقصى تدفق لهواء التبريد.",
          "يقلل فواتير الطاقة من خلال السماح للضاغط بالراحة.",
          "يمنع الأعطال المفاجئة الناتجة عن ارتفاع درجة الحرارة."
        ] 
      }
    ]
  }
];