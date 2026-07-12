// src/data/servicesData.ts

export type SeoBlock = {
  type: 'h2' | 'p' | 'ul';
  en: string | string[];
  ar: string | string[];
};

export interface ServiceItem {
  id: string;
  img: string;
  en: string;
  ar: string;
  seoContent: SeoBlock[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "maytag-repair-riyadh",
    img: "/services/washing-machine (1).jfif",
    en: "Maytag washing machine repair in Riyadh",
    ar: "صيانة غسالات ميتاج بالرياض",
    seoContent: [
      { type: 'p', en: "Maytag washing machines are known for their durability, but when they break down, you need specialized technicians. Our service center in Riyadh provides top-tier maintenance for all Maytag models.", ar: "تُعرف غسالات ميتاج بمتانتها، ولكن عندما تتعطل، فأنت بحاجة إلى فنيين متخصصين. يوفر مركز الخدمة لدينا في الرياض صيانة من الدرجة الأولى لجميع موديلات ميتاج." },
      { type: 'h2', en: "Why choose our Maytag repair service?", ar: "لماذا تختار خدمة صيانة ميتاج لدينا؟" },
      { type: 'ul', en: ["Original Maytag spare parts with warranty", "Same-day home visit in Riyadh", "Expert diagnostics for motor and pump issues"], ar: ["قطع غيار ميتاج أصلية مع الضمان", "زيارة منزلية في نفس اليوم بالرياض", "تشخيص خبير لمشاكل المحرك والمضخة"] }
    ]
  },
  {
    id: "dishwasher-repair-riyadh",
    img: "/services/washing-machine (2).jfif",
    en: "Dishwasher repair in Riyadh",
    ar: "صيانة غسالات صحون بالرياض",
    seoContent: [
      { type: 'p', en: "A broken dishwasher disrupts your daily routine. We offer fast, reliable dishwasher repair services across Riyadh, handling all major brands to ensure your appliance runs smoothly again.", ar: "غسالة الصحون المعطلة تعطل روتينك اليومي. نحن نقدم خدمات إصلاح سريعة وموثوقة لغسالات الصحون في جميع أنحاء الرياض، ونتعامل مع جميع العلامات التجارية الكبرى." },
      { type: 'h2', en: "Common Dishwasher Faults We Fix", ar: "أعطال غسالات الصحون الشائعة التي نصلحها" },
      { type: 'ul', en: ["Water not draining completely", "Dishes coming out dirty or cloudy", "Control board errors and flashing lights"], ar: ["الماء لا يصرف تماما", "الأطباق تخرج متسخة", "أخطاء لوحة التحكم والأضواء الوامضة"] }
    ]
  },
  {
    id: "samsung-warranty-riyadh",
    img: "/services/washing-machine (3).jfif",
    en: "Samsung washing machine repair in Riyadh with warranty",
    ar: "صيانة غسالات سامسونج بالرياض مع الضمان",
    seoContent: [
      { type: 'p', en: "Samsung washing machines feature advanced technology like EcoBubble and Smart Control. Our certified technicians in Riyadh are trained specifically on Samsung diagnostics.", ar: "تتميز غسالات سامسونج بتكنولوجيا متقدمة مثل EcoBubble و Smart Control. الفنيون المعتمدون لدينا في الرياض مدربون خصيصًا على تشخيصات سامسونج." },
      { type: 'h2', en: "Guaranteed Samsung Maintenance", ar: "صيانة سامسونج المضمونة" },
      { type: 'p', en: "We provide a comprehensive warranty on all replaced parts, giving you peace of mind and long-lasting performance.", ar: "نحن نقدم ضمانًا شاملاً على جميع الأجزاء المستبدلة، مما يمنحك راحة البال وأداءً طويل الأمد." }
    ]
  },
  {
    id: "lg-warranty-riyadh",
    img: "/services/washing-machine (4).jfif",
    en: "LG washing machine repair in Riyadh with warranty",
    ar: "صيانة غسالات ال جي بالرياض بالضمان",
    seoContent: [
      { type: 'p', en: "LG's Direct Drive motors require specific expertise. We provide guaranteed LG washing machine repairs in Riyadh, addressing vibrations, leaks, and electronic errors.", ar: "تتطلب محركات الدفع المباشر من إل جي خبرة محددة. نحن نقدم إصلاحات مضمونة لغسالات إل جي في الرياض، لمعالجة الاهتزازات والتسريبات." },
      { type: 'ul', en: ["Direct Drive motor replacement", "Inverter board diagnostics", "Door seal and gasket replacements"], ar: ["استبدال محرك الدفع المباشر", "تشخيصات لوحة العاكس", "استبدال ختم الباب"] }
    ]
  },
  {
    id: "repair-alkharj",
    img: "/services/washing-machine (5).jfif",
    en: "Washing machine repair company in Al-Kharj",
    ar: "شركة صيانة غسالات بالخرج",
    seoContent: [
      { type: 'p', en: "Residents of Al-Kharj can now rely on our mobile fleet for immediate washing machine repairs. We bring the workshop to your door.", ar: "يمكن لسكان الخرج الآن الاعتماد على أسطولنا المتنقل لإجراء إصلاحات فورية للغسالات. نأتي بالورشة إلى باب منزلك." },
      { type: 'h2', en: "Fast Response in Al-Kharj", ar: "استجابة سريعة في الخرج" },
      { type: 'p', en: "Our technicians are stationed locally to ensure minimal wait times, equipped with parts for all major brands.", ar: "يتواجد الفنيون لدينا محليًا لضمان الحد الأدنى من أوقات الانتظار، وهم مجهزون بقطع غيار لجميع العلامات التجارية الكبرى." }
    ]
  },
  {
    id: "ariston-riyadh",
    img: "/services/washing-machine (6).jfif",
    en: "Ariston washing machine repair in Riyadh",
    ar: "صيانة غسالات اريستون بالرياض",
    seoContent: [
      { type: 'p', en: "Ariston appliances are built to last, but occasional maintenance is necessary. We specialize in Italian-engineered Ariston washing machines.", ar: "تم تصميم أجهزة أريستون لتدوم طويلاً، ولكن الصيانة العرضية ضرورية. نحن متخصصون في غسالات أريستون ذات الهندسة الإيطالية." },
      { type: 'ul', en: ["Heater element replacement", "Drum bearing repairs", "Water inlet valve unclogging"], ar: ["استبدال عنصر السخان", "إصلاحات محمل الأسطوانة", "فك انسداد صمام مدخل المياه"] }
    ]
  },
  {
    id: "repair-taif",
    img: "/services/washing-machine (7).jfif",
    en: "Washing machine repair in Taif",
    ar: "صيانة غسالات بالطائف",
    seoContent: [
      { type: 'p', en: "Serving the high-altitude region of Taif, we understand how hard water and climate affect your washing machines. Our preventive maintenance extends the life of your appliance.", ar: "خدمة منطقة الطائف، نحن ندرك كيف تؤثر المياه العسرة والمناخ على غسالاتك. الصيانة الوقائية لدينا تطيل عمر جهازك." }
    ]
  },
  {
    id: "daewoo-riyadh",
    img: "/services/washing-machine (8).jfif",
    en: "Daewoo washing machine repair in Riyadh",
    ar: "صيانة غسالات دايو بالرياض",
    seoContent: [
      { type: 'p', en: "Daewoo front-load and top-load machines are popular for their affordability. We offer cost-effective repairs to match, using authentic Daewoo components.", ar: "تحظى آلات دايو ذات التحميل الأمامي والعلوي بشعبية كبيرة بسبب أسعارها المعقولة. نحن نقدم إصلاحات فعالة من حيث التكلفة للتوافق، باستخدام مكونات دايو الأصلية." },
      { type: 'ul', en: ["Spin cycle troubleshooting", "Drain pump clearing", "Belt replacement"], ar: ["استكشاف أخطاء دورة العصر وإصلاحها", "تنظيف مضخة التصريف", "استبدال الحزام"] }
    ]
  },
  {
    id: "repair-medina",
    img: "/services/washing-machine (9).jfif",
    en: "Washing machine repair in Medina",
    ar: "صيانة غسالات بالمدينة المنورة",
    seoContent: [
      { type: 'p', en: "Our Medina branches provide swift, polite, and highly skilled technicians to repair automatic and semi-automatic washing machines of all brands.", ar: "توفر فروعنا في المدينة المنورة فنيين سريعين ومهذبين وذوي مهارات عالية لإصلاح الغسالات الأوتوماتيكية وشبه الأوتوماتيكية من جميع الماركات." }
    ]
  },
  {
    id: "beko-riyadh",
    img: "/services/washing-machine (1).jfif",
    en: "Beko washing machine repair in Riyadh",
    ar: "صيانة غسالات بيكو بالرياض",
    seoContent: [
      { type: 'p', en: "Beko appliances require specific knowledge of their digital panels. Our engineers can reset, recalibrate, and repair Beko washing machines quickly.", ar: "تتطلب أجهزة بيكو معرفة محددة بلوحاتها الرقمية. يمكن لمهندسينا إعادة ضبط غسالات بيكو وإعادة معايرتها وإصلاحها بسرعة." }
    ]
  },
  {
    id: "whirlpool-maintenance",
    img: "/services/washing-machine (2).jfif",
    en: "Whirlpool washing machine maintenance",
    ar: "صيانة غسالات ويرلبول",
    seoContent: [
      { type: 'p', en: "Trust the experts for your American-made Whirlpool appliances. We handle everything from faulty lid switches to complex transmission repairs.", ar: "ثق بالخبراء في أجهزة ويرلبول الأمريكية الصنع. نحن نتعامل مع كل شيء من مفاتيح الغطاء المعيبة إلى إصلاحات ناقل الحركة المعقدة." },
      { type: 'h2', en: "Modern repair methods for Whirlpool", ar: "طرق الإصلاح الحديثة لويرلبول" },
      { type: 'p', en: "Using advanced diagnostic tools, we identify Whirlpool error codes instantly, saving you time and labor costs.", ar: "باستخدام أدوات التشخيص المتقدمة، نحدد رموز خطأ ويرلبول على الفور، مما يوفر لك الوقت وتكاليف العمالة." }
    ]
  },
  {
    id: "bosch-jeddah",
    img: "/services/washing-machine (3).jfif",
    en: "Bosch washing machine repair in Jeddah",
    ar: "صيانة غسالات بوش بجدة",
    seoContent: [
      { type: 'p', en: "Bosch machines are engineered for silence and efficiency. We ensure your Bosch stays that way with genuine German spare parts and expert calibration in Jeddah.", ar: "تم تصميم آلات بوش من أجل الصمت والكفاءة. نحن نضمن بقاء بوش الخاصة بك على هذا النحو مع قطع غيار ألمانية أصلية ومعايرة متخصصة في جدة." }
    ]
  },
  {
    id: "haier-riyadh",
    img: "/services/washing-machine (4).jfif",
    en: "Haier washing machine repair in Riyadh",
    ar: "صيانة غسالات هاير بالرياض",
    seoContent: [
      { type: 'p', en: "Having trouble with your Haier washing machine? Our Riyadh team is fully equipped to handle Haier top loaders, front loaders, and twin tubs.", ar: "هل تواجه مشكلة مع غسالة هاير الخاصة بك؟ فريقنا في الرياض مجهز بالكامل للتعامل مع غسالات هاير ذات التعبئة العلوية والأمامية." }
    ]
  },
  {
    id: "panasonic-auto",
    img: "/services/washing-machine (5).jfif",
    en: "Panasonic automatic washing machine repair",
    ar: "صيانة غسالات باناسونيك الأوتوماتيكية",
    seoContent: [
      { type: 'p', en: "Panasonic washing machines are incredibly reliable. If yours is experiencing agitation issues or draining faults, our team can restore it to factory standards.", ar: "غسالات باناسونيك موثوقة بشكل لا يصدق. إذا كان جهازك يعاني من مشاكل في التحريض أو أخطاء في التصريف، فيمكن لفريقنا إعادته إلى معايير المصنع." }
    ]
  },
  {
    id: "toshiba-top-load",
    img: "/services/washing-machine (6).jfif",
    en: "Toshiba top load washing machine maintenance",
    ar: "صيانة غسالات توشيبا تعبئة علوية",
    seoContent: [
      { type: 'p', en: "Toshiba top load washers are staples in many homes. We fix common issues like unbalanced drums, leaking hoses, and unresponsive control panels.", ar: "تعتبر غسالات توشيبا ذات التعبئة العلوية من الأساسيات في العديد من المنازل. نصلح المشكلات الشائعة مثل البراميل غير المتوازنة والخراطيم المتسربة." }
    ]
  },
  {
    id: "hoover-dammam",
    img: "/services/washing-machine (7).jfif",
    en: "Hoover washing machine repair in Dammam",
    ar: "صيانة غسالات هوفر بالدمام",
    seoContent: [
      { type: 'p', en: "Hoover appliances offer great performance. Our Dammam maintenance center provides specialized care for Hoover smart washing machines and dryers.", ar: "تقدم أجهزة هوفر أداءً رائعًا. يوفر مركز الصيانة الخاص بنا في الدمام رعاية متخصصة لغسالات ومجففات هوفر الذكية." }
    ]
  },
  {
    id: "candy-tech",
    img: "/services/washing-machine (8).jfif",
    en: "Candy washing machine technician",
    ar: "فني غسالات كاندي",
    seoContent: [
      { type: 'p', en: "Need a Candy washing machine technician? We have experts who understand Candy's unique Smart Touch features and mechanical builds.", ar: "هل تحتاج إلى فني غسالات كاندي؟ لدينا خبراء يفهمون ميزات اللمس الذكي الفريدة من نوعها والهياكل الميكانيكية." }
    ]
  },
  {
    id: "midea-repair",
    img: "/services/washing-machine (9).jfif",
    en: "Midea washing machine repair",
    ar: "صيانة غسالات ميديا",
    seoContent: [
      { type: 'p', en: "Midea offers excellent value. We provide affordable and efficient repair services for all Midea laundry appliances, ensuring they last longer.", ar: "تقدم ميديا قيمة ممتازة. نحن نقدم خدمات إصلاح بأسعار معقولة وفعالة لجميع أجهزة غسيل ميديا، مما يضمن استمرارها لفترة أطول." },
      { type: 'ul', en: ["Error code resolution", "Motor capacitor replacement", "Vibration damping"], ar: ["حل رمز الخطأ", "استبدال مكثف المحرك", "تخميد الاهتزاز"] }
    ]
  }
];