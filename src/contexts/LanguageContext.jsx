import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const translations = {
    en: {
      // Navbar
      brand: 'Science Communication',
      home: 'Home',
      article: 'Article',
      video: 'Video',
      podcast: 'Podcast',
      
      // Hero Section
      eyebrow: 'Traditional Knowledge',
      title: 'Kymyz: A Tradition Rooted in Science',
      description: 'Discover how Kyrgyz traditions reveal the science of fermentation, biology, and the environment — through our article, podcast, and video.',
      
      // Preview Section
      explore: 'Explore',
      featuredStories: 'Featured stories',
      
      // Article Page
      articleTitle: 'Kymyz: A Tradition Rooted in Science',
      articleWhatIs: 'What is Kymyz?',
      articleWhatIsText: 'Kymyz (also known as kumis) is a traditional fermented dairy beverage made from mare\'s milk, widely consumed across Central Asia. For centuries, nomadic communities have valued it not only as a refreshing drink but also as a source of nutrition and healing. Unlike cow\'s milk products, kymyz is slightly alcoholic and naturally carbonated due to fermentation, giving it a mildly sour and effervescent taste (Astanatimes, 2024; Super.kg, n.d.). Historically, kymyz has been used in therapeutic settings, particularly in sanatorium treatments, where it was believed to support recovery from various illnesses and improve overall health (IJMRHS, n.d.).',
      
      articleHowMade: 'How is Kymyz Made?',
      articleHowMadeIntro: 'The production of kymyz is a combination of traditional practices and natural biochemical processes:',
      articleStep1: '1. Milking mares',
      articleStep1Text: 'Fresh mare\'s milk is collected during the lactation season.',
      articleStep2: '2. Fermentation',
      articleStep2Text: 'The milk is poured into a container—traditionally a leather bag (saba) or wooden barrel—and mixed with a starter culture from previously fermented kymyz.',
      articleStep3: '3. Microbial activity',
      articleStep3Text: 'Fermentation occurs through the action of lactic acid bacteria and yeast. These microorganisms break down lactose into lactic acid, carbon dioxide, and small amounts of ethanol.',
      articleStep4: '4. Continuous stirring',
      articleStep4Text: 'The mixture is regularly stirred to ensure even fermentation and proper microbial distribution (Journal of Dairy Science, 2020).',
      articleHowMadeOutro: 'This dual fermentation process (lactic and alcoholic) distinguishes kymyz from other fermented dairy products such as yogurt.',
      
      articleScientificComp: 'Scientific Composition of Kymyz',
      articleMacro: '1. Macronutrients',
      articleMacroText: 'Mare\'s milk, the base of kymyz, has a unique composition closer to human milk than cow\'s milk. It contains relatively low fat, moderate protein, and high lactose levels, making it particularly suitable for fermentation (Journal of Dairy Science, 2020). Additionally, the ratio of casein to whey proteins is approximately 1:1, which enhances digestibility and reduces allergenic potential compared to cow\'s milk (ResearchGate, 2024).',
      
      articleAmino: '2. Amino Acids and Bioactive Compounds',
      articleAminoText: 'Kymyz contains a wide range of amino acids, including essential ones such as lysine, leucine, tryptophan, and phenylalanine. Studies have identified up to 18 amino acids in kymyz, contributing to its high nutritional value (ResearchGate, 2024; Astanatimes, 2024). During fermentation, proteins are partially broken down into bioactive peptides. These compounds exhibit antimicrobial and immunomodulatory properties, which may contribute to the drink\'s health benefits (Journal of Dairy Science, 2020).',
      
      articleMicro: '3. Microorganisms and Probiotics',
      articleMicroText: 'Kymyz is rich in beneficial microorganisms, particularly lactic acid bacteria (such as Lactobacillus) and yeast species. These microorganisms improve gut microbiota balance, enhance digestion, and synthesize vitamins and beneficial compounds. The probiotic nature of kymyz plays a key role in its reputation as a functional food (Journal of Dairy Science, 2020).',
      
      articleVit: '4. Vitamins and Minerals',
      articleVitText: 'Kymyz contains important micronutrients, including B-group vitamins, calcium, phosphorus, enzymes, and immunologically active compounds. These components contribute to metabolic processes, bone health, and immune system support (Astanatimes, 2024).',
      
      articleHealthBen: 'Health Benefits of Kymyz (Scientific Perspective)',
      articleDigest: '1. Digestive Health',
      articleDigestText: 'The probiotics in kymyz promote a healthy gut microbiome and improve digestion. Fermentation also breaks down lactose, making it easier to digest for some individuals (Journal of Dairy Science, 2020).',
      articleImmune: '2. Immune System Support',
      articleImmuneText: 'Bioactive peptides, vitamins, and immunoglobulins found in kymyz contribute to immune defense and may help the body resist infections (Astanatimes, 2024).',
      articleEfficiency: '3. High Nutritional Efficiency',
      articleEfficiencyText: 'Kymyz is highly bioavailable, meaning its nutrients are easily absorbed by the body. This makes it especially valuable in diets where efficient nutrient intake is important (Astanatimes, 2024).',
      articleTherapeutic: '4. Therapeutic and Medicinal Use',
      articleTherapeuticText: 'Research and historical practices suggest that kymyz may support treatment for conditions such as digestive disorders, anemia, and respiratory diseases. It has been widely used in health tourism and traditional therapy programs in Central Asia (IJMRHS, n.d.).',
      
      articleConclusion: 'Conclusion',
      articleConclusionText: 'Kymyz represents a unique intersection of tradition and science. Rooted in nomadic culture, it is produced through natural fermentation processes that enhance its nutritional and functional properties. Scientifically, its rich composition of amino acids, probiotics, vitamins, and bioactive compounds explains many of its observed health benefits. As modern research continues to explore its properties, kymyz stands out not only as a cultural heritage drink but also as a promising functional food with scientifically supported value.',
      
      articleReferences: 'References',
      
      // Podcast Page
      podcastTitle: 'Tradition and Fermentation',
      podcastDescription: 'Listen to a conversation with a kymyz producer from Naryn, and learn how traditional knowledge reflects scientific processes in daily life.',
      scientificInsight: 'Scientific Insight',
      scientificInsightText: 'This interview reflects fermentation — a biological process where bacteria convert sugars into acids and gas. Temperature and environment affect the speed and outcome of this transformation.',
      englishTranslation: 'English Translation',
      
      // Video Page
      videoTitle: 'Video: Kymyz as Biotechnology',
      videoSubtitle: 'This video explains the science behind kymyz, focusing on fermentation, microorganisms, and its health-related properties. It presents scientific concepts in a simple and accessible way, while connecting them to traditional Kyrgyz practices.',
      videoAccessibility: 'The video is presented in Kyrgyz with English subtitles to ensure accessibility for both local and international audiences.',
      
      // Preview Cards
      previewTag: 'Preview',
      explore: 'Explore',
      readArticle: 'Read Article',
      watchVideo: 'Watch Video',
      listenPodcast: 'Listen Podcast',
      
      articleCardTitle: 'The Science Behind Kymyz',
      articleCardDesc: 'How fermentation and microorganisms shape a traditional Kyrgyz drink',
      videoCardTitle: 'Video: Kymyz as Biotechnology',
      videoCardDesc: 'This video explains the science behind kymyz, focusing on fermentation and microorganisms.',
      podcastCardTitle: 'Podcast Interview',
      podcastCardDesc: 'Listen to a first-hand conversation about traditional kymyz practice.',
    },
    ky: {
      // Navbar
      brand: 'Илимий Коммуникация',
      home: 'Башкы',
      article: 'Макала',
      video: 'Видео',
      podcast: 'Подкаст',
      
      // Hero Section
      eyebrow: 'Каадаңкы Билим',
      title: 'Кымыз: Илимге негизделген Салт',
      description: 'Кыргыз салттарынын ачканын илимий жактан - ферментация, биология жана чөйрө боюнча макалабыз, видеобуз жана подкастыбыз аркылуу билүңүз.',
      
      // Preview Section
      explore: 'Изилдөө',
      featuredStories: 'Айырмалуу окуялар',
      
      // Article Page
      articleTitle: 'Кымыз: Илимий негизделген Салт',
      articleWhatIs: 'Кымыз деген эмне?',
      articleWhatIsText: 'Кымыз - бээнин сүтүнөн жасалган салттуу ферменттелген сүт суусундугу, Борбордук Азияда кеңири жайылган. Көчмөн элдер кылымдар бою аны сергитүүчү суусундук гана эмес, азык-түлүк жана дарылык касиетке ээ суусундук катары баалап келишкен. Уйдун сүтүнөн жасалган азыктардан айырмаланып, кымыз ферментациядан улам бир аз алкоголдук жана табигый газдалган болот, бул ага бир аз кычкыл жана көбүктүү даам берет (Astanatimes, 2024; Super.kg, n.d.). Тарыхта кымыз терапиялык максатта, айрыкча санаторийлерде колдонулуп келген, анда ал ар кандай оорулардан айыгууга жана жалпы ден соолукту чыңдоого жардам берет деп ишенишкен (IJMRHS, n.d.).',
      
      articleHowMade: 'Кымыз кантип жасалат?',
      articleHowMadeIntro: 'Кымыз өндүрүү - бул салттуу тажрыйбалардын жана табигый биохимиялык процесстердин айкалышы:',
      articleStep1: '1. Бээ саамай',
      articleStep1Text: 'Бээнин сүтү саамай мезгилинде чогултулат.',
      articleStep2: '2. Ферментация',
      articleStep2Text: 'Сүт идишке (салттуу түрдө саба же жыгач челекке) куюлуп, мурда ферменттелген кымыздын ачыткысы менен аралаштырылат.',
      articleStep3: '3. Микробдук активдүүлүк',
      articleStep3Text: 'Ферментация сүт кислотасы бактерияларынын жана ачыткылардын таасири астында жүрөт. Бул микроорганизмдер лактозаны сүт кислотасына, көмүр кычкыл газына жана бир аз өлчөмдөгү этанолго ажыратат.',
      articleStep4: '4. Тынымсыз аралаштыруу',
      articleStep4Text: 'Ферментациянын бирдей жүрүшүн жана микробдордун туура бөлүштүрүлүшүн камсыз кылуу үчүн аралашма дайыма аралаштырылып турат (Journal of Dairy Science, 2020).',
      articleHowMadeOutro: 'Бул кош ферментация процесси (сүт кислотасы жана алкоголдук) кымызды йогурт сыяктуу башка ферменттелген сүт азыктарынан айырмалап турат.',
      
      articleScientificComp: 'Кымыздын илимий курамы',
      articleMacro: '1. Макронутриенттер',
      articleMacroText: 'Кымыздын негизи болгон бээнин сүтү уйдун сүтүнө караганда адамдын сүтүнө жакыныраак уникалдуу курамга ээ. Анда май аз, белок орточо жана лактоза деңгээли жогору, бул аны ферментация үчүн өзгөчө ылайыктуу кылат (Journal of Dairy Science, 2020). Мындан тышкары, казеиндин сары суу белокторуна катышы болжол менен 1:1 түзөт, бул уйдун сүтүнө караганда сиңирүүнү жакшыртат жана аллергендик потенциалды азайтат (ResearchGate, 2024).',
      
      articleAmino: '2. Аминокислоталар жана биоактивдүү кошулмалар',
      articleAminoText: 'Кымыздын курамында лизин, лейцин, триптофан жана фенилаланин сыяктуу маанилүү аминокислоталардын кеңири спектри бар. Изилдөөлөр кымызда 18ге чейин аминокислотаны аныкташкан, бул анын жогорку азыктык баалуулугуна өбөлгө түзөт (ResearchGate, 2024; Astanatimes, 2024). Ферментация учурунда белоктор жарым-жартылай биоактивдүү пептиддерге ажырайт. Бул кошулмалар антимикробдук жана иммуномодуляциялык касиеттерге ээ, бул ичимдиктин ден соолукка пайдалуулугуна өбөлгө түзөт (Journal of Dairy Science, 2020).',
      
      articleMicro: '3. Микроорганизмдер жана пробиотиктер',
      articleMicroText: 'Кымыз пайдалуу микроорганизмдерге, айрыкча сүт кислотасы бактерияларына (мисалы, Lactobacillus) жана ачыткы түрлөрүнө бай. Бул микроорганизмдер ичеги микробиотасынын балансын жакшыртат, сиңирүүнү күчөтөт жана витаминдерди жана пайдалуу кошулмаларды синтездейт. Кымыздын пробиотикалык мүнөзү анын функционалдык тамак-аш катары репутациясында негизги ролду ойнойт (Journal of Dairy Science, 2020).',
      
      articleVit: '4. Витаминдер жана минералдар',
      articleVitText: 'Кымыз маанилүү микронутриенттерди камтыйт, анын ичинде В тобундагы витаминдер, кальций, фосфор, ферменттер жана иммунологиялык активдүү кошулмалар бар. Бул компоненттер метаболизм процесстерине, сөөктүн ден соолугуна жана иммундук системаны колдоого өбөлгө түзөт (Astanatimes, 2024).',
      
      articleHealthBen: 'Кымыздын ден соолукка пайдасы (илимий көз караш)',
      articleDigest: '1. Тамак сиңирүү ден соолугу',
      articleDigestText: 'Кымыздагы пробиотиктер ичеги микробиомасынын ден соолугун чыңдап, тамак сиңирүүнү жакшыртат. Ферментация лактозаны да ажыратат, бул айрым адамдар үчүн сиңирүүнү жеңилдетет (Journal of Dairy Science, 2020).',
      articleImmune: '2. Иммундук системаны колдоо',
      articleImmuneText: 'Кымызда табылган биоактивдүү пептиддер, витаминдер жана иммуноглобулиндер иммундук коргонууга көмөктөшөт жана организмге инфекцияларга туруштук берүүгө жардам берет (Astanatimes, 2024).',
      articleEfficiency: '3. Жогорку азыктык натыйжалуулук',
      articleEfficiencyText: 'Кымыз жогорку биожеткиликтүүлүккө ээ, демек анын азыктары организмге оңой сиңет. Бул аны азык заттардын натыйжалуу кабыл алынышы маанилүү болгон диеталарда өзгөчө баалуу кылат (Astanatimes, 2024).',
      articleTherapeutic: '4. Терапиялык жана дарылык колдонуу',
      articleTherapeuticText: 'Изилдөөлөр жана тарыхый тажрыйбалар кымыздын тамак сиңирүү органдарынын бузулушу, анемия жана респиратордук оорулар сыяктуу шарттарды дарылоого жардам берерин көрсөтүп турат. Ал Борбордук Азиядагы ден соолук туризминде жана салттуу терапия программаларында кеңири колдонулуп келет (IJMRHS, n.d.).',
      
      articleConclusion: 'Корутунду',
      articleConclusionText: 'Кымыз салт менен илимдин уникалдуу айкалышын билдирет. Көчмөн маданиятына негизделген, ал анын азыктык жана функционалдык касиеттерин жакшырткан табигый ферментация процесстери аркылуу өндүрүлөт. Илимий жактан алганда, анын аминокислоталарга, пробиотиктерге, витаминдерге жана биоактивдүү кошулмаларга бай курамы анын ден соолукка тийгизген пайдалуу жактарын түшүндүрөт. Заманбап изилдөөлөр анын касиеттерин изилдөөнү улантууда, кымыз маданий мурас ичимдиги гана эмес, илимий жактан негизделген баалуу функционалдык тамак-аш катары да өзгөчөлөнүп турат.',
      
      articleReferences: 'Адабияттар',
      
      // Podcast Page
      podcastTitle: 'Салт жана Ферментация',
      podcastDescription: 'Нарындан келген кымыз өндүрүүчү менен маектешүүнү угуп, каадаңкы билим күнүмдүк жашоодо илимий процесстерди кантип чагылдырын билүңүз.',
      scientificInsight: 'Илимий Көз караш',
      scientificInsightText: 'Бул маек ферментацияны чагылдырат - бактериялар канттарды кычкылга жана газга айландыруучу биологиялык процесс. Температура жана чөйрө бул өзгөрүүнүн ылдамдыгына жана натыйжасына таасир этет.',
      englishTranslation: 'Англисче Котору',
      
      // Video Page
      videoTitle: 'Видео: Кымыз биотехнология катары',
      videoSubtitle: 'Бул видео кымыздын илимий негиздерин түшүндүрөт, ферментацияга, микроорганизмдерге жана анын ден соолукка байланыштуу касиеттерине көңүл бурат. Ал илимий түшүнүктөрдү жөнөкөй жана жеткиликтүү түрдө сунуштайт, ошол эле учурда аларды кыргыздын салттуу тажрыйбалары менен байланыштырат.',
      videoAccessibility: 'Видео жергиликтүү жана эл аралык аудитория үчүн жеткиликтүүлүктү камсыз кылуу максатында англисче субтитрлери менен кыргыз тилинде берилген.',
      
      // Preview Cards
      previewTag: 'Алдын ала',
      explore: 'Изилдөө',
      readArticle: 'Макаланы Оку',
      watchVideo: 'Видеону Көр',
      listenPodcast: 'Подкастты Угу',
      
      articleCardTitle: 'Кымыздын Артындагы Илим',
      articleCardDesc: 'Кыргыздын салттуу суусундугун ферментация жана микроорганизмдер кантип калыптандырат',
      videoCardTitle: 'Видео: Кымыз биотехнология катары',
      videoCardDesc: 'Бул видео кымыздын илимин, ферментация жана микроорганизмдерге басым жасоо менен түшүндүрөт.',
      podcastCardTitle: 'Подкаст Маеги',
      podcastCardDesc: 'Каадаңкы кымыз практикасы жөнүндө биринчи колдон маекти угуңуз.',
    }
  };

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const switchLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
