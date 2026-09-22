import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { productConfig } from '../config/content';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

export const FAQ = () => {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section-padding bg-main">
      <div className="container">
        <h2 className="h2 text-center mb-12">FAQ</h2>
        
        <div className="faq-container">
          {productConfig.faq.map((key, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button 
                  className="faq-question" 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-lg">{t(`faq.${key}.q`)}</span>
                  <ChevronDown className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                </button>
                <div className="faq-answer-wrapper" style={{ maxHeight: isOpen ? '200px' : '0' }}>
                  <div className="faq-answer">
                    {t(`faq.${key}.a`)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
