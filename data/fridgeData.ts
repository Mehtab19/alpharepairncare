// data/fridgeData.ts

export type SeoBlock = {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'image';
  en: string | string[];
  ar: string | string[];
  url?: string;
};

export interface FridgeItem {
  id: string;
  img: string;
  en: string;
  ar: string;
  seoContent: SeoBlock[];
}

export const fridgeData: FridgeItem[] = [
  {
    id: "hitachi-repair-riyadh",
    img: "/services/hitachi-fridge.jfif", // Using your new local picture path here!
    en: "Hitachi refrigerator repair company in Riyadh",
    ar: "شركة صيانة ثلاجات هيتاشي بالرياض",
    seoContent: [
      { 
        type: 'p', 
        en: "Hitachi refrigerator repair is a highly specialized service provided by our engineering center in Riyadh. We understand that Hitachi appliances utilize advanced dual-fan cooling systems and precise inverter compressors, requiring trained technicians who can handle delicate circuit adjustments and diagnostic calibrations accurately.", 
        ar: "صيانة ثلاجات هيتاشي هي خدمة متخصصة للغاية يقدمها مركزنا الهندسي في الرياض. نحن ندرك أن أجهزة هيتاشي تعتمد على أنظمة تبريد متطورة بمروحة مزدوجة وضواغط عاكسة دقيقة، مما يتطلب فنيين مدربين يمكنهم التعامل مع تعديلات الدوائر الحساسة ومعايرة التشخيص بدقة." 
      },
      { 
        type: 'p', 
        en: "When your household refrigerator experiences unexpected cooling loss, it threatens food preservation and causes home disruptions. Our fast deployment team responds immediately across Riyadh neighborhoods to repair the issue on-site without transporting your appliance away from your home.", 
        ar: "عندما تتعرض ثلاجة المنزل لفقدان مفاجئ في التبريد، فإن ذلك يهدد سلامة الأغذية ويسبب إرباكاً للمنزل. يتحرك فريق الاستجابة السريعة لدينا فوراً عبر أحياء الرياض لإصلاح المشكلة في الموقع دون نقل جهازك بعيداً عن المنزل." 
      },
      { 
        type: 'h2', 
        en: "Why rely on our Riyadh Hitachi maintenance center?", 
        ar: "لماذا تعتمد على مركز صيانة هيتاشي بالرياض لدينا؟" 
      },
      { 
        type: 'ul', 
        en: [
          "Deployment of certified thermal cooling engineers directly to your door.",
          "Stocked mobile vans carrying authentic Hitachi inverter boards and sensors.",
          "Comprehensive service warranties on both labor and replaced internal parts.",
          "Advanced computerized fault code reading to pinpoint cooling bottlenecks instantly."
        ], 
        ar: [
          "إرسال مهندسي تبريد حراري معتمدين مباشرة إلى باب منزلك.",
          "سيارات صيانة متنقلة مجهزة ببرودات وحساسات هيتاشي الأصلية.",
          "ضمان خدمة شامل على العمل وقطع الغيار الداخلية المستبدلة.",
          "قراءة متقدمة لرموز الأعطال بالكمبيوتر لتحديد نقاط خلل التبريد فوراً."
        ] 
      },
      {
        type: 'image',
        en: "Expert refrigerator troubleshooting and cooling check",
        ar: "فحص التبريد وتشخيص أعطال الثلاجة الاحترافي",
        url: "/services/samsung-fridge.jfif"
      },
      { 
        type: 'h2', 
        en: "Common refrigerator technical issues we resolve daily", 
        ar: "أعطال الثلاجات الفنية الشائعة التي نصلحها يومياً" 
      },
      { 
        type: 'p', 
        en: "Refrigerators encounter complex operational cycles. A minor sensor drift can trick the main controller into shutting off the defrost cycle, resulting in heavy ice accumulation that chokes airflow. Our diagnostic scope covers all major mechanical failures.", 
        ar: "تواجه الثلاجات دورات تشغيلية معقدة. يمكن أن يؤدي انحراف بسيط في الحساس إلى خداع لوحة التحكم الرئيسية وإيقاف دورة إذابة الثلج، مما يؤدي إلى تراكم الجليد بكثافة وخنق تدفق الهواء. يشمل نطاق تشخيصنا جميع الأعطال الميكانيكية الرئيسية." 
      }
    ]
  },
  {
    id: "samsung-warranty-jeddah",
    img: "/services/samsung-fridge.jfif",
    en: "Samsung refrigerator repair in Jeddah with warranty",
    ar: "صيانة ثلاجات سامسونج بجدة مع الضمان",
    seoContent: [
      { 
        type: 'p', 
        en: "Samsung smart refrigerators feature complex digital twin-cooling systems. Our specialized technicians in Jeddah provide premium maintenance solutions, focusing heavily on modern digital screens, ice makers, and smart inverter modules.", 
        ar: "تتميز ثلاجات سامسونج الذكية بأنظمة تبريد ثنائية رقمية معقدة. يقدم فنيونا المتخصصون في جدة حلول صيانة ممتازة، مع التركيز بشكل كبير على الشاشات الرقمية الحديثة، وصانعات الثلج، ووحدات العاكس الذكية." 
      },
      { 
        type: 'h2', 
        en: "Advanced Samsung cooling repairs in coastal climates", 
        ar: "إصلاحات تبريد سامسونج المتقدمة في المناخ الساحلي" 
      },
      { 
        type: 'p', 
        en: "Jeddah's high humidity levels speed up wear on external sealing gaskets and electrical relays. We optimize your Samsung refrigerator's condensation cycle to handle aggressive local weather variables flawlessly.", 
        ar: "تؤدي مستويات الرطوبة العالية في جدة إلى تسريع تآكل إطارات الأبواب والمرحلات الكهربائية. نحن نصلح دورة التكثيف في ثلاجة سامسونج الخاصة بك لتتعامل مع متغيرات الطقس المحلية القاسية بلا عيوب." 
      },
      { 
        type: 'ul', 
        en: [
          "Fixing unresponsive smart touch screens and software errors.",
          "Replacing worn magnetic door gaskets to retain crisp internal air.",
          "Clearing clogged drainage lines that trigger internal water pooling."
        ], 
        ar: [
          "إصلاح شاشات اللمس الذكية غير المستجيبة وأخطاء البرمجيات.",
          "استبدال إطارات الأبواب المغناطيسية البالية للاحتفاظ بالهواء البارد الداخلي.",
          "تنظيف خطوط التصريف المسدودة التي تؤدي إلى تجمع المياه داخلياً."
        ] 
      }
    ]
  },
  {
    id: "lg-dammam-services",
    img: "lg-fridge.jfif",
    en: "LG refrigerator repair company in Dammam",
    ar: "شركة صيانة ثلاجات ال جي بالدمام",
    seoContent: [
      { 
        type: 'p', 
        en: "LG's linear inverter compressors are incredibly efficient but require precise diagnostic instruments to manage pressure ratios correctly. Our expert team in Dammam repairs linear motor synchronization faults and circuit errors perfectly.", 
        ar: "تتميز ضواغط ال جي العاكسة الخطية بكفاءة عالية ولكنها تتطلب أدوات تشخيصية دقيقة لإدارة نسب الضغط بشكل صحيح. يقوم فريقنا المتخصص في الدمام بإصلاح أعطال مزامنة المحرك الخطي وأخطاء الدوائر الكهربائية بشكل مثالي." 
      },
      { 
        type: 'h2', 
        en: "Certified LG compressor replacements", 
        ar: "استبدال ضواغط ال جي المعتمدة" 
      },
      { 
        type: 'ul', 
        en: [
          "Original linear compressor replacements matched exactly to factory specs.",
          "Motherboard reprogramming to resolve sudden cooling dropouts.",
          "Evaporator coil micro-leak detection using premium testing methods."
        ], 
        ar: [
          "استبدال الضواغط الخطية الأصلية المطابقة لمواصفات المصنع تماماً.",
          "إعادة برمجة اللوحة الرئيسية لحل مشكلات الانخفاض المفاجئ في التبريد.",
          "كشف التسريبات الدقيقة في ملف المبخر باستخدام طرق فحص ممتازة."
        ] 
      }
    ]
  },
  {
    id: "sharp-refrigerator-riyadh",
    img: "/services/sharp-fridge.jfif", 
    en: "Sharp refrigerator repair in Riyadh",
    ar: "صيانة ثلاجات شارب بالرياض",
    seoContent: [
      { 
        type: 'p', 
        en: "Sharp refrigerators are equipped with advanced Plasmacluster technology and unique J-Tech inverter compressors. Our specialized center in Riyadh offers certified maintenance to restore the original efficiency of your Sharp appliance, ensuring perfect cooling and energy saving.", 
        ar: "تتميز ثلاجات شارب بتقنية البلازما كلاستر المتقدمة وضواغط J-Tech العاكسة الفريدة. يقدم مركزنا المتخصص في الرياض صيانة معتمدة لاستعادة الكفاءة الأصلية لجهاز شارب الخاص بك، مما يضمن التبريد المثالي وتوفير الطاقة." 
      },
      { 
        type: 'h2', 
        en: "Common Sharp Refrigerator Services", 
        ar: "خدمات ثلاجات شارب الشائعة" 
      },
      { 
        type: 'ul', 
        en: [
          "Resolving J-Tech inverter motor cooling failures.",
          "Fixing Plasmacluster ion generator issues.",
          "Repairing automatic ice makers and water dispensers.",
          "Replacing faulty main circuit boards (motherboards)."
        ], 
        ar: [
          "حل أعطال التبريد في محرك J-Tech العاكس.",
          "إصلاح مشاكل مولد أيونات البلازما كلاستر.",
          "صيانة صانعات الثلج التلقائية وموزعات المياه.",
          "استبدال اللوحات الإلكترونية الرئيسية (المذربورد) التالفة."
        ] 
      }
    ]
  },
  {
    id: "lg-refrigerator-jeddah",
    img: "/services/lg-ref.jfif", 
    en: "LG refrigerator repair in Jeddah",
    ar: "صيانة ثلاجات ال جي بجدة",
    seoContent: [
      { 
        type: 'p', 
        en: "The high humidity in Jeddah can take a toll on refrigerator seals and electronics. We specialize in servicing LG's Linear Inverter technology and InstaView Door-in-Door systems across all Jeddah neighborhoods, using original LG parts with a full guarantee.", 
        ar: "يمكن أن تؤثر الرطوبة العالية في جدة على مطاط الأبواب والإلكترونيات في الثلاجات. نحن متخصصون في صيانة تقنية الضاغط الخطي من ال جي وأنظمة InstaView عبر جميع أحياء جدة، باستخدام قطع غيار ال جي الأصلية مع ضمان شامل." 
      },
      { 
        type: 'h2', 
        en: "Why Choose Our LG Repair Service?", 
        ar: "لماذا تختار خدمة صيانة ال جي لدينا؟" 
      },
      { 
        type: 'ul', 
        en: [
          "Immediate response times across Jeddah neighborhoods.",
          "On-site repairs without needing to transport the fridge.",
          "Original LG linear compressors and genuine gas charging."
        ], 
        ar: [
          "أوقات استجابة فورية في جميع أنحاء أحياء جدة.",
          "إصلاحات في الموقع دون الحاجة لنقل الثلاجة.",
          "ضواغط ال جي خطية أصلية وشحن غاز أصلي."
        ] 
      }
    ]
  },
  {
    id: "freezer-room-maintenance",
    img: "/services/freezer-room.jfif", 
    en: "Refrigeration and freezer room maintenance in Jeddah with warranty",
    ar: "صيانة غرف التبريد والتجميد بجدة مع الضمان",
    seoContent: [
      { 
        type: 'p', 
        en: "Commercial cooling requires absolute reliability. Our commercial division handles the installation, repair, and ongoing maintenance of walk-in freezers, cold rooms, and large-scale refrigeration units for restaurants, supermarkets, and hotels in Jeddah.", 
        ar: "يتطلب التبريد التجاري موثوقية مطلقة. يتولى قسمنا التجاري تركيب وإصلاح والصيانة المستمرة لغرف التجميد وغرف التبريد ووحدات التبريد واسعة النطاق للمطاعم ومحلات السوبر ماركت والفنادق في جدة." 
      },
      { 
        type: 'h2', 
        en: "Commercial Refrigeration Services", 
        ar: "خدمات التبريد التجاري" 
      },
      { 
        type: 'p', 
        en: "We offer tailored maintenance contracts to prevent sudden breakdowns, protecting your valuable inventory. We handle major compressor replacements, evaporator coil unblocking, and precision temperature calibration.", 
        ar: "نقدم عقود صيانة مخصصة لمنع الأعطال المفاجئة، وحماية مخزونك الثمين. نتعامل مع استبدال الضواغط الكبيرة، وفتح انسداد ملفات المبخر، والمعايرة الدقيقة لدرجات الحرارة." 
      }
    ]
  },
  {
    id: "gas-refilling-compressor",
    img: "/services/gas-refill.jfif",
    en: "Refrigerator gas refilling and compressor repair",
    ar: "شحن فريون الثلاجات وإصلاح الضاغط",
    seoContent: [
      { 
        type: 'p', 
        en: "Low refrigerant gas levels mean your compressor works twice as hard, driving up electricity costs and accelerating motor burnout. We offer premium vacuum purging, deep leak testing, and exact eco-friendly freon refilling procedures.", 
        ar: "تعني مستويات غاز التبريد المنخفضة أن الضاغط يعمل بضعف الجهد، مما يرفع تكاليف الكهرباء ويعجل باحتراق المحرك. نحن نقدم خدمات تفريغ الهواء الفائقة، واختبار التسريب العميق، وإجراءات إعادة شحن الفريون الصديق للبيئة بدقة." 
      }
    ]
  },
  {
    id: "toshiba-mecca-maintenance",
    img: "/services/toshiba-fridge.jfif",
    en: "Toshiba refrigerator maintenance in Mecca",
    ar: "صيانة ثلاجات توشيبا بمكة",
    seoContent: [
      { 
        type: 'p', 
        en: "Providing Holy City residents with immediate access to rapid Toshiba cooling restoration. We tackle high-load issues brought on by continuous continuous operation and high kitchen temperatures effortlessly.", 
        ar: "نوفر لسكان العاصمة المقدسة وصولاً فورياً لاستعادة تبريد توشيبا السريع. نحن نتعامل مع مشكلات الأحمال العالية الناتجة عن التشغيل المستمر ودرجات حرارة المطبخ المرتفعة دون عناء." 
      }
    ]
  },
  {
    id: "daewoo-freezer-repair",
    img: "/services/daewoo-fridge (2).jfif",
    en: "Daewoo refrigerator and freezer repair",
    ar: "صيانة ثلاجات وفريزرات دايو",
    seoContent: [
      { 
        type: 'p', 
        en: "Daewoo deep freezers and combination refrigerators require careful fan assembly maintenance. Our engineering teams fix frosting failures, thermostat calibration drops, and fan relay shorts permanently.", 
        ar: "تتطلب فريزرات دايو العميقة والثلاجات المزدوجة صيانة دقيقة لمجموعة المروحة. تعمل فرقنا الهندسية على إصلاح مشكلات التجميد، وانخفاض معايرة الترموستات، وماسات مروحة التبريد بشكل نهائي." 
      }
    ]
  }
];