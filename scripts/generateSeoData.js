const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');

// Base list of items
const washingMachines = [
  { id: "maytag-repair-Medinah", img: "/services/washing-machine (1).jfif", en: "Maytag washing machine repair in Medinah", ar: "صيانة غسالات ميتاج بالمدينة المنورة", brand: "Maytag" },
  { id: "dishwasher-repair-Medinah", img: "/services/washing-machine (2).jfif", en: "Dishwasher repair in Medinah", ar: "صيانة غسالات صحون بالمدينة المنورة", brand: "Dishwasher" },
  { id: "samsung-warranty-Medinah", img: "/services/washing-machine (3).jfif", en: "Samsung washing machine repair in Medinah with warranty", ar: "صيانة غسالات سامسونج بالمدينة المنورة مع الضمان", brand: "Samsung" },
  { id: "lg-warranty-Medinah", img: "/services/washing-machine (4).jfif", en: "LG washing machine repair in Medinah with warranty", ar: "صيانة غسالات ال جي بالمدينة المنورة بالضمان", brand: "LG" },
  { id: "repair-alkharj", img: "/services/washing-machine (5).jfif", en: "Washing machine repair company in Medinah", ar: "شركة صيانة غسالات بالمدينة المنورة", brand: "Washing Machine" },
  { id: "ariston-Medinah", img: "/services/washing-machine (6).jfif", en: "Ariston washing machine repair in Medinah", ar: "صيانة غسالات اريستون بالمدينة المنورة", brand: "Ariston" },
  { id: "repair-Medinah", img: "/services/washing-machine (7).jfif", en: "Washing machine repair in Medinah", ar: "صيانة غسالات بالمدينة المنورة", brand: "Washing Machine" },
  { id: "daewoo-Medinah", img: "/services/washing-machine (8).jfif", en: "Daewoo washing machine repair in Medinah", ar: "صيانة غسالات دايو بالمدينة المنورة", brand: "Daewoo" },
  { id: "repair-medina", img: "/services/washing-machine (9).jfif", en: "Washing machine repair in Medina", ar: "صيانة غسالات بالمدينة المنورة", brand: "Washing Machine" },
  { id: "beko-Medinah", img: "/services/washing-machine (1).jfif", en: "Beko washing machine repair in Medinah", ar: "صيانة غسالات بيكو بالمدينة المنورة", brand: "Beko" },
  { id: "whirlpool-maintenance", img: "/services/washing-machine (2).jfif", en: "Whirlpool washing machine maintenance", ar: "صيانة غسالات ويرلبول", brand: "Whirlpool" },
  { id: "bosch-Medinah", img: "/services/washing-machine (3).jfif", en: "Bosch washing machine repair in Medinah", ar: "صيانة غسالات بوش بالمدينة المنورة", brand: "Bosch" },
  { id: "haier-Medinah", img: "/services/washing-machine (4).jfif", en: "Haier washing machine repair in Medinah", ar: "صيانة غسالات هاير بالمدينة المنورة", brand: "Haier" },
  { id: "panasonic-auto", img: "/services/washing-machine (5).jfif", en: "Panasonic automatic washing machine repair", ar: "صيانة غسالات باناسونيك الأوتوماتيكية", brand: "Panasonic" },
  { id: "toshiba-top-load", img: "/services/washing-machine (6).jfif", en: "Toshiba top load washing machine maintenance", ar: "صيانة غسالات توشيبا تعبئة علوية", brand: "Toshiba" },
  { id: "hoover-Medinah", img: "/services/washing-machine (7).jfif", en: "Hoover washing machine repair in Medinah", ar: "صيانة غسالات هوفر بالمدينة المنورة", brand: "Hoover" },
  { id: "candy-tech", img: "/services/washing-machine (8).jfif", en: "Candy washing machine technician", ar: "فني غسالات كاندي", brand: "Candy" },
  { id: "midea-repair", img: "/services/washing-machine (9).jfif", en: "Midea washing machine repair", ar: "صيانة غسالات ميديا", brand: "Midea" }
];

