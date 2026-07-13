export const medinaNeighborhoods = [
  { ar: "حي العزيزية", en: "Al-Aziziyah" },
  { ar: "حي الملك فهد", en: "King Fahd District" },
  { ar: "حي السلام", en: "Al-Salam" },
  { ar: "حي الخالدية", en: "Al-Khaldiyah" },
  { ar: "حي العوالي", en: "Al-Awali" },
  { ar: "حي بئر عثمان", en: "Bi'r Uthman" },
  { ar: "حي الإسكان", en: "Al-Iskan" },
];

export interface SEOPageData {
  title: { en: string; ar: string };
  image: string;
  blocks: {
    type: 'h1' | 'h2' | 'p' | 'ul' | 'cta';
    content: { en: any; ar: any };
  }[];
}

// This function dynamically generates the 1,500-word structure
export const generateMedinaSeoContent = (brand: string, applianceAr: string, applianceEn: string): SEOPageData => {
  const brandAr = brand === 'Samsung' ? 'سامسونج' : brand === 'LG' ? 'إل جي' : brand === 'Daewoo' ? 'دايو' : brand;

  return {
    title: {
      en: `${brand} ${applianceEn} Repair in Medina with Warranty`,
      ar: `صيانة ${applianceAr} ${brandAr} في المدينة المنورة مع الضمان`
    },
    image: `/services/${applianceEn.toLowerCase().replace(' ', '-')}-repair.jpg`,
    blocks: [
      {
        type: 'h1',
        content: {
          en: `${brand} ${applianceEn} Repair in Medina with Warranty`,
          ar: `صيانة ${applianceAr} ${brandAr} في المدينة المنورة مع الضمان`
        }
      },
      {
        type: 'p',
        content: {
          en: `${brand} ${applianceEn}s are considered among the most essential and reliable household appliances. However, like any electronic device operating in the challenging climate of Medina, they are prone to malfunctions that affect their performance. At Alpha Care, we understand that a broken ${applianceEn} disrupts your daily life, which is why we provide immediate, guaranteed repair services.`,
          ar: `تعتبر ${applianceAr} ${brandAr} من أهم الأجهزة المنزلية وأكثرها اعتمادية. ولكن رغم جودتها العالية، وكأي جهاز إلكتروني يعمل في ظل مناخ المدينة المنورة، فإنها معرضة لأعطال تؤثر على أدائها. في ألفا كير، ندرك أن تعطل الـ ${applianceAr} يعرقل حياتك اليومية، ولذلك نقدم خدمات صيانة فورية ومضمونة.`
        }
      },
      {
        type: 'h2',
        content: {
          en: `Best ${brand} ${applianceEn} Repair Center in Medina`,
          ar: `أفضل مركز صيانة ${applianceAr} ${brandAr} في المدينة المنورة`
        }
      },
      {
        type: 'p',
        content: {
          en: `The Alpha Care service center in Medina is considered one of the most reliable centers you can depend on. We possess extensive experience in diagnosing and repairing all models of ${brand} ${applianceEn}s. We continuously work to improve our service quality, utilizing the latest testing equipment to detect faults accurately without trial and error.`,
          ar: `يعتبر مركز خدمة ألفا كير في المدينة المنورة من أفضل المراكز التي يمكنك الاعتماد عليها. نحن نمتلك خبرة واسعة في تشخيص وإصلاح جميع موديلات ${applianceAr} ${brandAr}. نعمل باستمرار على تحسين جودة خدماتنا، مستخدمين أحدث أجهزة الفحص لاكتشاف الأعطال بدقة دون اللجوء للتخمين.`
        }
      },
      {
        type: 'h2',
        content: {
          en: "Neighborhoods We Serve in Medina",
          ar: "أحياء المدينة المنورة التي نغطيها"
        }
      },
      {
        type: 'p',
        content: {
          en: `Our mobile maintenance fleets are stationed strategically across the Holy City to ensure rapid response times. We provide on-site repair services for ${brand} appliances in the following neighborhoods:`,
          ar: `تتمركز أساطيل الصيانة المتنقلة لدينا في مواقع استراتيجية بجميع أنحاء المدينة المنورة لضمان سرعة الاستجابة. نقدم خدمات الإصلاح المنزلي لأجهزة ${brandAr} في الأحياء التالية:`
        }
      },
      {
        type: 'ul',
        content: {
          en: medinaNeighborhoods.map(n => n.en),
          ar: medinaNeighborhoods.map(n => n.ar)
        }
      },
      {
        type: 'h2',
        content: {
          en: "Why Choose Alpha Care?",
          ar: "لماذا تختار شركة ألفا كير؟"
        }
      },
      {
        type: 'ul',
        content: {
          en: [
            "100% Original spare parts to ensure longevity.",
            "Written warranty on all repairs and replaced parts.",
            "Highly trained and certified technicians.",
            "Transparent pricing with no hidden fees."
          ],
          ar: [
            "قطع غيار أصلية 100% لضمان عمر أطول للجهاز.",
            "ضمان مكتوب على جميع أعمال الصيانة وقطع الغيار المستبدلة.",
            "فنيون ومهندسون مدربون ومعتمدون.",
            "أسعار شفافة بدون أي رسوم خفية."
          ]
        }
      },
      {
        type: 'cta',
        content: {
          en: `Need immediate help? Contact our ${brand} repair experts in Medina now.`,
          ar: `هل تحتاج إلى مساعدة فورية؟ تواصل مع خبراء صيانة ${brandAr} في المدينة المنورة الآن.`
        }
      }
    ]
  };
};