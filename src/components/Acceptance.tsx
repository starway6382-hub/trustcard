import { useTranslation } from 'react-i18next';
import './Acceptance.css';

export const Acceptance = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <div className="container">
        <div className="acceptance-card">
          <div className="acceptance-content">
            <h2 className="h2 mb-4 text-white">{t('acceptance.heading', 'Spend wherever you go.')}</h2>
            <p className="text-xl text-white opacity-80 mb-8 max-w-xl">
              {t('acceptance.supporting', 'Use your card wherever the supported payment network is accepted.')}
            </p>
            
            <div className="metric-box">
              <div className="metric-value">{t('acceptance.metric', '80M+')}</div>
              <div className="metric-label">{t('acceptance.metricLabel', 'Supported locations')}</div>
            </div>
          </div>
          
          <div className="acceptance-visual">
            <div className="globe-mock"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