const fridges = [
  { id: "hitachi-repair-Medinah", img: "/services/hitachi-fridge.jfif", en: "Hitachi refrigerator repair company in Medinah", ar: "شركة صيانة ثلاجات هيتاشي بالمدينة المنورة", brand: "Hitachi Refrigerator" },
  { id: "samsung-warranty-Medinah", img: "/services/samsung-fridge.jfif", en: "Samsung refrigerator repair in Medinah with warranty", ar: "صيانة ثلاجات سامسونج بالمدينة المنورة مع الضمان", brand: "Samsung Refrigerator" },
  { id: "lg-Medinah-services", img: "lg-fridge.jfif", en: "LG refrigerator repair company in Medinah", ar: "شركة صيانة ثلاجات ال جي بالمدينة المنورة", brand: "LG Refrigerator" },
  { id: "sharp-refrigerator-Medinah", img: "/services/sharp-fridge.jfif", en: "Sharp refrigerator repair in Medinah", ar: "صيانة ثلاجات شارب بالمدينة المنورة", brand: "Sharp Refrigerator" },
  { id: "lg-refrigerator-Medinah", img: "/services/lg-ref.jfif", en: "LG refrigerator repair in Medinah", ar: "صيانة ثلاجات ال جي بالمدينة المنورة", brand: "LG Refrigerator" },
  { id: "freezer-room-maintenance", img: "/services/freezer-room.jfif", en: "Refrigeration and freezer room maintenance in Medinah with warranty", ar: "صيانة غرف التبريد والتجميد بالمدينة المنورة مع الضمان", brand: "Freezer Room" },
  { id: "gas-refilling-compressor", img: "/services/gas-refill.jfif", en: "Refrigerator gas refilling and compressor repair", ar: "شحن فريون الثلاجات وإصلاح الضاغط", brand: "Refrigerator Gas" },
  { id: "toshiba-Medinah-maintenance", img: "/services/toshiba-fridge.jfif", en: "Toshiba refrigerator maintenance in Medinah", ar: "صيانة ثلاجات توشيبا بالمدينة المنورة", brand: "Toshiba Refrigerator" },
  { id: "daewoo-freezer-repair", img: "/services/daewoo-fridge (2).jfif", en: "Daewoo refrigerator and freezer repair", ar: "صيانة ثلاجات وفريزرات دايو", brand: "Daewoo Refrigerator" }
];

const acs = [
  { id: "ac-repair-Medinah", img: "/services/ac-repair(1).jfif", en: "Air conditioning repair company in Medinah", ar: "شركة تصليح مكيفات بالمدينة المنورة", brand: "AC" },
  { id: "ac-maintenance-Medinah", img: "/services/ac-service(2).jfif", en: "Air conditioning maintenance company in Medinah", ar: "شركة صيانة مكيفات بالمدينة المنورة", brand: "AC" },
  { id: "ac-maintenance-medina", img: "/services/ac-service(3).jfif", en: "Air conditioner maintenance in Medina", ar: "صيانة مكيفات بالمدينة المنورة", brand: "AC" },
  { id: "ac-cleaning-Medinah", img: "/services/ac-service(4).jfif", en: "Air conditioning cleaning company in Medinah", ar: "شركة تنظيف مكيفات بالمدينة المنورة", brand: "AC" }
];

const ovens = [
  { id: "gas-oven-repair-Medinah", img: "/services/oven-new-1.jfif", en: "Gas oven repair company in Medinah", ar: "شركة صيانة افران غاز بالمدينة المنورة", brand: "Gas Oven" },
  { id: "electric-oven-repair-Medinah", img: "/services/oven-new-2.jfif", en: "Electric oven repair in Medinah", ar: "صيانة افران كهربائية بالمدينة المنورة", brand: "Electric Oven" },
  { id: "oven-cleaning-Medinah", img: "/services/oven-new-3.jfif", en: "Oven cleaning services in Medinah", ar: "خدمات تنظيف الأفران بالمدينة المنورة", brand: "Oven Cleaning" },
  { id: "samsung-oven-repair", img: "/services/oven-new-4.jfif", en: "Samsung oven repair in Medinah", ar: "صيانة افران سامسونج بالمدينة المنورة", brand: "Samsung Oven" },
  { id: "lg-oven-repair", img: "/services/oven-clean(5).jfif", en: "LG oven repair in Medinah", ar: "صيانة افران ال جي بالمدينة المنورة", brand: "LG Oven" },
  { id: "bosch-oven-repair", img: "/services/oven-clean(6).jfif", en: "Bosch oven repair in Medinah", ar: "صيانة افران بوش بالمدينة المنورة", brand: "Bosch Oven" },
  { id: "siemens-oven-repair", img: "/services/oven-clean(7).jfif", en: "Siemens oven repair in Medinah", ar: "صيانة افران سيمنس بالمدينة المنورة", brand: "Siemens Oven" },
  { id: "ariston-oven-repair", img: "/services/oven-clean(8).jfif", en: "Ariston oven repair in Medinah", ar: "صيانة افران اريستون بالمدينة المنورة", brand: "Ariston Oven" },
  { id: "beko-oven-repair", img: "/services/oven-clean(9).jfif", en: "Beko oven repair in Medinah", ar: "صيانة افران بيكو بالمدينة المنورة", brand: "Beko Oven" }
];

