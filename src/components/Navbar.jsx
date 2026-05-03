import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Article', to: '/article' },
  { label: 'Video', to: '/video' },
  { label: 'Podcast', to: '/podcast' },
];

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, currentLanguage, switchLanguage } = useLanguage();

  const links = [
    { label: t('home'), to: '/' },
    { label: t('article'), to: '/article' },
    { label: t('video'), to: '/video' },
    { label: t('podcast'), to: '/podcast' },
  ];

  return (
    <header className="navbar-shell">
      <div className="navbar-inner">
        <motion.div
          className="brand"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="brand-mark">S</span>
          <span>{t('brand')}</span>
        </motion.div>

        <nav className="nav-links desktop-only">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active-link' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="language-switcher">
          <button
            className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
            onClick={() => switchLanguage('en')}
            title="English"
          >
            🇬🇧
          </button>
          <button
            className={`lang-btn ${currentLanguage === 'ky' ? 'active' : ''}`}
            onClick={() => switchLanguage('ky')}
            title="Кыргызча"
          >
            🇰🇬
          </button>
        </div>

        <button
          className="menu-toggle mobile-only"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Open navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="nav-links mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.25 }}
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active-link' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
