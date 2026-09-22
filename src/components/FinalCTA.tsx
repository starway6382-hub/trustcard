import { useTranslation } from 'react-i18next';
import './FinalCTA.css';

interface FinalCTAProps {
  onIssueCard: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onIssueCard }) => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-lavender-pattern cta-section">
      <div className="container text-center">
        <h2 className="h1 mb-6 max-w-3xl mx-auto">{t('finalCta.heading', 'Ready to spend crypto differently?')}</h2>
        <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto">
          {t('finalCta.supporting', 'Choose your card and get started.')}
        </p>
        <button className="btn btn-primary btn-large" onClick={onIssueCard}>
          {t('hero.ctaPrimary', 'Issue Card →')}
        </button>
      </div>
    </section>
  );
};
