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
          {t('videoSubtitle')}
        </p>
        <p className="highlight-text">
          {t('videoAccessibility')}
        </p>
        <div className="video-frame">
          <video 
            controls 
            playsInline
            preload="metadata"
            className="main-video-player"
            poster="/images/suusamyr.jpg"
          >
            <source src="/videos/IMG_2712.MOV" type="video/mp4" />
            <source src="/videos/IMG_2712.MOV" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.section>
    </div>
  );
}

export default Video;
