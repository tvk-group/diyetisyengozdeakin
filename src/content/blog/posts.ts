export interface BlogPost {
  slug: string;
  category: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  thumbnail?: string;
  title: Record<string, string>;
  excerpt: Record<string, string>;
  content: Record<string, string>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "kilo-vermeyi-hizlandiran-5-basit-kural",
    category: "nutrition",
    publishedAt: "2025-04-10",
    readingTime: 6,
    thumbnail: "/images/gozde/reel-5-basit-kural.jpg",
    tags: ["kiloverme", "sağlıklıbeslenme", "diyetisyenönerisi", "gözdeakın"],
    title: {
      tr: "Kilo Vermeyi Hızlandıran 5 Basit Kural",
      en: "5 Simple Rules to Accelerate Weight Loss",
      de: "5 einfache Regeln zur Beschleunigung des Gewichtsverlusts",
      fr: "5 règles simples pour accélérer la perte de poids",
      ru: "5 простых правил для ускорения похудения",
      ar: "5 قواعد بسيطة لتسريع فقدان الوزن",
    },
    excerpt: {
      tr: "Kilo verme sürecini hızlandırmak için günlük hayata kolayca uygulanabilen 5 bilim temelli kural.",
      en: "5 science-based rules easily applied in daily life to accelerate the weight loss process.",
      de: "5 wissenschaftlich fundierte Regeln, die leicht im Alltag anwendbar sind.",
      fr: "5 règles fondées sur la science, faciles à appliquer au quotidien.",
      ru: "5 научно обоснованных правил, легко применимых в повседневной жизни.",
      ar: "5 قواعد علمية يسهل تطبيقها يومياً لتسريع فقدان الوزن.",
    },
    content: {
      tr: `Kilo verme bir maraton değil, sürdürülebilir alışkanlıkların toplamıdır. İşte metabolizmayı destekleyen 5 basit kural:

**1. Her Öğünde Protein**
Protein, tokluk hissini uzatır ve kas kütlesini korur. Yumurta, yoğurt, balık, baklagil veya kaliteli et her öğüne eklenebilir.

**2. Yeterli Su Tüketimi**
Dehidrasyon metabolizmayı yavaşlatır. Günde en az 2–2,5 litre su hedefleyin. Su ihtiyacı kilo, aktivite ve mevsime göre değişir.

**3. Her Öğünde Sebze / Salata**
Lif, kan şekerini dengeler ve sindirimi destekler. Tabakların yarısını sebze ile doldurmak basit ama güçlü bir stratejidir.

**4. Günlük Hareket**
Sadece spor salonu değil; yürüyüş, merdiven, günlük adım sayısı da önemlidir. Haftada en az 150 dakika orta yoğunlukta aktivite hedeflenmelidir.

**5. Kaliteli Uyku**
Uyku eksikliği açlık hormonlarını artırır ve tatlı isteğini tetikler. 7–8 saat kaliteli uyku, kilo yönetiminin görünmez kahramanıdır.

**Sonuç**
Bu 5 kural birlikte uygulandığında metabolizma desteklenir, enerji artar ve kilo verme süreci daha sürdürülebilir hale gelir.`,
      en: `Weight loss is not a sprint but the sum of sustainable habits. Here are 5 simple rules that support metabolism:

**1. Protein at Every Meal**
Protein extends satiety and preserves muscle mass. Eggs, yogurt, fish, legumes, or quality meat can be added to each meal.

**2. Adequate Water Intake**
Dehydration slows metabolism. Aim for at least 2–2.5 liters of water daily.

**3. Vegetables / Salad at Every Meal**
Fiber balances blood sugar and supports digestion. Filling half your plate with vegetables is a simple but powerful strategy.

**4. Daily Movement**
Not just the gym — walking, stairs, and daily steps matter. Aim for at least 150 minutes of moderate activity per week.

**5. Quality Sleep**
Sleep deprivation increases hunger hormones and triggers sweet cravings. 7–8 hours of quality sleep is the invisible hero of weight management.

**Conclusion**
When applied together, these 5 rules support metabolism, increase energy, and make weight loss more sustainable.`,
      de: `5 einfache Regeln: Protein, Wasser, Gemüse, Bewegung und Schlaf — zusammen unterstützen sie den Stoffwechsel nachhaltig.`,
      fr: `5 règles simples : protéines, eau, légumes, mouvement et sommeil — ensemble, elles soutiennent durablement le métabolisme.`,
      ru: `5 простых правил: белок, вода, овощи, движение и сон — вместе они устойчиво поддерживают метаболизм.`,
      ar: `5 قواعد بسيطة: البروتين، الماء، الخضار، الحركة والنوم — معاً تدعم الأيض بشكل مستدام.`,
    },
  },
  {
    slug: "kilo-verememenin-gizli-nedeni-insulin-direnci",
    category: "insulinResistance",
    publishedAt: "2025-04-01",
    readingTime: 8,
    thumbnail: "/images/gozde/reel-insulin-direnci.jpg",
    tags: ["insülin direnci", "kiloverme", "metabolizma", "gözdeakın"],
    title: {
      tr: "Kilo Verememenin Gizli Nedeni: İnsülin Direnci",
      en: "The Hidden Reason You Can't Lose Weight: Insulin Resistance",
      de: "Der verborgene Grund für Gewichtsprobleme: Insulinresistenz",
      fr: "La raison cachée de l'échec au régime : la résistance à l'insuline",
      ru: "Скрытая причина невозможности похудеть: инсулинорезистентность",
      ar: "السبب الخفي لعدم فقدان الوزن: مقاومة الأنسولين",
    },
    excerpt: {
      tr: "Tartıda değişim olmamasının arkasında yatan metabolik nedenlerden biri insülin direnci olabilir. Kanıta dayalı yaklaşımla metabolik iyileşme mümkündür.",
      en: "One metabolic reason behind a stalled scale can be insulin resistance. Metabolic improvement is possible with an evidence-based approach.",
      de: "Ein metabolischer Grund für stagnierende Gewichtsabnahme kann Insulinresistenz sein.",
      fr: "Une raison métabolique derrière une balance qui stagne peut être la résistance à l'insuline.",
      ru: "Одной из метаболических причин застоя веса может быть инсулинорезистентность.",
      ar: "قد تكون مقاومة الأنسولين أحد الأسباب الأيضية وراء ثبات الوزن.",
    },
    content: {
      tr: `Kilo verme sürecinde diyete uyum sağlanmasına rağmen tartının hareket etmemesi birçok danışanda motivasyonu düşürür. Oysa sorun her zaman "irade eksikliği" değildir.

**İnsülin Direnci Nedir?**
İnsülin direnci, vücudun hücrelerinin insüline yeterince duyarlı olmaması durumudur. Bu durumda kan şekeri dengelenmek için daha fazla insülin salgılanır ve metabolizma yağ depolama yönünde çalışmaya devam eder.

**Belirtiler**
- Özellikle karın bölgesinde kilo artışı
- Tatlı ve karbonhidrat isteği
- Yemek sonrası uyku hali
- PCOS, diyabet veya metabolik sendrom öyküsü

**Neden Kilo Vermeyi Zorlaştırır?**
İnsülin yüksek kaldığında vücut yağ yakmak yerine yağ depolamaya yönelir. Bu nedenle sadece kalori kısıtlaması yeterli olmayabilir.

**Tedavi Yaklaşımı**
- Kan tahlili ile biyokimyasal değerlendirme
- Kişiselleştirilmiş beslenme planı
- Protein ve lif dengesi
- Davranış değişikliği ve psikolojik destek
- Düzenli takip

**Sonuç**
İnsülin direnci yönetildiğinde metabolik iyileşme, sürdürülebilir kilo yönetimi ve daha iyi enerji düzeyi mümkündür.`,
      en: `During weight loss, when the scale doesn't move despite diet compliance, motivation drops for many clients. Yet the problem isn't always "lack of willpower."

**What is Insulin Resistance?**
Insulin resistance occurs when the body's cells don't respond adequately to insulin. Blood sugar is regulated by releasing more insulin, and metabolism continues storing fat.

**Symptoms**
- Weight gain especially around the abdomen
- Cravings for sweets and carbohydrates
- Post-meal fatigue
- History of PCOS, diabetes, or metabolic syndrome

**Why It Makes Weight Loss Hard**
When insulin stays elevated, the body stores fat instead of burning it. Calorie restriction alone may not be enough.

**Treatment Approach**
- Biochemical evaluation with blood tests
- Personalized nutrition plan
- Protein and fiber balance
- Behavior change and psychological support
- Regular follow-up

**Conclusion**
When insulin resistance is managed, metabolic improvement, sustainable weight management, and better energy levels are possible.`,
      de: `Bei Insulinresistenz speichert der Körper Fett statt es zu verbrennen. Mit evidenzbasiertem Ansatz ist metabolische Verbesserung möglich.`,
      fr: `Avec la résistance à l'insuline, le corps stocke les graisses au lieu de les brûler. Une amélioration métabolique est possible avec une approche fondée sur des preuves.`,
      ru: `При инсулинорезистентности организм накапливает жир вместо его сжигания. Метаболическое улучшение возможно при доказательном подходе.`,
      ar: `مع مقاومة الأنسولين، يخزن الجسم الدهون بدلاً من حرقها. التحسين الأيضي ممكن بنهج قائم على الأدلة.`,
    },
  },
  {
    slug: "glutensiz-beslenme-gercekten-gerekli-mi",
    category: "nutrition",
    publishedAt: "2025-03-15",
    readingTime: 8,
    tags: ["glütensizdiyet", "sağlıklıbeslenme", "diyetisyenönerisi", "gözdeakın"],
    title: {
      tr: "Glütensiz Beslenme Gerçekten Gerekli mi?",
      en: "Is a Gluten-Free Diet Really Necessary?",
      de: "Ist eine glutenfreie Ernährung wirklich notwendig?",
      fr: "Une alimentation sans gluten est-elle vraiment nécessaire ?",
      ru: "Действительно ли нужно безглютеновое питание?",
      ar: "هل التغذية الخالية من الغلوتين ضرورية حقاً؟",
    },
    excerpt: {
      tr: "Sağlıklı mı yoksa gereksiz bir moda mı? Glütensiz beslenme tıbbi bir gereklilik olmadıkça herkes için uygun değildir.",
      en: "Healthy or just an unnecessary trend? A gluten-free diet is not suitable for everyone unless medically necessary.",
      de: "Gesund oder nur ein unnötiger Trend? Eine glutenfreie Ernährung ist nicht für jeden geeignet.",
      fr: "Sain ou juste une mode inutile ? L'alimentation sans gluten n'est pas adaptée à tous.",
      ru: "Здорово или просто ненужная мода? Безглютеновая диета подходит не всем.",
      ar: "صحية أم مجرد موضة غير ضرورية؟ التغذية الخالية من الغلوتين ليست مناسبة للجميع.",
    },
    content: {
      tr: `Son yıllarda glütensiz beslenme neredeyse sağlıklı yaşamın sembolü haline geldi. Ancak herkes için gerekli mi? Cevap: Hayır.

**Glüten Nedir?**
Glüten; buğday, arpa ve çavdarda bulunan bir protein türüdür. Hamura esneklik kazandırır. Ancak bazı kişilerde bu protein bağışıklık sistemini uyararak çölyak hastalığı veya glüten intoleransı belirtilerine yol açabilir.

**Kimler Glütensiz Beslenmeli?**
- Çölyak hastaları
- Glüten intoleransı tanısı konan bireyler
- Otoimmün hastalığı olanlar (bazı durumlarda)

**Moda Diyet Tehlikesi**
Tıbbi gerekçe olmadan glütensiz beslenmek lif, B vitamini ve mineral eksikliklerine, sindirim problemlerine ve gereksiz karbonhidrat korkusuna yol açabilir.

**Sonuç**
Glütensiz beslenme bir "trend" değil, belirli durumlarda tıbbi bir zorunluluktur. Sağlıklı bireyler için önemli olan, doğal, dengeli ve işlem görmemiş gıdalarla beslenmektir.`,
      en: `In recent years, gluten-free eating has become almost a symbol of healthy living. But is it necessary for everyone? The answer: No.

**What is Gluten?**
Gluten is a protein found in wheat, barley, and rye. It gives dough elasticity. However, in some people, this protein can trigger the immune system, causing celiac disease or gluten intolerance symptoms.

**Who Should Eat Gluten-Free?**
- Celiac patients
- Individuals diagnosed with gluten intolerance
- Those with autoimmune diseases (in some cases)

**The Fashion Diet Danger**
Eating gluten-free without medical reason can lead to fiber, B vitamin and mineral deficiencies, digestive problems, and unnecessary carbohydrate fear.

**Conclusion**
Gluten-free eating is not a "trend" but a medical necessity in certain situations. For healthy individuals, what matters is eating natural, balanced, and unprocessed foods.`,
      de: `In den letzten Jahren ist glutenfreie Ernährung fast zum Symbol eines gesunden Lebens geworden. Aber ist sie für jeden notwendig? Die Antwort: Nein. Glutenfreie Ernährung ist keine Mode, sondern in bestimmten Fällen eine medizinische Notwendigkeit.`,
      fr: `Ces dernières années, l'alimentation sans gluten est devenue presque un symbole de vie saine. Mais est-elle nécessaire pour tous ? La réponse : Non. L'alimentation sans gluten n'est pas une mode, mais une nécessité médicale dans certains cas.`,
      ru: `В последние годы безглютеновое питание стало почти символом здорового образа жизни. Но необходимо ли оно всем? Ответ: Нет. Безглютеновое питание — не тренд, а медицинская необходимость в определённых случаях.`,
      ar: `في السنوات الأخيرة، أصبحت التغذية الخالية من الغلوتين رمزاً تقريباً للحياة الصحية. لكن هل هي ضرورية للجميع؟ الجواب: لا. التغذية الخالية من الغلوتين ليست موضة، بل ضرورة طبية في حالات معينة.`,
    },
  },
  {
    slug: "bagirsak-beyin-ekseni",
    category: "psychology",
    publishedAt: "2025-03-10",
    readingTime: 7,
    tags: ["bağırsakbeyinekseni", "mikrobiyota", "beslenmepsikolojisi", "gözdeakın"],
    title: {
      tr: "Bağırsak – Beyin Ekseni: Duygular Sindirimimizi Nasıl Etkiliyor?",
      en: "Gut-Brain Axis: How Emotions Affect Our Digestion",
      de: "Darm-Hirn-Achse: Wie Emotionen unsere Verdauung beeinflussen",
      fr: "Axe intestin-cerveau : Comment les émotions affectent notre digestion",
      ru: "Ось кишечник-мозг: Как эмоции влияют на пищеварение",
      ar: "محور الأمعاء والدماغ: كيف تؤثر المشاعر على هضمنا",
    },
    excerpt: {
      tr: "Mutluluk hormonunun adresi: Bağırsaklar. Beyin ve bağırsak arasında iki yönlü güçlü bir iletişim hattı vardır.",
      en: "The address of the happiness hormone: The gut. There is a powerful two-way communication line between the brain and gut.",
      de: "Die Adresse des Glückshormons: Der Darm. Es gibt eine starke bidirektionale Kommunikation zwischen Gehirn und Darm.",
      fr: "L'adresse de l'hormone du bonheur : L'intestin. Il existe une communication bidirectionnelle puissante entre le cerveau et l'intestin.",
      ru: "Адрес гормона счастья: Кишечник. Между мозгом и кишечником существует мощная двусторонняя связь.",
      ar: "عنوان هرمون السعادة: الأمعاء. يوجد خط اتصال قوي ثنائي الاتجاه بين الدماغ والأمعاء.",
    },
    content: {
      tr: `Gergin olduğumuzda karnımıza ağrılar girer, stresliyken iştahımız azalır veya artar. Tüm bunlar tesadüf değil.

**Bağırsak – Beyin Ekseni Nedir?**
Bağırsaklarımızda milyonlarca sinir hücresi bulunur. Bu yapı, "ikinci beyin" olarak adlandırılır. Bağırsak bakterileri, serotonin üretiminin yaklaşık %90'ını etkiler.

**Stresin Sindirim Üzerindeki Etkisi**
Stres, bağırsak hareketlerini yavaşlatır veya hızlandırır. Kortizol hormonu mikrobiyotayı olumsuz etkiler.

**Bağırsak Dostu Ruh Hali İçin Öneriler**
- Probiyotik ve liften zengin beslen
- Günlük su tüketimini artır
- Stres yönetimi ve nefes egzersizlerine zaman ayır

**Sonuç**
Bağırsaklarını iyileştirmek, sadece sindirimi değil, ruh halini de dengeler. Sağlıklı bir mikrobiyota = dengeli bir zihin.`,
      en: `When we're tense, we get stomach pains; when stressed, our appetite decreases or increases. This is no coincidence.

**What is the Gut-Brain Axis?**
Our gut contains millions of nerve cells, called the "second brain." Gut bacteria affect approximately 90% of serotonin production.

**Stress Effects on Digestion**
Stress slows or speeds up bowel movements. Cortisol negatively affects the microbiota.

**Recommendations for Gut-Friendly Mood**
- Eat probiotic and fiber-rich foods
- Increase daily water intake
- Make time for stress management and breathing exercises

**Conclusion**
Healing your gut balances not only digestion but also mood. Healthy microbiota = balanced mind.`,
      de: `Bei Anspannung bekommen wir Magenschmerzen. Der Darm enthält Millionen von Nervenzellen — das "zweite Gehirn". Gesunde Mikrobiota = ausgeglichener Geist.`,
      fr: `Quand nous sommes tendus, nous avons des douleurs d'estomac. L'intestin contient des millions de cellules nerveuses — le "deuxième cerveau". Microbiote sain = esprit équilibré.`,
      ru: `Когда мы напряжены, у нас болит живот. Кишечник содержит миллионы нервных клеток — "второй мозг". Здоровая микробиота = сбалансированный разум.`,
      ar: `عندما نكون متوترين، نشعر بآلام في المعدة. الأمعاء تحتوي على ملايين الخلايا العصبية — "الدماغ الثاني". ميكروبيوم صحي = عقل متوازن.`,
    },
  },
  {
    slug: "kilo-vermede-plato",
    category: "nutrition",
    publishedAt: "2025-03-05",
    readingTime: 6,
    tags: ["kiloverme", "platoevresi", "metabolizma", "diyetpsikolojisi", "gözdeakın"],
    title: {
      tr: "Kilo Vermede Platonun Nedeni ve Çözümü",
      en: "Weight Loss Plateau: Causes and Solutions",
      de: "Gewichtsverlust-Plateau: Ursachen und Lösungen",
      fr: "Plateau de perte de poids : causes et solutions",
      ru: "Плато при похудении: причины и решения",
      ar: "مسببات ومسببات ثبات الوزن والحلول",
    },
    excerpt: {
      tr: "Tartı sabitlendiğinde pes etme! Plato dönemi, doğal bir biyolojik savunma mekanizmasıdır.",
      en: "Don't give up when the scale stalls! The plateau period is a natural biological defense mechanism.",
      de: "Geben Sie nicht auf, wenn die Waage stagniert! Die Plateau-Phase ist ein natürlicher biologischer Schutzmechanismus.",
      fr: "N'abandonnez pas quand la balance stagne ! La période de plateau est un mécanisme de défense biologique naturel.",
      ru: "Не сдавайтесь, когда весы застыли! Период плато — естественный биологический защитный механизм.",
      ar: "لا تستسلم عندما يتوقف الميزان! فترة الثبات آلية دفاع بيولوجية طبيعية.",
    },
    content: {
      tr: `Kilo verme sürecinde başlangıçta hızlı sonuçlar alınırken, bir noktada tartı sabitlenir. Bu "plato dönemi" doğal bir biyolojik savunma mekanizmasıdır.

**Plato Neden Oluşur?**
- Metabolik adaptasyon
- Kas kaybı
- Tekdüze beslenme
- Yetersiz su ve uyku

**Plato Nasıl Aşılır?**
- Kalori miktarını değil, besin kalitesini değiştir
- Günlük adım sayısını artır
- Haftada 1-2 kez "refeed day" ekle
- Protein alımını dengede tut
- Psikolojik olarak süreci sabırla kabullen

**Sonuç**
Plato dönemi bir son değil, bedenin yeniden denge kurma evresidir.`,
      en: `During weight loss, quick results come initially, but at some point the scale stalls. This "plateau period" is a natural biological defense mechanism.

**Why Does Plateau Occur?**
- Metabolic adaptation
- Muscle loss
- Monotonous nutrition
- Insufficient water and sleep

**How to Overcome Plateau?**
- Change food quality, not calorie amount
- Increase daily steps
- Add 1-2 "refeed days" per week
- Keep protein intake balanced
- Accept the process with patience

**Conclusion**
The plateau period is not an end, but the body's rebalancing phase.`,
      de: `Die Plateau-Phase ist kein Ende, sondern die Neuausgleichsphase des Körpers.`,
      fr: `La période de plateau n'est pas une fin, mais la phase de rééquilibrage du corps.`,
      ru: `Период плато — не конец, а фаза перебалансировки организма.`,
      ar: `فترة الثبات ليست نهاية، بل مرحلة إعادة توازن الجسم.`,
    },
  },
  {
    slug: "duygusal-aclik-fiziksel-aclik",
    category: "psychology",
    publishedAt: "2025-02-28",
    readingTime: 5,
    tags: ["duygusalaçlık", "fizikselaçlık", "mindfuleating", "beslenmepsikolojisi", "gözdeakın"],
    title: {
      tr: "Duygusal Açlık mı, Fiziksel Açlık mı?",
      en: "Emotional Hunger or Physical Hunger?",
      de: "Emotionaler oder physischer Hunger?",
      fr: "Faim émotionnelle ou faim physique ?",
      ru: "Эмоциональный или физический голод?",
      ar: "جوع عاطفي أم جوع جسدي؟",
    },
    excerpt: {
      tr: "Gerçek açlık midede değil, bazen zihinde başlar. Duygusal açlık ile fiziksel açlığı ayırt etmek en temel adımdır.",
      en: "Real hunger sometimes starts in the mind, not the stomach. Distinguishing emotional from physical hunger is the fundamental step.",
      de: "Echter Hunger beginnt manchmal im Kopf, nicht im Magen.",
      fr: "La vraie faim commence parfois dans l'esprit, pas dans l'estomac.",
      ru: "Настоящий голод иногда начинается в голове, а не в желудке.",
      ar: "الجوع الحقيقي يبدأ أحياناً في العقل، وليس في المعدة.",
    },
    content: {
      tr: `Birçoğumuz "aç değilim ama canım bir şeyler istiyor" dediğimiz anları yaşarız.

**Fiziksel Açlık Nasıl Anlaşılır?**
- Yavaş yavaş ortaya çıkar
- Her tür yiyeceğe açıksındır
- Doyduğunda tatmin olursun
- Yemek sonrası suçluluk hissetmezsin

**Duygusal Açlık Belirtileri**
- Aniden gelir
- Özellikle tatlı veya abur cubur isteği
- Hızlı yersin ve pişmanlık hissedersin

**Nasıl Farkına Varabilirsin?**
"Gerçekten aç mıyım, yoksa bir duygumu bastırmak mı istiyorum?" sorusunu kendine sor.

**Sonuç**
Açlık sadece fizyolojik bir ihtiyaç değil, çoğu zaman duygusal bir sinyaldir.`,
      en: `Many of us experience moments when we say "I'm not hungry but I want something."

**How to Recognize Physical Hunger?**
- Develops gradually
- You're open to any food
- You feel satisfied when full
- No guilt after eating

**Emotional Hunger Signs**
- Comes suddenly
- Craving sweets or junk food
- You eat fast and feel regret

**How to Become Aware?**
Ask yourself: "Am I really hungry, or do I want to suppress an emotion?"

**Conclusion**
Hunger is not just a physiological need, but often an emotional signal.`,
      de: `Hunger ist nicht nur ein physiologisches Bedürfnis, sondern oft ein emotionales Signal.`,
      fr: `La faim n'est pas seulement un besoin physiologique, mais souvent un signal émotionnel.`,
      ru: `Голод — это не только физиологическая потребность, но часто эмоциональный сигнал.`,
      ar: `الجوع ليس مجرد حاجة فسيولوجية، بل غالباً إشارة عاطفية.`,
    },
  },
  {
    slug: "mindful-eating",
    category: "psychology",
    publishedAt: "2025-02-20",
    readingTime: 5,
    tags: ["mindfuleating", "farkındalık", "beslenmepsikolojisi", "duygusalyeme", "gözdeakın"],
    title: {
      tr: "Mindful Eating Nedir? Farkındalıkla Yemek Yemek",
      en: "What is Mindful Eating?",
      de: "Was ist achtsames Essen?",
      fr: "Qu'est-ce que l'alimentation consciente ?",
      ru: "Что такое осознанное питание?",
      ar: "ما هو الأكل الواعي؟",
    },
    excerpt: {
      tr: "Hızlı dünyada, yavaş yemenin şifası. Mindful Eating, otomatik yeme alışkanlıklarını dönüştürür.",
      en: "In a fast world, the healing power of slow eating. Mindful Eating transforms automatic eating habits.",
      de: "In einer schnellen Welt die heilende Kraft des langsamen Essens.",
      fr: "Dans un monde rapide, le pouvoir guérisseur de manger lentement.",
      ru: "В быстром мире целительная сила медленного питания.",
      ar: "في عالم سريع، قوة الأكل البطيء الشافية.",
    },
    content: {
      tr: `Modern yaşamda yemek yemek çoğu zaman otomatik bir davranış haline geldi.

**Mindful Eating Ne Demektir?**
Yeme eylemini acele etmeden, anda kalarak, her lokmanın tadını hissederek yapmaktır. Amaç kilo vermek değil, beden sinyallerini yeniden duymayı öğrenmektir.

**Nasıl Uygulanır?**
- Yemeğe başlamadan önce derin bir nefes al
- Her lokmanın tadını, kokusunu, dokusunu fark et
- Doyduğun noktayı fark et ve bırak
- Telefon, TV veya stres faktörlerini uzak tut

**Sonuç**
Mindful Eating, "ne yediğini" değil, "nasıl yediğini" değiştirir.`,
      en: `In modern life, eating has often become an automatic behavior.

**What Does Mindful Eating Mean?**
Eating without rushing, staying present, savoring each bite. The goal is not weight loss, but learning to hear body signals again.

**How to Practice?**
- Take a deep breath before eating
- Notice taste, smell, texture of each bite
- Recognize when full and stop
- Keep phone, TV, and stress away

**Conclusion**
Mindful Eating changes not "what you eat" but "how you eat."`,
      de: `Achtsames Essen verändert nicht "was du isst", sondern "wie du isst".`,
      fr: `L'alimentation consciente change non pas "ce que vous mangez" mais "comment vous mangez".`,
      ru: `Осознанное питание меняет не «что вы едите», а «как вы едите».`,
      ar: `الأكل الواعي يغير ليس "ماذا تأكل" بل "كيف تأكل".`,
    },
  },
  {
    slug: "motivasyon-kaybi-diyet",
    category: "psychology",
    publishedAt: "2025-02-15",
    readingTime: 5,
    tags: ["diyetmotivasyonu", "psikolojikkilo", "davranışdeğişikliği", "gözdeakın"],
    title: {
      tr: "Motivasyon Kaybı: Diyette Başlayıp Bırakmanın Nedenleri",
      en: "Loss of Motivation: Why Diets Start and Stop",
      de: "Motivationsverlust: Warum Diäten beginnen und aufhören",
      fr: "Perte de motivation : pourquoi les régimes commencent et s'arrêtent",
      ru: "Потеря мотивации: почему диеты начинаются и прекращаются",
      ar: "فقدان الدافع: لماذا تبدأ الحميات وتتوقف",
    },
    excerpt: {
      tr: "Herkes diyetine büyük bir kararlılıkla başlar; birkaç hafta sonra ise 'yine olmadı' der. Bu irade eksikliği değil, sürdürülebilir motivasyon eksikliğidir.",
      en: "Everyone starts their diet with great determination; a few weeks later they say 'it didn't work again.' This is not lack of willpower, but lack of sustainable motivation.",
      de: "Jeder beginnt seine Diät mit großer Entschlossenheit; nach ein paar Wochen sagt er 'es hat wieder nicht geklappt.'",
      fr: "Tout le monde commence son régime avec une grande détermination ; quelques semaines plus tard, il dit 'ça n'a pas marché encore.'",
      ru: "Все начинают диету с большой решимостью; через несколько недель говорят «опять не получилось».",
      ar: "الجميع يبدأ حميته بعزيمة كبيرة؛ بعد أسابيع قليلة يقول 'لم ينجح مرة أخرى'.",
    },
    content: {
      tr: `**Motivasyonun Düşmesine Yol Açan Faktörler**
- Hızlı sonuç beklentisi
- Kendini cezalandırma dili
- Dışsal motivasyon
- Duygusal yorgunluk

**Motivasyonu Korumak İçin 3 Strateji**
1. Nedenini yaz
2. Küçük hedefler belirle
3. Kendini takdir et

**Sonuç**
Motivasyon kalıcı değildir; yenilenmeye ihtiyaç duyar. Diyet bir koşu değil, bir yolculuktur.`,
      en: `**Factors Leading to Motivation Loss**
- Expectation of quick results
- Self-punishing language
- External motivation
- Emotional exhaustion

**3 Strategies to Maintain Motivation**
1. Write down your why
2. Set small goals
3. Appreciate yourself

**Conclusion**
Motivation is not permanent; it needs renewal. A diet is not a race, but a journey.`,
      de: `Motivation ist nicht dauerhaft; sie muss erneuert werden. Eine Diät ist kein Rennen, sondern eine Reise.`,
      fr: `La motivation n'est pas permanente ; elle a besoin d'être renouvelée. Un régime n'est pas une course, mais un voyage.`,
      ru: `Мотивация не постоянна; ей нужно обновление. Диета — не гонка, а путешествие.`,
      ar: `الدافع ليس دائماً؛ يحتاج إلى تجديد. الحمية ليست سباقاً، بل رحلة.`,
    },
  },
  {
    slug: "tatli-krizlerinin-psikolojisi",
    category: "psychology",
    publishedAt: "2025-02-10",
    readingTime: 5,
    thumbnail: "/images/gozde/reel-tatli-krizi.jpg",
    tags: ["tatlıkrizi", "duygusalyeme", "mindfuleating", "beslenmepsikolojisi", "gözdeakın"],
    title: {
      tr: "Tatlı Krizlerinin Psikolojisi",
      en: "The Psychology of Sweet Cravings",
      de: "Die Psychologie der Süßigkeiten-Gelüste",
      fr: "La psychologie des envies de sucré",
      ru: "Психология тяги к сладкому",
      ar: "سيكولوجية رغبة الحلويات",
    },
    excerpt: {
      tr: "Canın tatlı değil, huzur istiyor olabilir. Tatlı krizleri çoğu zaman duygusal bir mesajdır.",
      en: "Your craving may not be for sweets, but for peace. Sweet cravings are often an emotional message.",
      de: "Ihr Verlangen gilt vielleicht nicht Süßigkeiten, sondern Frieden.",
      fr: "Votre envie n'est peut-être pas de sucré, mais de paix.",
      ru: "Ваше желание может быть не к сладкому, а к покою.",
      ar: "رغبتك قد لا تكون في الحلوى، بل في السلام.",
    },
    content: {
      tr: `Tatlı krizleri çoğu zaman "şeker ihtiyacı" değil, duygusal bir mesajdır.

**Neden Tatlı İsteriz?**
- Stres hormonu (kortizol)
- Uyku eksikliği
- Duygusal boşluk

**Tatlı Krizini Yönetmenin Yolları**
- Tatlı isteğini bastırma — nedenini fark et
- Sağlıklı alternatifler hazırda bulundur
- Günlük protein alımını dengele
- Akşam stresini hafiflet

**Sonuç**
Tatlı krizleriyle savaşmak yerine, onları anlamak gerekir.`,
      en: `Sweet cravings are often not a "sugar need" but an emotional message.

**Why Do We Crave Sweets?**
- Stress hormone (cortisol)
- Sleep deprivation
- Emotional void

**Ways to Manage Sweet Cravings**
- Don't suppress — understand the reason
- Keep healthy alternatives ready
- Balance daily protein intake
- Reduce evening stress

**Conclusion**
Instead of fighting sweet cravings, we need to understand them.`,
      de: `Statt gegen Süßigkeiten-Gelüste zu kämpfen, müssen wir sie verstehen.`,
      fr: `Au lieu de combattre les envies de sucré, nous devons les comprendre.`,
      ru: `Вместо борьбы с тягой к сладкому, нужно её понимать.`,
      ar: `بدلاً من محاربة رغبة الحلويات، نحتاج إلى فهمها.`,
    },
  },
  {
    slug: "yeme-bozukluklarinda-psikolojik-yaklasim",
    category: "psychology",
    publishedAt: "2025-02-05",
    readingTime: 6,
    tags: ["yemeboçukluğu", "beslenmepsikolojisi", "anoreksiya", "bulimia", "gözdeakın"],
    title: {
      tr: "Yeme Bozukluklarında Psikolojik Yaklaşım",
      en: "Psychological Approach to Eating Disorders",
      de: "Psychologischer Ansatz bei Essstörungen",
      fr: "Approche psychologique des troubles alimentaires",
      ru: "Психологический подход к расстройствам пищевого поведения",
      ar: "النهج النفسي لاضطرابات الأكل",
    },
    excerpt: {
      tr: "Yalnızca beden değil, zihin de beslenmeye ihtiyaç duyar. Yeme bozuklukları derin psikolojik dinamiklerden beslenir.",
      en: "Not only the body, but also the mind needs nourishment. Eating disorders stem from deep psychological dynamics.",
      de: "Nicht nur der Körper, sondern auch der Geist braucht Nahrung.",
      fr: "Non seulement le corps, mais aussi l'esprit a besoin de nourriture.",
      ru: "Не только тело, но и разум нуждается в питании.",
      ar: "ليس الجسم فقط، بل العقل أيضاً يحتاج إلى التغذية.",
    },
    content: {
      tr: `Yeme bozuklukları yalnızca kilo veya yeme alışkanlıklarıyla ilgili değildir.

**Yeme Bozukluklarının Temel Nedenleri**
- Kontrol ihtiyacı
- Kusursuz olma çabası
- Duygusal ifade eksikliği

**Psikolojik Destek Süreci**
Psikoterapi, kişinin duygularını fark etmesine ve beden algısını yeniden inşa etmesine yardımcı olur. Beslenme danışmanlığıyla birlikte yürütüldüğünde en etkili sonuç alınır.

**Sonuç**
Yeme bozuklukları sadece "yemek" değil, kendini ifade etme biçimidir. Bedenle barış, zihinle barıştan geçer.`,
      en: `Eating disorders are not just about weight or eating habits.

**Root Causes of Eating Disorders**
- Need for control
- Perfectionism
- Lack of emotional expression

**Psychological Support Process**
Psychotherapy helps individuals recognize emotions and rebuild body image. Most effective when combined with nutrition counseling.

**Conclusion**
Eating disorders are not just about "food" but a way of self-expression. Peace with the body comes through peace with the mind.`,
      de: `Essstörungen sind nicht nur über "Essen", sondern eine Form der Selbstdarstellung.`,
      fr: `Les troubles alimentaires ne concernent pas seulement la "nourriture" mais une forme d'expression de soi.`,
      ru: `Расстройства пищевого поведения — это не просто «еда», а способ самовыражения.`,
      ar: `اضطرابات الأكل ليست مجرد "طعام" بل طريقة للتعبير عن الذات.`,
    },
  },
  {
    slug: "neden-diyetler-yarim-kalir",
    category: "psychology",
    publishedAt: "2025-01-30",
    readingTime: 5,
    tags: ["diyetmotivasyonu", "diyetpsikolojisi", "davranışdeğişikliği", "beslenmepsikolojisi", "gözdeakın"],
    title: {
      tr: "Neden Diyetler Yarım Kalır?",
      en: "Why Do Diets Remain Incomplete?",
      de: "Warum bleiben Diäten unvollständig?",
      fr: "Pourquoi les régimes restent-ils incomplets ?",
      ru: "Почему диеты остаются незавершёнными?",
      ar: "لماذا تبقى الحميات غير مكتملة؟",
    },
    excerpt: {
      tr: "Başlamak kolay, sürdürmek neden zor? Cevap irade eksikliği değil — davranış, alışkanlık ve psikoloji üçgeninde saklıdır.",
      en: "Starting is easy, why is sustaining hard? The answer is not lack of willpower — it's hidden in the behavior, habit, and psychology triangle.",
      de: "Anfangen ist leicht, warum ist Durchhalten schwer?",
      fr: "Commencer est facile, pourquoi est-il difficile de continuer ?",
      ru: "Начать легко, почему трудно продолжать?",
      ar: "البدء سهل، لماذا الاستمرار صعب؟",
    },
    content: {
      tr: `**Diyetin Yarım Kalmasının Psikolojik Nedenleri**
- Mükemmeliyetçilik: "Ya tam yaparım ya hiç"
- Kısıtlama baskısı
- Hızlı sonuç beklentisi
- Destek eksikliği

**Davranışsal Yaklaşım**
Diyet sürecine bir "değişim yolculuğu" olarak bakmak gerekir. Küçük ama sürdürülebilir adımlar, büyük dönüşümler yaratır.

**Sonuç**
Diyetin yarım kalması, başarısızlık değil; yaklaşımın yeniden düzenlenmesi gerektiğinin göstergesidir.`,
      en: `**Psychological Reasons Diets Remain Incomplete**
- Perfectionism: "All or nothing"
- Restriction pressure
- Expectation of quick results
- Lack of support

**Behavioral Approach**
View the diet process as a "change journey." Small but sustainable steps create big transformations.

**Conclusion**
An incomplete diet is not failure; it's a sign that the approach needs restructuring.`,
      de: `Eine unvollständige Diät ist kein Versagen, sondern ein Zeichen, dass der Ansatz überarbeitet werden muss.`,
      fr: `Un régime incomplet n'est pas un échec ; c'est un signe que l'approche doit être restructurée.`,
      ru: `Незавершённая диета — не провал, а знак необходимости пересмотра подхода.`,
      ar: `الحمية غير المكتملة ليست فشلاً؛ إنها علامة على ضرورة إعادة هيكلة النهج.`,
    },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getLocalizedPost(post: BlogPost, locale: string) {
  const loc = (["tr", "en", "de", "fr", "ru", "ar"].includes(locale) ? locale : "tr") as keyof typeof post.title;
  return {
    ...post,
    title: post.title[loc] || post.title.tr,
    excerpt: post.excerpt[loc] || post.excerpt.tr,
    content: post.content[loc] || post.content.tr,
  };
}
