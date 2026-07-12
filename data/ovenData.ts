export type SeoBlock = {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'image';
  en: string | string[];
  ar: string | string[];
  url?: string;
};

export interface OvenItem {
  id: string;
  img: string;
  en: string;
  ar: string;
  seoContent: SeoBlock[];
}

export const ovenData: OvenItem[] = [
  {
    id: "oven-maintenance-mecca",
    img: "/services/oven-clean(1).jfif", // Remember to add your images to the public/services folder!
    en: "Oven maintenance company in Mecca with warranty",
    ar: "شركة صيانة افران بمكة مع الضمان",
    seoContent: [
      { 
        type: 'p', 
        en: "Our certified technicians provide comprehensive oven maintenance services across Mecca. We specialize in diagnosing gas flow issues, burner blockages, and door hinge alignments to ensure your kitchen operates safely and efficiently.", 
        ar: "يقدم فنيونا المعتمدون خدمات صيانة شاملة للأفران في جميع أنحاء مكة. نحن متخصصون في تشخيص مشاكل تدفق الغاز، وانسداد الشعلات، ومحاذاة مفصلات الأبواب لضمان عمل مطبخك بأمان وكفاءة." 
      }
    ]
  },
  {
    id: "electric-oven-dammam-khobar",
    img: "/services/oven-clean(2).jfif",
    en: "Electric oven repair in Dammam and Khobar with warranty",
    ar: "صيانة افران كهربائية بالدمام والخبر مع الضمان",
    seoContent: [
      { 
        type: 'p', 
        en: "Electric ovens require precise electrical diagnostics. We repair faulty heating elements, broken thermostats, and malfunctioning control boards in Dammam and Khobar, restoring your oven's exact temperature controls.", 
        ar: "تتطلب الأفران الكهربائية تشخيصات كهربائية دقيقة. نقوم بإصلاح عناصر التسخين المعيبة، والثرموستات المكسورة، ولوحات التحكم المعطلة في الدمام والخبر، مما يعيد التحكم الدقيق في درجة حرارة الفرن." 
      }
    ]
  },
  {
    id: "oven-cleaning-spraying",
    img: "/services/oven-clean(3).jfif",
    en: "Oven cleaning company with spraying and polishing",
    ar: "شركة تنظيف افران بالرش والتلميع",
    seoContent: [
      { 
        type: 'p', 
        en: "Burnt-on grease and food residue can ruin the taste of your meals and pose a fire hazard. Our intensive spraying and polishing service dissolves stubborn grime, leaving your oven looking and smelling brand new.", 
        ar: "يمكن أن تدمر الشحوم المحترقة وبقايا الطعام طعم وجباتك وتشكل خطر الحريق. خدمة الرش والتلميع المكثفة لدينا تذيب الأوساخ العنيدة، مما يترك فرنك يبدو ورائحته كأنه جديد تماماً." 
      }
    ]
  },
  {
    id: "oven-repair-dammam",
    img: "/services/oven-clean(4).jfif",
    en: "Oven repair company in Dammam with warranty",
    ar: "شركة صيانة افران بالدمام مع الضمان",
    seoContent: [
      { 
        type: 'p', 
        en: "Fast and reliable gas and electric oven repairs in Dammam. Whether your oven isn't heating properly, the glass door is shattered, or the ignition switch is failing, our team arrives fully equipped to fix it on the spot.", 
        ar: "إصلاحات سريعة وموثوقة للأفران الغازية والكهربائية في الدمام. سواء كان فرنك لا يسخن بشكل صحيح، أو كان الباب الزجاجي مكسوراً، أو كان مفتاح الإشعال معطلاً، يصل فريقنا مجهزاً بالكامل لإصلاحه على الفور." 
      }
    ]
  },
  {
    id: "oven-cleaning-mecca",
    img: "/services/oven-clean(5).jfif",
    en: "Oven cleaning company in Mecca with a guarantee",
    ar: "شركة تنظيف افران بمكة مع الضمان",
    seoContent: [
      { 
        type: 'p', 
        en: "Maintain a spotless kitchen with our guaranteed oven cleaning services in Mecca. We use eco-friendly, non-toxic chemical degreasers that are safe for your family while thoroughly sanitizing the interior of your appliance.", 
        ar: "حافظ على مطبخك نظيفاً تماماً مع خدمات تنظيف الأفران المضمونة لدينا في مكة. نستخدم مزيلات شحوم كيميائية صديقة للبيئة وغير سامة وآمنة لعائلتك مع تعقيم الجزء الداخلي لجهازك بالكامل." 
      }
    ]
  },
  {
    id: "electric-oven-mecca",
    img: "/services/oven-clean(6).jfif",
    en: "Electric oven repair in Mecca",
    ar: "اصلاح افران كهربائية بمكة",
    seoContent: [
      { 
        type: 'p', 
        en: "Specialized repair services exclusively for electric baking and roasting ovens in Mecca. We fix uneven baking issues, replace damaged convection fans, and calibrate digital timers.", 
        ar: "خدمات إصلاح متخصصة حصرياً لأفران الخبز والتحميص الكهربائية في مكة. نقوم بإصلاح مشاكل الخبز غير المتساوي، واستبدال مراوح الحمل الحراري التالفة، ومعايرة أجهزة التوقيت الرقمية." 
      }
    ]
  },
  {
    id: "oven-repair-riyadh",
    img: "/services/oven-clean(7).jfif",
    en: "Oven repair company in Riyadh with warranty",
    ar: "شركة صيانة افران بالرياض مع الضمان",
    seoContent: [
      { 
        type: 'p', 
        en: "Serving Riyadh with premium oven maintenance. From repairing major gas leaks to replacing worn-out seals that let heat escape, we ensure your appliance operates flawlessly.", 
        ar: "نخدم الرياض بصيانة ممتازة للأفران. من إصلاح تسربات الغاز الكبيرة إلى استبدال الإطارات البالية التي تسمح بتسرب الحرارة، نضمن أن يعمل جهازك بلا عيوب." 
      }
    ]
  },
  {
    id: "oven-cleaning-dammam-grease",
    img: "/services/oven-clean(8).jfif",
    en: "Oven cleaning company in Dammam and grease removal",
    ar: "شركة تنظيف افران بالدمام وازالة الدهون",
    seoContent: [
      { 
        type: 'p', 
        en: "Professional heavy-duty grease extraction for residential and commercial ovens in Dammam. We disassemble racks, trays, and side panels to ensure a deep, 360-degree clean.", 
        ar: "استخراج احترافي للشحوم الثقيلة للأفران السكنية والتجارية في الدمام. نقوم بتفكيك الأرفف والصواني والألواح الجانبية لضمان تنظيف عميق بزاوية 360 درجة." 
      }
    ]
  },
  {
    id: "oven-repair-khobar",
    img: "/services/oven-clean(9).jfif",
    en: "Oven repair company in Al-Khobar with warranty",
    ar: "صيانة افران بالخبر مع الضمان",
    seoContent: [
      { 
        type: 'p', 
        en: "Expert oven repair technicians available across Al-Khobar. We provide fast response times, using only original replacement parts to guarantee the longevity of your repair.", 
        ar: "فنيو إصلاح أفران خبراء متوفرون في جميع أنحاء الخبر. نقدم أوقات استجابة سريعة، باستخدام قطع غيار أصلية فقط لضمان طول عمر الإصلاح." 
      }
    ]
  }
];