const electronics = [
  { id: "tv-screen-repair-Medinah", img: "/services/electronics-new-1.jfif", en: "TV screen repair in Medinah with warranty", ar: "صيانة شاشات بالمدينة المنورة مع الضمان", brand: "TV Screen" },
  { id: "lg-tv-repair", img: "/services/electronics-new-2.jfif", en: "LG TV repair in Medinah", ar: "صيانة شاشات ال جي بالمدينة المنورة", brand: "LG TV" },
  { id: "samsung-tv-repair", img: "/services/electronics-new-3.jfif", en: "Samsung TV repair in Medinah", ar: "صيانة شاشات سامسونج بالمدينة المنورة", brand: "Samsung TV" },
  { id: "sony-tv-repair", img: "/services/tv-bg.jfif", en: "Sony TV repair in Medinah", ar: "صيانة شاشات سوني بالمدينة المنورة", brand: "Sony TV" },
  { id: "toshiba-tv-repair", img: "/services/tv-repair.jfif", en: "Toshiba TV repair in Medinah", ar: "صيانة شاشات توشيبا بالمدينة المنورة", brand: "Toshiba TV" }
];

// Content generator functions
function generateSeoContent(brand, enTitle, arTitle) {
  const brandName = brand || "appliance";
  
  return `[
    { type: 'p', en: "Welcome to Alpha Care, your trusted partner for ${enTitle}. Our expert technicians are dedicated to providing the highest quality repair and maintenance services throughout Medinah. We understand how essential your ${brandName} is to your daily routine, which is why we offer fast, reliable, and affordable solutions tailored to your specific needs. Our comprehensive approach ensures that every aspect of your appliance is thoroughly inspected and expertly repaired, guaranteeing optimal performance and longevity. From minor adjustments to major overhauls, our team has the skills and experience to handle any issue with precision and care.", ar: "مرحبًا بكم في ألفا كير، شريكك الموثوق لـ ${arTitle}. فنيونا الخبراء مكرسون لتقديم أعلى جودة من خدمات الإصلاح والصيانة في جميع أنحاء المدينة المنورة. نحن ندرك مدى أهمية ${brandName} في روتينك اليومي، ولهذا السبب نقدم حلولاً سريعة وموثوقة وبأسعار معقولة مصممة خصيصًا لتلبية احتياجاتك الخاصة. يضمن نهجنا الشامل فحص كل جانب من جوانب جهازك بدقة وإصلاحه بخبرة، مما يضمن الأداء الأمثل وطول العمر. من التعديلات الطفيفة إلى الإصلاحات الشاملة، يتمتع فريقنا بالمهارات والخبرة للتعامل مع أي مشكلة بدقة وعناية." },
    
    { type: 'h2', en: "Why Choose Our ${brandName} Repair Services in Medinah?", ar: "لماذا تختار خدمات إصلاح ${brandName} لدينا في المدينة المنورة؟" },
    
    { type: 'p', en: "Choosing the right repair service in Medinah is crucial for the longevity of your ${brandName}. At Alpha Care, we pride ourselves on our commitment to excellence and customer satisfaction. Our technicians are factory-trained and stay updated with the latest technological advancements in appliance repair. We use state-of-the-art diagnostic equipment to quickly identify the root cause of the problem, allowing us to implement effective and long-lasting solutions. Moreover, our transparent pricing and honest communication mean you’ll never face unexpected costs or hidden fees.", ar: "اختيار خدمة الإصلاح المناسبة في المدينة المنورة أمر بالغ الأهمية لطول عمر ${brandName}. في ألفا كير، نفخر بالتزامنا بالتميز ورضا العملاء. فنيونا مدربون في المصنع ويبقون على اطلاع بأحدث التطورات التكنولوجية في إصلاح الأجهزة. نستخدم أحدث معدات التشخيص لتحديد السبب الجذري للمشكلة بسرعة، مما يتيح لنا تنفيذ حلول فعالة وطويلة الأمد. علاوة على ذلك، فإن تسعيرنا الشفاف وتواصلنا الصادق يعني أنك لن تواجه أبدًا تكاليف غير متوقعة أو رسومًا خفية." },
    
    { type: 'ul', en: [
      "Certified and highly experienced technicians.",
      "Use of 100% original spare parts.",
      "Comprehensive warranty on all repairs.",
      "Same-day service available in most Medinah neighborhoods.",
      "Transparent pricing with no hidden fees."
    ], ar: [
      "فنيون معتمدون وذوو خبرة عالية.",
      "استخدام قطع غيار أصلية 100٪.",
      "ضمان شامل على جميع الإصلاحات.",
      "خدمة في نفس اليوم متوفرة في معظم أحياء المدينة المنورة.",
      "تسعير شفاف بدون رسوم خفية."
    ] },

    { type: 'h2', en: "Common ${brandName} Issues We Resolve in Medinah", ar: "مشكلات ${brandName} الشائعة التي نحلها في المدينة المنورة" },

    { type: 'p', en: "Appliances can experience a variety of issues over time, especially with frequent use in Medinah's climate. For your ${brandName}, common problems might include unusual noises, failure to start, inefficient operation, or electrical malfunctions. Our technicians are well-versed in troubleshooting these and many other issues. We perform a detailed diagnostic check to isolate the faulty component, whether it's a worn-out belt, a defective control board, a clogged filter, or a broken motor. By addressing the specific problem accurately, we prevent further damage and restore your appliance to peak condition.", ar: "يمكن أن تواجه الأجهزة مجموعة متنوعة من المشكلات بمرور الوقت، خاصة مع الاستخدام المتكرر في مناخ المدينة المنورة. بالنسبة لـ ${brandName}، قد تشمل المشكلات الشائعة ضوضاء غير عادية، أو فشل في البدء، أو تشغيل غير فعال، أو أعطال كهربائية. الفنيون لدينا على دراية جيدة في استكشاف هذه المشكلات والعديد من المشكلات الأخرى وإصلاحها. نقوم بإجراء فحص تشخيصي مفصل لعزل المكون المعيب، سواء كان حزامًا مهترئًا أو لوحة تحكم معيبة أو مرشحًا مسدودًا أو محركًا مكسورًا. من خلال معالجة المشكلة المحددة بدقة، نمنع المزيد من الضرر ونعيد جهازك إلى حالة الذروة." },

    { type: 'h2', en: "Our Comprehensive ${brandName} Maintenance Process", ar: "عملية صيانة ${brandName} الشاملة لدينا" },

    { type: 'p', en: "Regular maintenance is key to keeping your ${brandName} running efficiently and extending its lifespan. Our maintenance process in Medinah goes beyond simple repairs. We offer scheduled maintenance plans that include deep cleaning of internal components, lubrication of moving parts, calibration of sensors, and testing of electrical connections. This proactive approach helps identify potential issues before they escalate into major breakdowns, saving you time, money, and frustration in the long run. Trust our experts to provide the care your appliance deserves.", ar: "الصيانة الدورية هي المفتاح للحفاظ على تشغيل ${brandName} بكفاءة وإطالة عمره. تتجاوز عملية الصيانة لدينا في المدينة المنورة الإصلاحات البسيطة. نقدم خطط صيانة مجدولة تتضمن تنظيفًا عميقًا للمكونات الداخلية، وتزييت الأجزاء المتحركة، ومعايرة أجهزة الاستشعار، واختبار التوصيلات الكهربائية. يساعد هذا النهج الاستباقي في تحديد المشكلات المحتملة قبل أن تتصاعد إلى أعطال كبيرة، مما يوفر لك الوقت والمال والإحباط على المدى الطويل. ثق بخبرائنا لتقديم الرعاية التي يستحقها جهازك." },

    { type: 'ul', en: [
      "Initial diagnostic and performance evaluation.",
      "Thorough cleaning of essential parts and filters.",
      "Replacement of worn or damaged components.",
      "System testing and recalibration.",
      "Final quality check to ensure optimal functionality."
    ], ar: [
      "التشخيص الأولي وتقييم الأداء.",
      "تنظيف شامل للأجزاء الأساسية والفلاتر.",
      "استبدال المكونات البالية أو التالفة.",
      "اختبار النظام وإعادة المعايرة.",
      "فحص الجودة النهائي لضمان الأداء الأمثل."
    ] },

    { type: 'h2', en: "Areas We Serve in Medinah", ar: "المناطق التي نخدمها في المدينة المنورة" },

    { type: 'p', en: "Alpha Care proudly serves all neighborhoods and districts within Medinah. We understand the local environment and how factors like heat, humidity, and water quality can impact your ${brandName}. Our mobile repair units are fully equipped and strategically positioned to provide rapid response times across the city. Whether you reside in the bustling city center or the quieter suburbs, our team is just a call away, ready to deliver professional repair services right to your doorstep.", ar: "تخدم ألفا كير بكل فخر جميع الأحياء والمناطق داخل المدينة المنورة. نحن نفهم البيئة المحلية وكيف يمكن لعوامل مثل الحرارة والرطوبة وجودة المياه أن تؤثر على ${brandName}. وحدات الإصلاح المتنقلة لدينا مجهزة بالكامل وموضوعة بشكل استراتيجي لتوفير أوقات استجابة سريعة في جميع أنحاء المدينة. سواء كنت تقيم في وسط المدينة المزدحم أو في الضواحي الأكثر هدوءًا، فإن فريقنا على بعد مكالمة هاتفية فقط، ومستعد لتقديم خدمات إصلاح احترافية مباشرة إلى باب منزلك." },

    { type: 'ul', en: [
      "Al Haram and central Medinah areas.",
      "Quba, Qiblatayn, and surrounding districts.",
      "Al Awali, Al Aziziyah, and Al Iskan.",
      "King Fahd district and Uhud areas.",
      "All major residential and commercial zones in Medinah."
    ], ar: [
      "الحرم والمناطق المركزية بالمدينة المنورة.",
      "قباء والقبلتين والأحياء المحيطة بها.",
      "العوالي والعزيزية والإسكان.",
      "حي الملك فهد ومناطق أحد.",
      "جميع المناطق السكنية والتجارية الرئيسية في المدينة المنورة."
    ] },

    { type: 'h2', en: "Genuine Parts and Expert Technicians", ar: "قطع غيار أصلية وفنيون خبراء" },

    { type: 'p', en: "The quality of replacement parts is just as important as the skill of the technician installing them. That's why we exclusively use genuine, factory-authorized parts for all ${brandName} repairs in Medinah. These parts are designed to meet the exact specifications of your appliance, ensuring perfect compatibility and reliable performance. Combined with the expertise of our certified technicians, this commitment to quality guarantees that your repaired appliance will function as smoothly and efficiently as it did when it was brand new.", ar: "تعد جودة قطع الغيار بنفس أهمية مهارة الفني الذي يقوم بتثبيتها. لهذا السبب نستخدم حصريًا قطع غيار أصلية معتمدة من المصنع لجميع إصلاحات ${brandName} في المدينة المنورة. تم تصميم هذه الأجزاء لتلبية المواصفات الدقيقة لجهازك، مما يضمن التوافق التام والأداء الموثوق. إلى جانب خبرة الفنيين المعتمدين لدينا، يضمن هذا الالتزام بالجودة أن جهازك الذي تم إصلاحه سيعمل بسلاسة وكفاءة كما كان عندما كان جديدًا." },

    { type: 'h3', en: "Customer Satisfaction Guarantee", ar: "ضمان رضا العملاء" },

    { type: 'p', en: "Your satisfaction is our top priority. We strive to provide a seamless and stress-free repair experience from the moment you contact us until your ${brandName} is fully functional. Our friendly customer service team is always available to answer your questions and schedule appointments at your convenience. After the repair is complete, we provide a detailed explanation of the work done and offer maintenance tips to help you keep your appliance in top condition. We stand behind our work with a robust warranty, giving you complete confidence in our services.", ar: "رضاك هو على رأس أولوياتنا. نحن نسعى جاهدين لتقديم تجربة إصلاح سلسة وخالية من الإجهاد من اللحظة التي تتصل فيها بنا حتى يعمل ${brandName} بكامل طاقته. يتوفر فريق خدمة العملاء الودود لدينا دائمًا للإجابة على أسئلتك وتحديد المواعيد في الوقت الذي يناسبك. بعد اكتمال الإصلاح، نقدم شرحًا تفصيليًا للعمل المنجز ونقدم نصائح صيانة لمساعدتك في الحفاظ على جهازك في أفضل حالة. نحن نقف وراء عملنا بضمان قوي، مما يمنحك ثقة كاملة في خدماتنا." },

    { type: 'h2', en: "The Importance of Timely Repairs for your ${brandName}", ar: "أهمية الإصلاحات في الوقت المناسب لـ ${brandName}" },

    { type: 'p', en: "Delaying repairs can often lead to more extensive damage and higher costs down the line. If you notice any irregularities in the performance of your ${brandName}, it is essential to seek professional help immediately. Even seemingly minor issues, like a small leak or a strange sound, can be indicators of underlying problems that require prompt attention. Our prompt response service in Medinah ensures that your appliance is evaluated and repaired quickly, minimizing downtime and preventing further complications. Don't wait until a small issue becomes a major crisis; contact Alpha Care today.", ar: "غالبًا ما يؤدي تأخير الإصلاحات إلى أضرار أكثر شمولاً وتكاليف أعلى في المستقبل. إذا لاحظت أي مخالفات في أداء ${brandName}، فمن الضروري طلب المساعدة المتخصصة على الفور. حتى المشكلات التي تبدو بسيطة، مثل تسرب صغير أو صوت غريب، يمكن أن تكون مؤشرات لمشاكل أساسية تتطلب اهتمامًا فوريًا. تضمن خدمة الاستجابة السريعة لدينا في المدينة المنورة تقييم جهازك وإصلاحه بسرعة، مما يقلل من وقت التوقف عن العمل ويمنع المزيد من المضاعفات. لا تنتظر حتى تصبح مشكلة صغيرة أزمة كبرى؛ اتصل بألفا كير اليوم." },

    { type: 'h2', en: "Contact Alpha Care in Medinah Today", ar: "اتصل بألفا كير في المدينة المنورة اليوم" },

    { type: 'p', en: "Ready to restore your ${brandName} to perfect working order? Contact Alpha Care today to schedule an appointment with our expert technicians in Medinah. We offer flexible scheduling, transparent pricing, and a commitment to quality that is second to none. Let us handle your appliance repair needs so you can get back to enjoying a smoothly running household. Call us now or reach out via WhatsApp for immediate assistance.", ar: "هل أنت مستعد لاستعادة ${brandName} إلى حالة العمل المثالية؟ اتصل بألفا كير اليوم لتحديد موعد مع الفنيين الخبراء لدينا في المدينة المنورة. نحن نقدم جدولة مرنة، وتسعيرًا شفافًا، والتزامًا بالجودة لا يعلى عليه. دعنا نتعامل مع احتياجات إصلاح أجهزتك حتى تتمكن من العودة إلى الاستمتاع بأسرة تعمل بسلاسة. اتصل بنا الآن أو تواصل معنا عبر واتساب للحصول على مساعدة فورية." }
  ]`;
}

