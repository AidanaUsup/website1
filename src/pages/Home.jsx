import { motion } from 'framer-motion';
import PreviewCard from '../components/PreviewCard.jsx';
import previews from '../data/content.js';

function Home() {
  return (
    <div className="page-shell">
      <section className="hero-section">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="eyebrow">Welcome to Kymyz</span>
          <h1>Where Kyrgyz heritage meets modern storytelling</h1>
          <p>
            Discover a minimal ethno-modern experience that honors warm pasture tradition,
            fermented knowledge, and cultural science.
          </p>
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
