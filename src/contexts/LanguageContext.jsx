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
      articleTitle: 'Kymyz: Traditional Biotechnology Hidden in Nomadic Culture',
      articleIntro1: 'Kymyz, a fermented drink made from mare\'s milk, is one of the oldest traditional beverages in Central Asia. While often seen as a cultural product, kymyz is actually a natural example of biotechnology developed long before modern science existed.',
      articleIntro2: 'The process of making kymyz involves fermentation, where natural bacteria and yeast convert lactose into lactic acid and alcohol. This process not only preserves the milk but also creates probiotic properties that support gut health.',
      
      // Article Sections
      scientificValidation: 'Scientific Validation',
      scientificValidationText: 'Scientific studies show that fermented dairy products contain beneficial microorganisms that contribute to microbiome balance and digestion. In this sense, kymyz can be understood as an early form of probiotic food science.',
      
      nomadicInnovation: 'Nomadic Innovation',
      nomadicInnovationText: 'What makes kymyz especially interesting is its connection to nomadic life. Without refrigeration or industrial technology, nomads developed a sustainable system of food preservation based entirely on natural processes.',
      
      bridgingTradition: 'Bridging Tradition and Science',
      bridgingTraditionText: 'Today, kymyz can be seen as a bridge between traditional ecological knowledge and modern biotechnology. It demonstrates that scientific principles often exist in cultural practices long before they are formally studied.',
      
      advancedKnowledge: 'Advanced Knowledge System',
      advancedKnowledgeText: 'Understanding kymyz as biotechnology allows us to appreciate nomadic knowledge not as folklore, but as an advanced system of environmental adaptation and scientific observation.',
      
      // Podcast Page
      podcastTitle: 'Tradition and Fermentation',
      podcastDescription: 'Listen to a conversation with a kymyz producer from Naryn, and learn how traditional knowledge reflects scientific processes in daily life.',
      scientificInsight: 'Scientific Insight',
      scientificInsightText: 'This interview reflects fermentation — a biological process where bacteria convert sugars into acids and gas. Temperature and environment affect the speed and outcome of this transformation.',
      englishTranslation: 'English Translation',
      
      // Video Page
      videoTitle: 'Visual Story of Kymyz',
      videoDescription: 'A short documentary-style video explaining the science of kymyz in a simple and visual way. The film blends pastoral landscapes with modern design language.',
      
      // Preview Cards
      previewTag: 'Preview',
      explore: 'Explore',
      readArticle: 'Read Article',
      watchVideo: 'Watch Video',
      listenPodcast: 'Listen Podcast',
      
      articleCardTitle: 'The Science Behind Kymyz',
      articleCardDesc: 'A cultural and scientific introduction to the fermented drink.',
      videoCardTitle: 'Kymyz Video Story',
      videoCardDesc: 'A visual journey through Kyrgyz pastures and fermentation rituals.',
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
      articleTitle: 'Кымыз: Көчмөн Маданиятта Жашырылган Каадаңкы Биотехнология',
      articleIntro1: 'Кымыз - бээнин сүтүнөн жасалган ферменттелген ичимдик, Борбордук Азиядагы эң эски салттык суюктуктардын бири. Көбүнчө маданий продукт катары каралса, кымыз чын эле заманбап илим пайда болгонго чейин өнүктүрүлгөн биотехнологиянын табигий мисали.',
      articleIntro2: 'Кымыз жасоо процесси ферментацияны камтыган, анда табигий бактериялар жана ачыткылар лактозаны сүт кислотасына жана спиртке айландырат. Бул процесс сүттү сактоо гана эмес, ошондой эке ичеги-карын ден-соолугуна жардам берүүчү пробиотикалык касиеттерди түзөт.',
      
      // Article Sections
      scientificValidation: 'Илимий Тастыктама',
      scientificValidationText: 'Илимий изилдөөлөр көрсөткөндөй, ферменттелген сүт продукттары микробиом балансын жана сиңирүүгө жардам берүүчү пайдалуу микроорганизмдерден турат. Бул мааниде, кымыз пробиотикалык азык-түлүк илиминин эрте формасы катары түшүнүлөт.',
      
      nomadicInnovation: 'Көчмөн Инновация',
      nomadicInnovationText: 'Кымызды өзгөчө кызыктуу кылат - ал көчмөн жашоо менен байланышы. Тоңдургучсуз жана өнөр жай технологиясыз, көчмөндөр толук табигый процесстерге негизделген азык-түлүктү сактоо туруктуу системасын өнүктүрүшкөн.',
      
      bridgingTradition: 'Салт менен Илимди Бирктирүү',
      bridgingTraditionText: 'Бүгүнкү күндө кымыз салттык экологиялык билим менен заманбап биотехнологиянын ортосундагы көпүрү катары каралат. Ал илимий принциптер көбүнчө расмий изилдөөгө чейин эле маданий практикаларда бар экенин көрсөтөт.',
      
      advancedKnowledge: 'Алдыңкы Билим Системасы',
      advancedKnowledgeText: 'Кымызды биотехнология катары түшүнүү бизге көчмөн билимди фольклор катары эмес, чөйрөгө ыңгайлануу жана илимий байкоонун алдыңкы системасы катары баалоого мүмкүндүк берет.',
      
      // Podcast Page
      podcastTitle: 'Салт жана Ферментация',
      podcastDescription: 'Нарындан келген кымыз өндүрүүчү менен маектешүүнү угуп, каадаңкы билим күнүмдүк жашоодо илимий процесстерди кантип чагылдырын билүңүз.',
      scientificInsight: 'Илимий Көз караш',
      scientificInsightText: 'Бул маек ферментацияны чагылдырат - бактериялар канттарды кычкылга жана газга айландыруучу биологиялык процесс. Температура жана чөйрө бул өзгөрүүнүн ылдамдыгына жана натыйжасына таасир этет.',
      englishTranslation: 'Англисче Котору',
      
      // Video Page
      videoTitle: 'Кымыздын Көрүнүктүү Окуясы',
      videoDescription: 'Кымыздын илимин жөнөтүп, жөнөкөй жана көрүнүктүү түрдө түшүндүргөн кыска документалдык стильдеги видео. Тасма чөп чөйрөлөрүн заманбап дизайн тили менен айкалаштырат.',
      
      // Preview Cards
      previewTag: 'Алдын ала',
      explore: 'Изилдөө',
      readArticle: 'Макаланы Оку',
      watchVideo: 'Видеону Көр',
      listenPodcast: 'Подкастты Угу',
      
      articleCardTitle: 'Кымыздын Артындагы Илим',
      articleCardDesc: 'Ферменттелген ичимдикке маданий жана илимий киришүү.',
      videoCardTitle: 'Кымыз Видео Окуясы',
      videoCardDesc: 'Кыргыз жайыттары жана ферментация ритуалдары аркылуу көрүнүктүү саякат.',
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
