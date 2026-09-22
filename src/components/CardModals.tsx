import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Check, ArrowRight, Sparkles, Plane, Headphones, BedDouble } from 'lucide-react';
import './CardModals.css';

type Step = 'selection' | 'email' | 'review' | 'network';
type CardTier = 'white' | 'blue' | 'metal';

interface CardModalsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CardModals: React.FC<CardModalsProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState<Step>('selection');
  const [selectedCard, setSelectedCard] = useState<CardTier>('white');
  const [email, setEmail] = useState('');
  const [network, setNetwork] = useState<'trc20' | 'bep20'>('trc20');

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 'selection') setStep('email');
    else if (step === 'email') setStep('review');
    else if (step === 'review') setStep('network');
    else if (step === 'network') {
      // Final activation logic
      alert('Payment initiated on ' + network.toUpperCase() + ' network for: ' + email + ' / ' + selectedCard);
      onClose();
      // Reset after close
      setTimeout(() => {
        setStep('selection');
        setEmail('');
      }, 300);
    }
  };

  const handleBack = () => {
    if (step === 'email') setStep('selection');
    if (step === 'review') setStep('email');
    if (step === 'network') setStep('review');
  };

  const renderSelection = () => (
    <>
      <div className="modal-header text-center">
        <h2 className="h2">{t('modal.issueTitle', 'Issue Card')}</h2>
        <p className="text-secondary">{t('modal.issueSubtitle', 'Select the card that suits your style.')}</p>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
      </div>
      
      <div className="card-options mt-6">
        {/* White Card */}
        <div 
          className={`card-option ${selectedCard === 'white' ? 'selected' : ''}`}
          onClick={() => setSelectedCard('white')}
        >
          <div className="card-preview white-card">
            <span className="logo-text">TRUST</span> <span className="text-xs">VIRTUAL</span>
            <div className="card-chip"></div>
          </div>
          <div className="card-info">
            <div className="card-title font-semibold">{t('modal.whiteCard.title', 'White')}</div>
            <p className="text-sm text-secondary">{t('modal.whiteCard.desc', 'Earn up to 5% back in BTC, ETH, or stablecoins on every purchase.')}</p>
          </div>
          <div className={`radio ${selectedCard === 'white' ? 'checked' : ''}`}>
            {selectedCard === 'white' && <Check size={14} className="text-white" />}
          </div>
        </div>

        {/* Blue Card */}
        <div 
          className={`card-option ${selectedCard === 'blue' ? 'selected' : ''}`}
          onClick={() => setSelectedCard('blue')}
        >
          <div className="card-preview blue-card">
            <span className="logo-text text-white">TRUST</span> <span className="text-xs text-white">VIRTUAL</span>
            <div className="card-chip"></div>
          </div>
          <div className="card-info">
            <div className="card-title font-semibold">{t('modal.blueCard.title', 'Blue')}</div>
            <p className="text-sm text-secondary">{t('modal.blueCard.desc', 'Earn up to 5% back in BTC, ETH, or stablecoins on every purchase.')}</p>
          </div>
          <div className={`radio ${selectedCard === 'blue' ? 'checked' : ''}`}>
            {selectedCard === 'blue' && <Check size={14} className="text-white" />}
          </div>
        </div>

        {/* Metal Card */}
        <div 
          className={`card-option ${selectedCard === 'metal' ? 'selected' : ''}`}
          onClick={() => setSelectedCard('metal')}
        >
          <div className="card-preview metal-card">
            <span className="logo-text text-white">TRUST</span> <span className="text-xs text-white">VIRTUAL</span>
            <div className="card-chip dark"></div>
          </div>
          <div className="card-info">
            <div className="card-title font-semibold flex items-center gap-2">
              {t('modal.metalCard.title', 'Metal')}
              <span className="badge-sm text-tw-blue">{t('modal.metalCard.badge', '$20K+')}</span>
            </div>
            <p className="text-sm text-secondary">{t('modal.metalCard.desc', 'Hold $20,000 or more in your portfolio and receive the physical metal card.')}</p>
          </div>
          <div className={`radio ${selectedCard === 'metal' ? 'checked' : ''}`}>
            {selectedCard === 'metal' && <Check size={14} className="text-white" />}
          </div>
        </div>
      </div>

      <button className="btn btn-primary w-full mt-6" onClick={handleNext}>
        {t('modal.continue', 'Continue →')}
      </button>
    </>
  );

  const renderEmail = () => (
    <>
      <div className="modal-header text-center">
        <h2 className="h2">{t('modal.emailTitle', 'Your email')}</h2>
        <p className="text-secondary">{t('modal.emailSubtitle', 'Enter your email to continue to card activation.')}</p>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
        {/* Mock back button */}
      </div>

      <div className="email-input-group mt-6">
        <label className="text-sm font-medium">{t('modal.emailLabel', 'Email')}</label>
        <input 
          type="email" 
          className="email-input mt-2" 
          placeholder={t('modal.emailPlaceholder', 'you@gmail.com')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button className="btn btn-primary w-full mt-8" onClick={handleNext} disabled={!email || !email.includes('@gmail.com')}>
        {t('modal.continue', 'Continue →')}
      </button>
    </>
  );

  const renderReview = () => (
    <>
      <div className="modal-header text-center">
        <div className="review-success mb-4 mx-auto">
          <Check size={24} className="text-success" />
        </div>
        <h2 className="h2 flex justify-center items-center gap-2">
          {t('modal.readyToIssue', 'Ready to issue.')}
        </h2>
        <p className="text-secondary mt-2">{t('modal.reviewSubtitle', 'Review your card before issuance.')}</p>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
      </div>

      <div className="review-summary mt-6">
        <div className="summary-row">
          <span className="text-secondary">{t('modal.card', 'Card')}</span>
          <span className="font-semibold capitalize">{t(`modal.${selectedCard}Card.title`, selectedCard)}</span>
        </div>
        <div className="summary-row">
          <span className="text-secondary">{t('modal.cashback', 'Cashback')}</span>
          <span className="font-semibold">Up to 5%</span>
        </div>
        <div className="summary-row">
          <span className="text-secondary">{t('modal.cost', 'Cost')}</span>
          <span className="font-semibold">
            {selectedCard === 'white' && '$20'}
            {selectedCard === 'blue' && '$49'}
            {selectedCard === 'metal' && '$99'}
          </span>
        </div>
        <div className="summary-row">
          <span className="text-secondary">{t('modal.spendingLimit', 'Spending Limit')}</span>
          <span className="font-semibold">
            {selectedCard === 'white' && '$1,000 / month'}
            {selectedCard === 'blue' && '$3,000 / month'}
            {selectedCard === 'metal' && '$10,000 / month'}
          </span>
        </div>
      </div>

      <div className="perks-section mt-6 text-center">
        <p className="text-xs font-bold text-secondary tracking-widest mb-4">
          {t('modal.includedPerks', 'INCLUDED PERKS')}
        </p>
        <div className="perks-grid">
          {selectedCard === 'white' && (
            <>
              <div className="perk-item">
                <Headphones size={16} className="text-purple-500" />
                <span className="font-medium text-sm">{t('modal.perks.priority', 'Priority support')}</span>
              </div>
              <div className="perk-item">
                <Sparkles size={16} className="text-tw-blue" />
                <span className="font-medium text-sm">{t('modal.perks.virtual', 'Virtual access')}</span>
              </div>
            </>
          )}
          {selectedCard === 'blue' && (
            <>
              <div className="perk-item">
                <Headphones size={16} className="text-purple-500" />
                <span className="font-medium text-sm">{t('modal.perks.priority', 'Priority support')}</span>
              </div>
              <div className="perk-item">
                <Sparkles size={16} className="text-orange-500" />
                <span className="font-medium text-sm">{t('modal.perks.claudePro', 'Claude Pro')}</span>
              </div>
            </>
          )}
          {selectedCard === 'metal' && (
            <>
              <div className="perk-item">
                <Sparkles size={16} className="text-orange-500" />
                <span className="font-medium text-sm">{t('modal.perks.claudePro', 'Claude Pro')}</span>
              </div>
              <div className="perk-item">
                <Plane size={16} className="text-tw-blue" />
                <span className="font-medium text-sm">{t('modal.perks.lounges', 'Airport lounges')}</span>
              </div>
              <div className="perk-item">
                <Headphones size={16} className="text-purple-500" />
                <span className="font-medium text-sm">{t('modal.perks.concierge', '24/7 concierge')}</span>
              </div>
              <div className="perk-item">
                <BedDouble size={16} className="text-blue-400" />
                <span className="font-medium text-sm">{t('modal.perks.hotel', 'Hotel upgrades')}</span>
              </div>
            </>
          )}
        </div>
      </div>

      <button className="btn btn-primary w-full mt-8" onClick={handleNext}>
        {t('modal.activateBtn', 'Activate your card →')}
      </button>
    </>
  );

  const renderNetwork = () => (
    <>
      <div className="modal-header text-center">
        <h2 className="h2">{t('modal.networkTitle', 'Select Network')}</h2>
        <p className="text-secondary">{t('modal.networkSubtitle', 'Choose your preferred network to make the payment.')}</p>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
      </div>

      <div className="network-options mt-6 flex flex-col gap-3">
        {/* TRC20 */}
        <div 
          className={`card-option ${network === 'trc20' ? 'selected' : ''}`}
          onClick={() => setNetwork('trc20')}
        >
          <div className="card-info ml-2">
            <div className="card-title font-semibold">Tron (TRC20)</div>
          </div>
          <div className={`radio ${network === 'trc20' ? 'checked' : ''}`}>
            {network === 'trc20' && <Check size={14} className="text-white" />}
          </div>
        </div>

        {/* BEP20 */}
        <div 
          className={`card-option ${network === 'bep20' ? 'selected' : ''}`}
          onClick={() => setNetwork('bep20')}
        >
          <div className="card-info ml-2">
            <div className="card-title font-semibold">BNB Smart Chain (BEP20)</div>
          </div>
          <div className={`radio ${network === 'bep20' ? 'checked' : ''}`}>
            {network === 'bep20' && <Check size={14} className="text-white" />}
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-secondary font-medium px-2">
          You will be redirected to your Trust Wallet to make the payment.
        </p>
      </div>

      <button className="btn btn-primary w-full mt-4" onClick={handleNext}>
        {t('modal.payBtn', 'Proceed to Payment →')}
      </button>
    </>
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {step !== 'selection' && (
          <button className="back-btn absolute top-6 left-6" onClick={handleBack}>
            <ArrowRight size={20} className="rotate-180" />
          </button>
        )}
        {step === 'selection' && renderSelection()}
        {step === 'email' && renderEmail()}
        {step === 'review' && renderReview()}
        {step === 'network' && renderNetwork()}
      </div>
    </div>
  );
};
