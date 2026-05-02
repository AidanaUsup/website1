import { motion } from 'framer-motion';

function Article() {
  return (
    <div className="page-shell page-content">
      <motion.section
        className="page-section"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Article</span>
        <h1>The Science Behind Kymyz</h1>
        <p>
          Kymyz is a traditional fermented drink from Kyrgyz nomadic culture. It is produced from mare’s
          milk through natural fermentation, shaped by centuries of observation and practice.
        </p>
        <p>
          During fermentation, bacteria and yeast break down lactose into lactic acid, carbon dioxide,
          and small flavor compounds. This creates a unique balance of sourness, effervescence, and
          nutrition.
        </p>
        <div className="feature-card">
          <h2>Traditional biotechnology</h2>
          <p>
            The makers of kymyz understand the process through lived knowledge: temperature, starter
            culture, and timing are tuned by experience. It is an everyday science expressed through
            heritage.
          </p>
        </div>
      </motion.section>
    </div>
  );
}

export default Article;
