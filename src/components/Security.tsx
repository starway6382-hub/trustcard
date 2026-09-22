import { useTranslation } from 'react-i18next';
import { ShieldCheck, Eye, Lock, Sliders, Activity } from 'lucide-react';
import './Security.css';

export const Security = () => {
  const { t } = useTranslation();

  const items = [
    { icon: Lock, key: 'security.items.connection' },
    { icon: Eye, key: 'security.items.transparent' },
    { icon: ShieldCheck, key: 'security.items.auth' },
    { icon: Sliders, key: 'security.items.controls' },
    { icon: Activity, key: 'security.items.visibility' }
  ];

  return (
    <section className="section-padding bg-lavender-pattern">
      <div className="container flex-security">
        <div className="security-text">
          <h2 className="h1 mb-8">{t('security.heading', 'Your crypto.\nYour control.')}</h2>
          <div className="security-list">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="security-item">
                  <div className="security-icon">
                    <Icon size={20} className="text-tw-blue" />
                  </div>
                  <span className="font-semibold text-lg">{t(item.key)}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="security-visual">
          <div className="shield-illustration">
             <ShieldCheck size={120} className="text-tw-blue opacity-20" />
             <div className="shield-overlay-card">
               <div className="overlay-row line-1"></div>
               <div className="overlay-row line-2"></div>
               <div className="overlay-row line-3"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
