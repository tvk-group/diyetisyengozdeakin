import type { SERVICE_SLUGS } from "@/lib/constants";

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];
type L = Record<string, string>;
type LList = Record<string, string[]>;
type LFaq = Record<string, { q: string; a: string }[]>;

export interface ServiceContent {
  slug: ServiceSlug;
  name: L;
  intro: L;
  science: L;
  symptoms: LList;
  treatmentSteps: LList;
  timeline: Record<string, { period: string; title: string }[]>;
  results: LList;
  faq: LFaq;
}

const sharedTreatment = {
  tr: [
    "Detaylı anamnez ve hedef belirleme",
    "Kan tahlili ve vücut kompozisyon analizi",
    "Kişiselleştirilmiş beslenme planı",
    "Davranış değişikliği ve psikolojik destek",
    "Haftalık takip ve metabolik izlem",
  ],
  en: [
    "Detailed assessment and goal setting",
    "Blood tests and body composition analysis",
    "Personalized nutrition plan",
    "Behavior change and psychological support",
    "Weekly follow-up and metabolic monitoring",
  ],
  de: [
    "Detaillierte Anamnese und Zielsetzung",
    "Bluttests und Körperzusammensetzungsanalyse",
    "Personalisierter Ernährungsplan",
    "Verhaltensänderung und psychologische Unterstützung",
    "Wöchentliche Nachverfolgung",
  ],
  fr: [
    "Anamnèse détaillée et définition des objectifs",
    "Analyses sanguines et composition corporelle",
    "Plan nutritionnel personnalisé",
    "Changement de comportement et soutien psychologique",
    "Suivi hebdomadaire",
  ],
  ru: [
    "Подробный анамнез и постановка целей",
    "Анализы крови и состава тела",
    "Персонализированный план питания",
    "Изменение поведения и психологическая поддержка",
    "Еженедельное наблюдение",
  ],
  ar: [
    "تقييم مفصل وتحديد الأهداف",
    "فحوصات الدم وتحليل تكوين الجسم",
    "خطة تغذية مخصصة",
    "تغيير السلوك والدعم النفسي",
    "متابعة أسبوعية",
  ],
};

const sharedTimeline = {
  tr: [
    { period: "1. Hafta", title: "İlk görüşme ve değerlendirme" },
    { period: "2–4. Hafta", title: "Beslenme planı ve adaptasyon" },
    { period: "1–3. Ay", title: "Metabolik iyileşme ve takip" },
    { period: "3+ Ay", title: "Sürdürülebilir yaşam alışkanlıkları" },
  ],
  en: [
    { period: "Week 1", title: "Initial consultation and assessment" },
    { period: "Weeks 2–4", title: "Nutrition plan and adaptation" },
    { period: "Months 1–3", title: "Metabolic improvement and follow-up" },
    { period: "3+ Months", title: "Sustainable lifestyle habits" },
  ],
  de: [
    { period: "Woche 1", title: "Erstberatung" },
    { period: "Woche 2–4", title: "Ernährungsplan" },
    { period: "Monat 1–3", title: "Metabolische Verbesserung" },
    { period: "3+ Monate", title: "Nachhaltige Gewohnheiten" },
  ],
  fr: [
    { period: "Semaine 1", title: "Première consultation" },
    { period: "Semaines 2–4", title: "Plan nutritionnel" },
    { period: "Mois 1–3", title: "Amélioration métabolique" },
    { period: "3+ mois", title: "Habitudes durables" },
  ],
  ru: [
    { period: "Неделя 1", title: "Первичная консультация" },
    { period: "Недели 2–4", title: "План питания" },
    { period: "Месяцы 1–3", title: "Метаболическое улучшение" },
    { period: "3+ месяца", title: "Устойчивые привычки" },
  ],
  ar: [
    { period: "الأسبوع 1", title: "الاستشارة الأولى" },
    { period: "الأسبوع 2–4", title: "خطة التغذية" },
    { period: "الشهر 1–3", title: "التحسين الأيضي" },
    { period: "3+ أشهر", title: "عادات مستدامة" },
  ],
};

