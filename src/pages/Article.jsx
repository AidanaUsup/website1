import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext.jsx';

function Article() {
  const { t } = useLanguage();

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
        <p>
          {t('articleIntro1')}
        </p>
        <p>
          {t('articleIntro2')}
        </p>
        
        <motion.div
          className="feature-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>{t('scientificValidation')}</h2>
          <p>
            {t('scientificValidationText')}
          </p>
        </motion.div>

        <motion.div
          className="feature-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>{t('nomadicInnovation')}</h2>
          <p>
            {t('nomadicInnovationText')}
          </p>
        </motion.div>

        <motion.div
          className="feature-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2>{t('bridgingTradition')}</h2>
          <p>
            {t('bridgingTraditionText')}
          </p>
        </motion.div>

        <motion.div
          className="feature-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2>{t('advancedKnowledge')}</h2>
          <p>
            {t('advancedKnowledgeText')}
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Article;
