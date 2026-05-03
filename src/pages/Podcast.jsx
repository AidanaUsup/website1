import { motion } from 'framer-motion';
import Dropdown from '../components/Dropdown.jsx';
import { useLanguage } from '../contexts/LanguageContext.jsx';

function Podcast() {
  const { t } = useLanguage();

  return (
    <div className="page-shell page-content">
      <motion.section
        className="page-section"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Podcast</span>
        <h1>{t('podcastTitle')}</h1>
        <p>
          {t('podcastDescription')}
        </p>
        <audio controls className="audio-player">
          <source src="/Podcast_SC_kymyz.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Dropdown title={t('scientificInsight')}>
          <p>
            {t('scientificInsightText')}
          </p>
        </Dropdown>
      </motion.div>

      <motion.section
        className="transcript-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2>{t('englishTranslation')}</h2>
        
        <p><strong>Interviewer:</strong> Hello everyone! Today we're going to talk about a drink that is familiar to all of us, but something we don't often think deeply about - kymyz.</p>

        <p>When we think of kymyz, we usually imagine summer pastures, horses, and the mountains… but we don't always think about what's happening behind it - how it's made and what kind of process is involved.</p>

        <p>So today, we decided to take a closer look at that. We are joined by a kymyz producer from Naryn. Hello!</p>

        <p><strong>Guest:</strong> Hello.</p>

        <br />

        <p><strong>Interviewer:</strong> When and how did you learn to make kymyz?</p>

        <p><strong>Guest:</strong> Mostly, it comes from family. I learned it from my parents when I was young, by watching them and helping out. It's something you mostly learn through practice.</p>

        <br />

        <p><strong>Interviewer:</strong> What does the process look like? Could you briefly describe it?</p>

        <p><strong>Guest:</strong> First, we milk the mare and collect fresh milk. Then we pour it into a container and add a starter culture. After that, it needs to be stirred several times during the day. Over time, it gradually ferments and turns into kymyz.</p>

        <br />

        <p><strong>Interviewer:</strong> What kind of changes happen during this process?</p>

        <p><strong>Guest:</strong> At the beginning, the milk is sweet, but gradually it becomes more sour. Foam appears, and gas is produced. You can't see what's happening exactly, but you can clearly notice the changes.</p>

        <br />

        <p><strong>Interviewer:</strong> Are there times when the kymyz doesn't turn out well? What does that depend on?</p>

        <p><strong>Guest:</strong> Yes, that happens. For example, it depends on the weather. If it's too hot, it ferments very quickly; if it's cooler, the process slows down. The starter is also very important because if it's not handled properly, the taste can change a lot.</p>

        <br />

        <p><strong>Interviewer:</strong> Do you see this as a scientific process, or more as something based on experience?</p>

        <p><strong>Guest:</strong> We don't usually call it science. We understand it through experience. After doing it for many years, you develop a sense of how it works. But if you think about it, it's actually quite close to science.</p>

        <br />

        <p><strong>Interviewer:</strong> What makes kymyz from Naryn different?</p>

        <p><strong>Guest:</strong> The pastures here are high, and the air is very clean. Also, the animals feed on good grass. All of that has an effect. The milk itself is different, and as a result, the taste of the kymyz is also unique.</p>

        <br />

        <p><strong>Interviewer:</strong> Thank you very much!</p>
      </motion.section>
    </div>
  );
}

export default Podcast;
