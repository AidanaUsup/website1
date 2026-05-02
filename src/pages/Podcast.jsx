import { motion } from 'framer-motion';

function Podcast() {
  return (
    <div className="page-shell page-content">
      <motion.section
        className="page-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Podcast</span>
        <h1>Tradition and Fermentation</h1>
        <p>
          Listen to a conversation with a kymyz producer from Naryn, and learn how traditional knowledge
          reflects scientific processes in daily life.
        </p>
        <audio controls className="audio-player">
          <source src="/Podcast_SC_kymyz.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="transcript-card">
          <h2>English Translation</h2>
          <p>
            <strong>Interviewer:</strong> Hello everyone! Today we’re going to talk about a drink that is
            familiar to all of us, but something we don’t often think deeply about - kymyz.
          </p>
          <p>
            <strong>Guest:</strong> Hello! It comes from family. I learned it by watching my parents and
            helping out. After many years, you develop a sense of how it works.
          </p>
        </div>
      </motion.section>
    </div>
  );
}

export default Podcast;
