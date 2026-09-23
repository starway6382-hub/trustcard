import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';
import './Footer.css';

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-main">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Logo className="mb-6" />
            <p className="text-secondary max-w-sm" style={{ lineHeight: 1.7 }}>
              {t('footer.desc', 'The future of crypto payments. Spend supported digital assets through your card.')}
            </p>
            <div className="footer-social mt-6">
              <a href="https://x.com/TrustWallet" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Twitter/X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://t.me/trustwalletcardpay_bot" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Telegram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Product Links */}
          <div className="footer-links-group">
            <h4 className="font-bold mb-6 text-sm tracking-widest">{t('footer.product', 'PRODUCT')}</h4>
            <ul>
              <li><a href="#features">{t('nav.features', 'Features')}</a></li>
              <li><a href="#rewards">{t('nav.rewards', 'Rewards')}</a></li>
              <li><a href="#faq">{t('nav.faq', 'FAQ')}</a></li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div className="footer-links-group">
            <h4 className="font-bold mb-6 text-sm tracking-widest">{t('footer.legal', 'LEGAL')}</h4>
            <ul>
              <li><a href="#privacy-policy">{t('footer.links.privacy', 'Privacy Policy')}</a></li>
              <li><a href="#terms-of-service">{t('footer.links.terms', 'Terms of Service')}</a></li>
              <li><a href="#cookie-policy">{t('footer.links.cookie', 'Cookie Policy')}</a></li>
              <li><a href="#aml-policy">{t('footer.links.aml', 'AML Policy')}</a></li>
              <li><a href="#risk-disclosure">{t('footer.links.risk', 'Risk Disclosure')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-links-group">
            <h4 className="font-bold mb-6 text-sm tracking-widest">{t('footer.support', 'SUPPORT')}</h4>
            <ul>
              <li>
                <a href="https://t.me/trustwalletcardpay_bot" target="_blank" rel="noopener noreferrer">
                  {t('footer.links.help', 'Help Center')}
                </a>
              </li>
              <li>
                <a href="https://t.me/trustwalletcardpay_bot" target="_blank" rel="noopener noreferrer">
                  {t('footer.links.contact', 'Contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="text-sm text-secondary">© {year} Trust Wallet Affiliate. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy-policy" className="text-sm text-secondary">Privacy</a>
            <span className="footer-dot">·</span>
            <a href="#terms-of-service" className="text-sm text-secondary">Terms</a>
            <span className="footer-dot">·</span>
            <a href="#cookie-policy" className="text-sm text-secondary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
