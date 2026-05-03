import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import PreviewCard from '../components/PreviewCard.jsx';
import previews from '../data/content.js';

function Home() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <div className="page-shell">
      <section ref={heroRef} className="hero-section">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ 
            duration: 1, 
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.span 
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t('eyebrow')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {t('description')}
          </motion.p>
        </motion.div>
      </section>

      <section className="preview-section">
        <div className="section-heading">
          <span>{t('explore')}</span>
          <h2>{t('featuredStories')}</h2>
        </div>
        <div className="preview-grid">
          <PreviewCard to="/article" cardType="article" />
          <PreviewCard to="/video" cardType="video" />
          <PreviewCard to="/podcast" cardType="podcast" />
        </div>
      </section>
    </div>
  );
}

export default Home;