function writeDataFile(name, items, interfaceName, typeName) {
  const filePath = path.join(dataDir, `${name}.ts`);
  let content = `export type SeoBlock = {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'image';
  en: string | string[];
  ar: string | string[];
  url?: string;
};

export interface ${interfaceName} {
  id: string;
  img: string;
  en: string;
  ar: string;
  seoContent: SeoBlock[];
}

export const ${name}: ${interfaceName}[] = [\n`;

  items.forEach((item, index) => {
    content += `  {
    id: "${item.id}",
    img: "${item.img}",
    en: "${item.en}",
    ar: "${item.ar}",
    seoContent: ${generateSeoContent(item.brand, item.en, item.ar)}
  }${index < items.length - 1 ? ',' : ''}\n`;
  });

  content += `];\n`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated ${filePath}`);
}

// Generate all files
writeDataFile('servicesData', washingMachines, 'ServiceItem', 'WashingMachine');
writeDataFile('fridgeData', fridges, 'FridgeItem', 'Fridge');
writeDataFile('acData', acs, 'AcItem', 'Ac');
writeDataFile('ovenData', ovens, 'OvenItem', 'Oven');
writeDataFile('electronicsData', electronics, 'ElectronicsItem', 'Electronics');

// Generate allServicesData.ts
const allServicesContent = `import { servicesData, ServiceItem } from './servicesData';
import { fridgeData, FridgeItem } from './fridgeData';
import { acData, AcItem } from './acData';
import { ovenData, OvenItem } from './ovenData';
import { electronicsData, ElectronicsItem } from './electronicsData';

// Union type for any service item
export type AnyServiceItem = ServiceItem | FridgeItem | AcItem | OvenItem | ElectronicsItem;

export const allServicesData: AnyServiceItem[] = [
  ...servicesData,
  ...fridgeData,
  ...acData,
  ...ovenData,
  ...electronicsData
];
`;
fs.writeFileSync(path.join(dataDir, 'allServicesData.ts'), allServicesContent, 'utf8');
console.log('Generated allServicesData.ts');
