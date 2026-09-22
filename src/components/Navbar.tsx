import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import './Navbar.css';

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'en-US', name: 'English (US)', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' }
];

interface NavbarProps {
  onIssueCard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onIssueCard }) => {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Logo />

        <div className="navbar-center-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#rewards" className="nav-link">Rewards</a>
          <a href="#premium" className="nav-link">Premium</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>

        <div className="navbar-actions">
          <div className="lang-selector" ref={dropdownRef}>
            <button 
              className="lang-btn"
              onClick={() => setLangOpen(!langOpen)}
            >
              <span className="lang-flag">{currentLang.flag}</span>
              <span className="lang-name">{currentLang.name}</span>
              <ChevronDown size={16} className={`lang-chevron ${langOpen ? 'open' : ''}`} />
            </button>

            {langOpen && (
              <div className="lang-dropdown">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-option ${i18n.language === lang.code ? 'active' : ''}`}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setLangOpen(false);
                    }}
                  >
                    <span className="lang-flag">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="btn btn-primary btn-sm ml-4" onClick={onIssueCard}>
            {t('nav.getStarted', 'Issue Card →')}
          </button>
        </div>
      </div>
    </nav>
  );
};
