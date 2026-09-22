import { useTranslation } from 'react-i18next';
import { productConfig } from '../config/content';
import { Logo } from './Logo';
import './Footer.css';

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-main">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo className="mb-6" />
            <p className="text-secondary max-w-sm">
              {t('footer.desc', 'The future of crypto payments. Spend supported digital assets through your card.')}
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4 className="font-bold mb-6 text-sm tracking-widest">{t('footer.product', 'PRODUCT')}</h4>
            <ul>
              <li><a href="#">{t('nav.features', 'Features')}</a></li>
              <li><a href="#">{t('nav.rewards', 'Rewards')}</a></li>
              <li><a href="#">{t('nav.faq', 'FAQ')}</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4 className="font-bold mb-6 text-sm tracking-widest">{t('footer.legal', 'LEGAL')}</h4>
            <ul>
              {productConfig.legalLinks.map((link, idx) => (
                <li key={idx}><a href={link.url}>{t(`footer.links.${link.key}`)}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="text-sm text-secondary">© {year} Trust Wallet Affiliate. All rights reserved.</p>
          <div className="footer-social">
            {Object.keys(productConfig.socialLinks).map((social, idx) => (
              <a key={idx} href={productConfig.socialLinks[social as keyof typeof productConfig.socialLinks]} className="social-link">
                <span className="capitalize">{social}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
