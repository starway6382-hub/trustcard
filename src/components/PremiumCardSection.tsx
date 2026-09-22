import { useTranslation } from 'react-i18next';
import { CssCard } from './CssCard';
import './PremiumCardSection.css';

export const PremiumCardSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-main overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="h1 mb-6 max-w-3xl">
            {t('premiumCard.heading', 'Made for modern crypto spending.')}
          </h2>
          <p className="text-xl text-secondary mb-16">
            {t('premiumCard.supporting', 'Premium design, simple crypto payments.')}
          </p>
          
          <div className="premium-card-showcase">
             <CssCard tier="metal" className="massive-metal-card" />
             <div className="ambient-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
