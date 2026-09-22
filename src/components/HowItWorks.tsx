import { useTranslation } from 'react-i18next';
import './HowItWorks.css';

export const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    { num: '01', titleKey: 'howItWorks.step1.title', descKey: 'howItWorks.step1.desc' },
    { num: '02', titleKey: 'howItWorks.step2.title', descKey: 'howItWorks.step2.desc' },
    { num: '03', titleKey: 'howItWorks.step3.title', descKey: 'howItWorks.step3.desc' },
    { num: '04', titleKey: 'howItWorks.step4.title', descKey: 'howItWorks.step4.desc' }
  ];

  return (
    <section className="section-padding bg-main">
      <div className="container">
        <h2 className="h2 text-center mb-16">{t('howItWorks.heading', 'How it works')}</h2>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="timeline-step">
              <div className="step-number">{step.num}</div>
              <h3 className="h4 font-bold mt-6 mb-2">{t(step.titleKey)}</h3>
              <p className="text-secondary">{t(step.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
