import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CssCard } from './CssCard';
import './CardShowcase.css';

interface CardShowcaseProps {
  onIssueCard: () => void;
}

export const CardShowcase: React.FC<CardShowcaseProps> = ({ onIssueCard }) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<'white'|'blue'|'metal'>('white');

  return (
    <section className="section-padding bg-soft">
      <div className="container text-center">
        <h2 className="h2 mb-4">{t('modal.issueSubtitle', 'Choose the card that suits your style.')}</h2>
        <p className="text-xl text-secondary mb-16 max-w-2xl mx-auto">
          From completely free virtual cards to premium metal editions, find the perfect fit for your crypto journey.
        </p>

        <div className="showcase-grid">
          {/* White Card */}
          <div className={`showcase-card ${selected === 'white' ? 'active' : ''}`} onClick={() => setSelected('white')}>
             <div className="showcase-visual"><CssCard tier="white" /></div>
             <h3 className="h4 font-bold mt-6 mb-2">{t('modal.whiteCard.title')}</h3>
             <p className="text-secondary text-sm mb-6">{t('modal.whiteCard.desc')}</p>
             <button className={`btn w-full ${selected === 'white' ? 'btn-primary' : 'btn-secondary'}`} onClick={(e) => { e.stopPropagation(); onIssueCard(); }}>
               {t('hero.ctaPrimary', 'Issue Card →')}
             </button>
          </div>
          
          {/* Blue Card */}
          <div className={`showcase-card ${selected === 'blue' ? 'active' : ''}`} onClick={() => setSelected('blue')}>
             <div className="showcase-visual"><CssCard tier="blue" /></div>
             <h3 className="h4 font-bold mt-6 mb-2">{t('modal.blueCard.title')}</h3>
             <p className="text-secondary text-sm mb-6">{t('modal.blueCard.desc')}</p>
             <button className={`btn w-full ${selected === 'blue' ? 'btn-primary' : 'btn-secondary'}`} onClick={(e) => { e.stopPropagation(); onIssueCard(); }}>
               {t('hero.ctaPrimary', 'Issue Card →')}
             </button>
          </div>

          {/* Metal Card */}
          <div className={`showcase-card ${selected === 'metal' ? 'active' : ''}`} onClick={() => setSelected('metal')}>
             <div className="showcase-visual"><CssCard tier="metal" /></div>
             <h3 className="h4 font-bold mt-6 mb-2 flex items-center justify-center gap-2">
               {t('modal.metalCard.title')}
               <span className="badge-sm text-tw-blue">{t('modal.metalCard.badge')}</span>
             </h3>
             <p className="text-secondary text-sm mb-6">{t('modal.metalCard.desc')}</p>
             <button className={`btn w-full ${selected === 'metal' ? 'btn-primary' : 'btn-secondary'}`} onClick={(e) => { e.stopPropagation(); onIssueCard(); }}>
               {t('hero.ctaPrimary', 'Issue Card →')}
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};