function svc(
  slug: ServiceSlug,
  name: L,
  intro: L,
  science: L,
  symptoms: LList,
  results: LList,
  faq: LFaq
): ServiceContent {
  return {
    slug,
    name,
    intro,
    science,
    symptoms,
    treatmentSteps: sharedTreatment,
    timeline: sharedTimeline,
    results,
    faq,
  };
}

export const servicesContent: ServiceContent[] = [
  svc(
    "kilo-yonetimi",
    {
      tr: "Kilo Yönetimi",
      en: "Weight Management",
      de: "Gewichtsmanagement",
      fr: "Gestion du poids",
      ru: "Управление весом",
      ar: "إدارة الوزن",
    },
    {
      tr: "Sürdürülebilir kilo yönetimi; metabolik iyileşme ve davranış değişikliğini birlikte hedefler.",
      en: "Sustainable weight management targeting metabolic improvement and behavior change together.",
      de: "Nachhaltiges Gewichtsmanagement mit metabolischer Verbesserung.",
      fr: "Gestion durable du poids et amélioration métabolique.",
      ru: "Устойчивое управление весом и метаболическое улучшение.",
      ar: "إدارة وزن مستدامة وتحسين أيضي.",
    },
    {
      tr: "Kilo yönetimi yalnızca kalori kısıtlaması değildir. Kan biyokimyası, hormon dengesi ve psikolojik faktörler birlikte değerlendirilir.",
      en: "Weight management is not just calorie restriction. Blood biochemistry, hormonal balance and psychological factors are evaluated together.",
      de: "Gewichtsmanagement ist mehr als Kalorienrestriktion.",
      fr: "La gestion du poids ne se limite pas aux calories.",
      ru: "Управление весом — это не только ограничение калорий.",
      ar: "إدارة الوزن ليست مجرد تقييد السعرات.",
    },
    {
      tr: ["Kilo artışı veya verememe", "Metabolik yavaşlama", "Duygusal yeme", "Motivasyon kaybı"],
      en: ["Weight gain or inability to lose", "Metabolic slowdown", "Emotional eating", "Loss of motivation"],
      de: ["Gewichtszunahme", "Emotionales Essen"],
      fr: ["Prise de poids", "Alimentation émotionnelle"],
      ru: ["Набор веса", "Эмоциональное питание"],
      ar: ["زيادة الوزن", "الأكل العاطفي"],
    },
    {
      tr: ["Metabolik iyileşme", "Sürdürülebilir kilo değişimi", "Enerji artışı", "Davranış değişikliği"],
      en: ["Metabolic improvement", "Sustainable weight change", "Increased energy", "Behavior change"],
      de: ["Metabolische Verbesserung", "Nachhaltige Gewichtsänderung"],
      fr: ["Amélioration métabolique", "Changement durable"],
      ru: ["Метаболическое улучшение", "Устойчивое изменение веса"],
      ar: ["تحسين أيضي", "تغيير وزن مستدام"],
    },
    {
      tr: [
        { q: "Ne kadar sürede sonuç alınır?", a: "Bireysel farklılıklar vardır; genellikle 4–8 haftada metabolik iyileşme gözlemlenir." },
        { q: "Crash diyet uygulanır mı?", a: "Hayır. Sürdürülebilir ve bilim temelli yaklaşım esastır." },
      ],
      en: [
        { q: "How long until results?", a: "Individual differences apply; metabolic improvement is typically observed in 4–8 weeks." },
        { q: "Are crash diets used?", a: "No. A sustainable, science-based approach is essential." },
      ],
      de: [{ q: "Wie schnell Ergebnisse?", a: "Individuelle Unterschiede; typisch 4–8 Wochen." }],
      fr: [{ q: "Délai des résultats ?", a: "Différences individuelles ; généralement 4–8 semaines." }],
      ru: [{ q: "Когда будут результаты?", a: "Индивидуально; обычно 4–8 недель." }],
      ar: [{ q: "متى النتائج؟", a: "تختلف حسب الفرد؛ عادة 4–8 أسابيع." }],
    }
  ),
  svc(
    "pcos",
    {
      tr: "PCOS (Polikistik Over Sendromu)",
      en: "PCOS (Polycystic Ovary Syndrome)",
      de: "PCOS",
      fr: "SOPK",
      ru: "СПКЯ",
      ar: "متلازمة تكيس المبايض",
    },
    {
      tr: "Hormon dengesi, insülin direnci ve kilo yönetimini bütüncül ele alan PCOS beslenme danışmanlığı.",
      en: "Holistic PCOS nutrition counseling addressing hormonal balance, insulin resistance and weight management.",
      de: "Ganzheitliche PCOS-Ernährungsberatung.",
      fr: "Conseil nutritionnel holistique pour le SOPK.",
      ru: "Холистическое консультирование при СПКЯ.",
      ar: "استشارة تغذية شاملة لمتلازمة تكيس المبايض.",
    },
    {
      tr: "PCOS'da insülin direnci ve androjen düzeyleri beslenme ile önemli ölçüde etkilenebilir. Kişiye özel makro ve mikro besin planlaması yapılır.",
      en: "In PCOS, insulin resistance and androgen levels can be significantly influenced by nutrition. Personalized macro and micronutrient planning is applied.",
      de: "Bei PCOS beeinflusst Ernährung Insulinresistenz und Hormone.",
      fr: "Le SOPK est fortement influencé par l'alimentation et l'insuline.",
      ru: "При СПКЯ питание существенно влияет на инсулинорезистентность.",
      ar: "التغذية تؤثر بشكل كبير على مقاومة الأنسولين في متلازمة تكيس المبايض.",
    },
    {
      tr: ["Düzensiz adet", "Kilo artışı", "Tüylenme", "Tatlı isteği", "İnfertilite riski"],
      en: ["Irregular periods", "Weight gain", "Hirsutism", "Sweet cravings", "Fertility concerns"],
      de: ["Unregelmäßige Periode", "Gewichtszunahme"],
      fr: ["Cycles irréguliers", "Prise de poids"],
      ru: ["Нерегулярный цикл", "Набор веса"],
      ar: ["دورة غير منتظمة", "زيادة الوزن"],
    },
    {
      tr: ["Hormon dengesi", "İnsülin duyarlılığı artışı", "Kilo yönetimi", "Enerji düzeyi iyileşmesi"],
      en: ["Hormonal balance", "Improved insulin sensitivity", "Weight management", "Better energy levels"],
      de: ["Hormonbalance", "Bessere Insulinsensitivität"],
      fr: ["Équilibre hormonal", "Meilleure sensibilité à l'insuline"],
      ru: ["Гормональный баланс", "Чувствительность к инсулину"],
      ar: ["توازن هرموني", "حساسية أنسولين أفضل"],
    },
    {
      tr: [{ q: "PCOS'ta kilo vermek zor mu?", a: "İnsülin direnci yönetildiğinde süreç kolaylaşır; kişisel plan şarttır." }],
      en: [{ q: "Is weight loss hard with PCOS?", a: "Managing insulin resistance makes the process easier; a personal plan is essential." }],
      de: [{ q: "Ist Abnehmen bei PCOS schwer?", a: "Mit Insulinmanagement wird es leichter." }],
      fr: [{ q: "Perdre du poids avec le SOPK ?", a: "La gestion de l'insuline facilite le processus." }],
      ru: [{ q: "Сложно ли худеть при СПКЯ?", a: "При контроле инсулина процесс облегчается." }],
      ar: [{ q: "هل فقدان الوزن صعب مع تكيس المبايض؟", a: "إدارة الأنسولين تسهّل العملية." }],
    }
  ),
  svc(
    "insulin-direnci",
    {
      tr: "İnsülin Direnci",
      en: "Insulin Resistance",
      de: "Insulinresistenz",
      fr: "Résistance à l'insuline",
      ru: "Инсулинорезистентность",
      ar: "مقاومة الأنسولين",
    },
    {
      tr: "İnsülin direncinin dengelenmesi için kanıta dayalı beslenme ve metabolik takip programı.",
      en: "Evidence-based nutrition and metabolic monitoring to balance insulin resistance.",
      de: "Evidenzbasierte Ernährung bei Insulinresistenz.",
      fr: "Nutrition fondée sur des preuves pour la résistance à l'insuline.",
      ru: "Питание при инсулинорезистентности на основе доказательств.",
      ar: "تغذية قائمة على الأدلة لمقاومة الأنسولين.",
    },
    {
      tr: "Yüksek insülin düzeyleri yağ depolanmasını artırır. Beslenme, uyku ve aktivite ile birlikte metabolik denge sağlanır.",
      en: "Elevated insulin promotes fat storage. Metabolic balance is achieved through nutrition, sleep and activity together.",
      de: "Hohes Insulin fördert Fettspeicherung.",
      fr: "L'insuline élevée favorise le stockage des graisses.",
      ru: "Высокий инсулин способствует накоплению жира.",
      ar: "الأنسولين المرتفع يعزز تخزين الدهون.",
    },
    {
      tr: ["Karın bölgesinde kilo", "Tatlı isteği", "Yemek sonrası uyku hali", "Tartıda durgunluk"],
      en: ["Abdominal weight gain", "Sweet cravings", "Post-meal fatigue", "Stalled scale"],
      de: ["Bauchfett", "Heißhunger auf Süßes"],
      fr: ["Graisse abdominale", "Envies de sucré"],
      ru: ["Жир на животе", "Тяга к сладкому"],
      ar: ["دهون البطن", "رغبة في الحلوى"],
    },
    {
      tr: ["İnsülin duyarlılığı", "Kan şekeri dengesi", "Enerji artışı", "Sürdürülebilir kilo yönetimi"],
      en: ["Insulin sensitivity", "Blood sugar balance", "Increased energy", "Sustainable weight management"],
      de: ["Insulinsensitivität", "Blutzuckerbalance"],
      fr: ["Sensibilité à l'insuline", "Équilibre glycémique"],
      ru: ["Чувствительность к инсулину", "Баланс сахара"],
      ar: ["حساسية الأنسولين", "توازن السكر"],
    },
    {
      tr: [{ q: "İnsülin direnci tersine döner mi?", a: "Yaşam tarzı değişiklikleriyle önemli ölçüde iyileştirilebilir." }],
      en: [{ q: "Can insulin resistance be reversed?", a: "It can be significantly improved with lifestyle changes." }],
      de: [{ q: "Ist Insulinresistenz reversibel?", a: "Ja, mit Lebensstiländerungen." }],
      fr: [{ q: "La résistance à l'insuline est-elle réversible ?", a: "Oui, avec des changements de mode de vie." }],
      ru: [{ q: "Можно ли обратить инсулинорезистентность?", a: "Да, при изменении образа жизни." }],
      ar: [{ q: "هل يمكن عكس مقاومة الأنسولين؟", a: "نعم، مع تغيير نمط الحياة." }],
    }
  ),
  svc(
    "gebelikte-beslenme",
    {
      tr: "Gebelikte Beslenme",
      en: "Pregnancy Nutrition",
      de: "Schwangerschaftsernährung",
      fr: "Nutrition pendant la grossesse",
      ru: "Питание при беременности",
      ar: "تغذية الحمل",
    },
    {
      tr: "Anne ve bebek sağlığını önceleyen, trimester bazlı kişiselleştirilmiş gebelik beslenme danışmanlığı.",
      en: "Trimester-based personalized pregnancy nutrition prioritizing mother and baby health.",
      de: "Personalisierte Schwangerschaftsernährung.",
      fr: "Nutrition personnalisée pendant la grossesse.",
      ru: "Персонализированное питание при беременности.",
      ar: "تغذية حمل مخصصة.",
    },
    {
      tr: "Gebelikte besin ihtiyaçları trimesterlere göre değişir. Folat, demir, omega-3 ve protein dengesi kritik öneme sahiptir.",
      en: "Nutritional needs change by trimester. Folate, iron, omega-3 and protein balance are critically important.",
      de: "Nährstoffbedarf ändert sich je nach Trimester.",
      fr: "Les besoins nutritionnels varient selon le trimestre.",
      ru: "Потребности в питании меняются по триместрам.",
      ar: "احتياجات التغذية تتغير حسب الثلث.",
    },
    {
      tr: ["Bulantı", "Aşerme", "Gestasyonel diyabet riski", "Yetersiz kilo alımı"],
      en: ["Nausea", "Food aversions/cravings", "Gestational diabetes risk", "Inadequate weight gain"],
      de: ["Übelkeit", "Heißhunger"],
      fr: ["Nausées", "Fringales"],
      ru: ["Тошнота", "Тяга к еде"],
      ar: ["غثيان", "اشتهاء"],
    },
    {
      tr: ["Sağlıklı kilo alımı", "Bebek gelişimi desteği", "Enerji dengesi", "Doğum sonrası toparlanma"],
      en: ["Healthy weight gain", "Fetal development support", "Energy balance", "Postpartum recovery"],
      de: ["Gesunde Gewichtszunahme", "Fötale Entwicklung"],
      fr: ["Prise de poids saine", "Développement fœtal"],
      ru: ["Здоровый набор веса", "Развитие плода"],
      ar: ["زيادة وزن صحية", "نمو الجنين"],
    },
    {
      tr: [{ q: "Gebelikte diyet yapılır mı?", a: "Kısıtlayıcı diyet değil; anne ve bebek için optimal beslenme planlanır." }],
      en: [{ q: "Should you diet during pregnancy?", a: "Not restrictive dieting; optimal nutrition is planned for mother and baby." }],
      de: [{ q: "Diät in der Schwangerschaft?", a: "Keine restriktive Diät — optimale Ernährung." }],
      fr: [{ q: "Régime pendant la grossesse ?", a: "Pas de régime restrictif — nutrition optimale." }],
      ru: [{ q: "Диета при беременности?", a: "Не ограничительная — оптимальное питание." }],
      ar: [{ q: "حمية أثناء الحمل؟", a: "ليست تقييدية — تغذية مثالية." }],
    }
  ),
];

