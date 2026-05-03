import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext.jsx';

function PreviewCard({ to, cardType }) {
  const { t } = useLanguage();

  const getCardContent = () => {
    switch (cardType) {
      case 'article':
        return {
          title: t('articleCardTitle'),
          description: t('articleCardDesc'),
          linkText: t('readArticle')
        };
      case 'video':
        return {
          title: t('videoCardTitle'),
          description: t('videoCardDesc'),
          linkText: t('watchVideo')
        };
      case 'podcast':
        return {
          title: t('podcastCardTitle'),
          description: t('podcastCardDesc'),
          linkText: t('listenPodcast')
        };
      default:
        return {
          title: t('articleCardTitle'),
          description: t('articleCardDesc'),
          linkText: t('readArticle')
        };
    }
  };

  const content = getCardContent();

  return (
    <motion.article
      className="preview-card"
      whileHover={{ y: -6, scale: 1.02 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="preview-card__content">
        <span className="preview-card__tag">{t('previewTag')}</span>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
      </div>
      <Link className="preview-card__link" to={to}>
        {content.linkText}
      </Link>
    </motion.article>
  );
}

export default PreviewCard;
