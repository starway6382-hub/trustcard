import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Sparkles } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onIssueCard: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onIssueCard }) => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="container hero-layout">
        
        <div className="hero-content">
          <div className="hero-badge mb-6">
            <Sparkles size={16} className="text-tw-blue" />
            <span className="font-semibold text-tw-blue">{t('hero.badge', 'Now Available Worldwide')}</span>
          </div>

          <h1 className="h1 mb-6 hero-title">
            Spend Crypto <br/>
            Like Cash. <br/>
            <span className="text-tw-blue">Everywhere.</span>
          </h1>
          
          <p className="text-xl text-secondary mb-10 hero-subtitle">
            The first card that connects directly to your crypto wallet. Spend from your wallet without account top-ups or verification.
          </p>

          <div className="hero-actions mb-12">
            <button className="btn btn-primary" onClick={onIssueCard}>
              Issue Card &rarr;
            </button>
            <button className="btn btn-secondary">
              Learn More
            </button>
          </div>

          <div className="hero-checks">
            <div className="check-item">
              <CheckCircle2 size={20} className="check-icon" />
              <span>No KYC</span>
            </div>
            <div className="check-item">
              <CheckCircle2 size={20} className="check-icon" />
              <span>Instant Approval</span>
            </div>
            <div className="check-item">
              <CheckCircle2 size={20} className="check-icon" />
              <span>Zero Annual Fee</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-wrapper">
          {/* Using a placeholder path so the user can easily replace it with their provided image */}
          <img 
            src="/hero-image.png" 
            alt="Please save the attached image to public/hero-image.png" 
            className="hero-image-render"
          />
        </div>

      </div>
    </section>
  );
};