// Remaining services use template from slug map
const templateServices: Array<{
  slug: ServiceSlug;
  name: L;
  symptoms: LList;
}> = [
  {
    slug: "diyabet",
    name: { tr: "Diyabet", en: "Diabetes", de: "Diabetes", fr: "Diabète", ru: "Диабет", ar: "السكري" },
    symptoms: {
      tr: ["Yüksek kan şekeri", "Açlık hissi", "Yorgunluk", "Kilo değişimleri"],
      en: ["High blood sugar", "Hunger", "Fatigue", "Weight changes"],
      de: ["Hoher Blutzucker", "Müdigkeit"],
      fr: ["Glycémie élevée", "Fatigue"],
      ru: ["Высокий сахар", "Усталость"],
      ar: ["سكر مرتفع", "إرهاق"],
    },
  },
  {
    slug: "obezite",
    name: { tr: "Obezite", en: "Obesity", de: "Adipositas", fr: "Obésité", ru: "Ожирение", ar: "السمنة" },
    symptoms: {
      tr: ["Yüksek BMI", "Metabolik sendrom", "Eklem ağrıları", "Uyku apnesi riski"],
      en: ["High BMI", "Metabolic syndrome", "Joint pain", "Sleep apnea risk"],
      de: ["Hoher BMI", "Metabolisches Syndrom"],
      fr: ["IMC élevé", "Syndrome métabolique"],
      ru: ["Высокий ИМТ", "Метаболический синдром"],
      ar: ["مؤشر كتلة مرتفع", "متلازمة أيضية"],
    },
  },
  {
    slug: "fonksiyonel-tip",
    name: {
      tr: "Fonksiyonel Tıp",
      en: "Functional Medicine",
      de: "Funktionelle Medizin",
      fr: "Médecine fonctionnelle",
      ru: "Функциональная медицина",
      ar: "الطب الوظيفي",
    },
    symptoms: {
      tr: ["Kronik yorgunluk", "Sindirim sorunları", "Hormon dengesizliği", "Bağışıklık zayıflığı"],
      en: ["Chronic fatigue", "Digestive issues", "Hormonal imbalance", "Weakened immunity"],
      de: ["Chronische Müdigkeit", "Verdauungsprobleme"],
      fr: ["Fatigue chronique", "Problèmes digestifs"],
      ru: ["Хроническая усталость", "Проблемы с ЖКТ"],
      ar: ["إرهاق مزمن", "مشاكل هضمية"],
    },
  },
  {
    slug: "kurumsal-beslenme",
    name: {
      tr: "Kurumsal Beslenme",
      en: "Corporate Nutrition",
      de: "Betriebliche Ernährung",
      fr: "Nutrition d'entreprise",
      ru: "Корпоративное питание",
      ar: "التغذية المؤسسية",
    },
    symptoms: {
      tr: ["Düşük verimlilik", "Stres yeme", "Ofis kilo alımı", "Enerji düşüklüğü"],
      en: ["Low productivity", "Stress eating", "Office weight gain", "Low energy"],
      de: ["Stress-Essen", "Gewichtszunahme im Büro"],
      fr: ["Alimentation de stress", "Prise de poids au bureau"],
      ru: ["Стрессовое питание", "Набор веса в офисе"],
      ar: ["أكل بسبب التوتر", "زيادة وزن المكتب"],
    },
  },
  {
    slug: "sporcu-beslenmesi",
    name: {
      tr: "Sporcu Beslenmesi",
      en: "Sports Nutrition",
      de: "Sporternährung",
      fr: "Nutrition sportive",
      ru: "Спортивное питание",
      ar: "تغذية الرياضيين",
    },
    symptoms: {
      tr: ["Performans düşüklüğü", "Kas kaybı", "Yetersiz toparlanma", "Dehidrasyon"],
      en: ["Performance decline", "Muscle loss", "Poor recovery", "Dehydration"],
      de: ["Leistungsabfall", "Muskelverlust"],
      fr: ["Baisse de performance", "Perte musculaire"],
      ru: ["Снижение результатов", "Потеря мышц"],
      ar: ["انخفاض الأداء", "فقدان العضلات"],
    },
  },
  {
    slug: "cocuk-beslenmesi",
    name: {
      tr: "Çocuk Beslenmesi",
      en: "Children Nutrition",
      de: "Kinderernährung",
      fr: "Nutrition infantile",
      ru: "Детское питание",
      ar: "تغذية الأطفال",
    },
    symptoms: {
      tr: ["İştahsızlık", "Büyüme geriliği", "Seçici yeme", "Kilo fazlalığı"],
      en: ["Loss of appetite", "Growth delay", "Picky eating", "Excess weight"],
      de: ["Appetitlosigkeit", "Wählerisches Essen"],
      fr: ["Perte d'appétit", "Alimentation sélective"],
      ru: ["Отсутствие аппетита", "Избирательность в еде"],
      ar: ["فقدان الشهية", "انتقائية في الأكل"],
    },
  },
  {
    slug: "hormon-dengesi",
    name: {
      tr: "Hormon Dengesi",
      en: "Hormonal Balance",
      de: "Hormonbalance",
      fr: "Équilibre hormonal",
      ru: "Гормональный баланс",
      ar: "التوازن الهرموني",
    },
    symptoms: {
      tr: ["Tiroid sorunları", "PMS", "Ruh hali değişimleri", "Kilo dalgalanmaları"],
      en: ["Thyroid issues", "PMS", "Mood swings", "Weight fluctuations"],
      de: ["Schilddrüsenprobleme", "Stimmungsschwankungen"],
      fr: ["Problèmes thyroïdiens", "Sautes d'humeur"],
      ru: ["Проблемы щитовидной железы", "Перепады настроения"],
      ar: ["مشاكل الغدة الدرقية", "تقلبات المزاج"],
    },
  },
  {
    slug: "menopoz",
    name: { tr: "Menopoz", en: "Menopause", de: "Menopause", fr: "Ménopause", ru: "Менопауза", ar: "سن اليأس" },
    symptoms: {
      tr: ["Sıcak basmaları", "Kilo artışı", "Uyku bozukluğu", "Kemik yoğunluğu kaybı"],
      en: ["Hot flashes", "Weight gain", "Sleep disruption", "Bone density loss"],
      de: ["Hitzewallungen", "Gewichtszunahme"],
      fr: ["Bouffées de chaleur", "Prise de poids"],
      ru: ["Приливы", "Набор веса"],
      ar: ["هبات ساخنة", "زيادة الوزن"],
    },
  },
];

