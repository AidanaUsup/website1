import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext.jsx';

function Video() {
  const { t } = useLanguage();

  return (
    <div className="page-shell page-content">
      <motion.section
        className="page-section"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Video</span>
        <h1>{t('videoTitle')}</h1>
        <p>
          {t('videoDescription')}
        </p>
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Kymyz Story"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.section>
    </div>
  );
}

export default Video;
