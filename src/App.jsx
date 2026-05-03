import { useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Article from './pages/Article.jsx';
import Video from './pages/Video.jsx';
import Podcast from './pages/Podcast.jsx';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function App() {
  const location = useLocation();
  const pageKey = useMemo(() => location.pathname, [location.pathname]);

  return (
    <LanguageProvider>
      <div className="app-shell">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={pageKey}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/article" element={<Article />} />
              <Route path="/video" element={<Video />} />
              <Route path="/podcast" element={<Podcast />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