for (const t of templateServices) {
  servicesContent.push(
    svc(
      t.slug,
      t.name,
      {
        tr: `${t.name.tr} alanında kişiselleştirilmiş, bilim temelli beslenme danışmanlığı.`,
        en: `Personalized, science-based nutrition counseling in ${t.name.en}.`,
        de: `Personalisierte Ernährungsberatung: ${t.name.de}.`,
        fr: `Conseil nutritionnel personnalisé : ${t.name.fr}.`,
        ru: `Персонализированное консультирование: ${t.name.ru}.`,
        ar: `استشارة تغذية مخصصة: ${t.name.ar}.`,
      },
      {
        tr: "Bütüncül değerlendirme ile metabolik, hormonal ve davranışsal faktörler birlikte ele alınır.",
        en: "Metabolic, hormonal and behavioral factors are addressed together through holistic assessment.",
        de: "Ganzheitliche Bewertung von Stoffwechsel und Verhalten.",
        fr: "Évaluation holistique des facteurs métaboliques et comportementaux.",
        ru: "Холистическая оценка метаболических и поведенческих факторов.",
        ar: "تقييم شامل للعوامل الأيضية والسلوكية.",
      },
      t.symptoms,
      {
        tr: ["Semptom yönetimi", "Metabolik iyileşme", "Enerji artışı", "Sürdürülebilir alışkanlıklar"],
        en: ["Symptom management", "Metabolic improvement", "Increased energy", "Sustainable habits"],
        de: ["Symptommanagement", "Metabolische Verbesserung"],
        fr: ["Gestion des symptômes", "Amélioration métabolique"],
        ru: ["Управление симптомами", "Метаболическое улучшение"],
        ar: ["إدارة الأعراض", "تحسين أيضي"],
      },
      {
        tr: [{ q: "İlk görüşmede ne yapılır?", a: "Detaylı anamnez, hedef belirleme ve gerekirse tahlil yönlendirmesi yapılır." }],
        en: [{ q: "What happens in the first visit?", a: "Detailed assessment, goal setting and lab referrals if needed." }],
        de: [{ q: "Was passiert beim ersten Termin?", a: "Anamnese und Zielsetzung." }],
        fr: [{ q: "Que se passe-t-il à la première visite ?", a: "Anamnèse et objectifs." }],
        ru: [{ q: "Что на первом приёме?", a: "Анамнез и постановка целей." }],
        ar: [{ q: "ماذا في الزيارة الأولى؟", a: "تقييم وتحديد الأهداف." }],
      }
    )
  );
}

export function getService(slug: string) {
  return servicesContent.find((s) => s.slug === slug);
}

export function getLocalizedService(service: ServiceContent, locale: string) {
  const loc = ["tr", "en", "de", "fr", "ru", "ar"].includes(locale) ? locale : "tr";
  return {
    ...service,
    name: service.name[loc] || service.name.tr,
    intro: service.intro[loc] || service.intro.tr,
    science: service.science[loc] || service.science.tr,
    symptoms: service.symptoms[loc] || service.symptoms.tr,
    treatmentSteps: service.treatmentSteps[loc] || service.treatmentSteps.tr,
    timeline: service.timeline[loc] || service.timeline.tr,
    results: service.results[loc] || service.results.tr,
    faq: service.faq[loc] || service.faq.tr,
  };
}
