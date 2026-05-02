import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function PreviewCard({ title, description, to }) {
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
        <span className="preview-card__tag">Preview</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link className="preview-card__link" to={to}>
        Explore
      </Link>
    </motion.article>
  );
}

export default PreviewCard;
