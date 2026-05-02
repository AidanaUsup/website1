import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import PreviewCard from '../components/PreviewCard.jsx';
import previews from '../data/content.js';

function Home() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, threshold: 0.1 });

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
            Welcome to Kymyz
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Where Kyrgyz heritage meets modern storytelling
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Discover a minimal ethno-modern experience that honors warm pasture tradition,
            fermented knowledge, and cultural science.
          </motion.p>
        </motion.div>
      </section>

      <section className="preview-section">
        <div className="section-heading">
          <span>Explore</span>
          <h2>Featured stories</h2>
        </div>
        <div className="preview-grid">
          {previews.map((preview) => (
            <PreviewCard key={preview.to} {...preview} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
