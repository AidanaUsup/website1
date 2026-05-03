import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext.jsx';

function Article() {
  const { t } = useLanguage();

  const references = [
    {
      text: "Super.kg. (n.d.). Кымыз тууралуу маалымат [Information about kymyz].",
      url: "https://www.super.kg/article/show/4407"
    },
    {
      text: "Aibarshyn Akhmetkali. (2024, September 22). Ultimate nomadic superfood: Mare’s milk that covers all nutritional bases. The Astana Times.",
      url: "https://astanatimes.com/2024/09/ultimate-nomadic-superfood-mares-milk-that-covers-all-nutritional-bases/"
    },
    {
      text: "Sabira Kozykan., Weihua Wang., & Aigul Kozhakhmetova. (2024, January 12). Analysis and evaluation of the protein and amino acid composition of shubat and kymyz produced in Kazakhstan. ResearchGate.",
      url: "https://www.researchgate.net/publication/377375450_Analysis_and_evaluation_of_the_protein_and_amino_acid_composition_of_Shubat_and_Kymyz_produced_in_Kazakhstan"
    },
    {
      text: "Aizhan Rakhmanova., Tao Wang., Guo Xing., Lingling Ma., Yan Hong., Yingying Lu., Li Xin., Wang Xin., Qiao Zhu., & Xin Lü. (2021). Isolation and identification of microorganisms in Kazakhstan koumiss and their application in preparing cow-milk koumiss. Journal of Dairy Science, 104(1), 151–166.",
      url: "https://www.journalofdairyscience.org/article/S0022-0302(20)30894-8/fulltext"
    },
    {
      text: "Baris Erdem., & Ibrahim Gundogdu. (n.d.). Kumiss treatment in the context of health tourism: A research in Kyrgyzstan. International Journal of Medical Research & Health Sciences.",
      url: "https://www.ijmrhs.com/medical-research/kumiss-treatment-in-the-context-of-health-tourism-a-research-in-kyrgyzstan.pdf"
    }
  ];

  return (
    <div className="page-shell page-content">
      <motion.section
        className="page-section"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Article</span>
        <h1>{t('articleTitle')}</h1>
        
        <div className="article-image-container">
          <img src="/images/photo_5458666467445379930_x.jpg" alt="Traditional Kymyz Preparation" className="article-main-image" />
        </div>

        <h2>{t('articleWhatIs')}</h2>
        <p>{t('articleWhatIsText')}</p>
      </motion.section>

      <motion.section
        className="feature-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2>{t('articleHowMade')}</h2>
        <p>{t('articleHowMadeIntro')}</p>
        <div className="process-steps">
          <div className="step">
            <h3>{t('articleStep1')}</h3>
            <p>{t('articleStep1Text')}</p>
          </div>
          <div className="step">
            <h3>{t('articleStep2')}</h3>
            <p>{t('articleStep2Text')}</p>
          </div>
          <div className="step">
            <h3>{t('articleStep3')}</h3>
            <p>{t('articleStep3Text')}</p>
          </div>
          <div className="step">
            <h3>{t('articleStep4')}</h3>
            <p>{t('articleStep4Text')}</p>
          </div>
        </div>
        <p className="highlight-text">{t('articleHowMadeOutro')}</p>
      </motion.section>

      <motion.section
        className="feature-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2>{t('articleScientificComp')}</h2>
        
        <div className="article-image-container secondary">
          <img src="/images/photo_5458666467445379931_y.jpg" alt="Kymyz Scientific Composition" className="article-side-image" />
        </div>

        <div className="sub-section">
          <h3>{t('articleMacro')}</h3>
          <p>{t('articleMacroText')}</p>
        </div>
        <div className="sub-section">
          <h3>{t('articleAmino')}</h3>
          <p>{t('articleAminoText')}</p>
        </div>
        <div className="sub-section">
          <h3>{t('articleMicro')}</h3>
          <p>{t('articleMicroText')}</p>
        </div>
        <div className="sub-section">
          <h3>{t('articleVit')}</h3>
          <p>{t('articleVitText')}</p>
        </div>
      </motion.section>

      <motion.section
        className="feature-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2>{t('articleHealthBen')}</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>{t('articleDigest')}</h3>
            <p>{t('articleDigestText')}</p>
          </div>
          <div className="benefit-item">
            <h3>{t('articleImmune')}</h3>
            <p>{t('articleImmuneText')}</p>
          </div>
          <div className="benefit-item">
            <h3>{t('articleEfficiency')}</h3>
            <p>{t('articleEfficiencyText')}</p>
          </div>
          <div className="benefit-item">
            <h3>{t('articleTherapeutic')}</h3>
            <p>{t('articleTherapeuticText')}</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="feature-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2>{t('articleConclusion')}</h2>
        <p>{t('articleConclusionText')}</p>
      </motion.section>

      <motion.section
        className="feature-card references-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <h2>{t('articleReferences')}</h2>
        <ul className="references-list">
          {references.map((ref, index) => (
            <li key={index}>
              <a href={ref.url} target="_blank" rel="noopener noreferrer">
                {ref.text}
              </a>
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}

export default Article;
