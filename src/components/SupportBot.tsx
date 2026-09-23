import { useState, useEffect } from 'react';
import './SupportBot.css';

/* Reusable person SVG avatar — friendly female support agent */
const PersonAvatar = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background circle */}
    <circle cx="50" cy="50" r="50" fill="#0047FF"/>
    {/* Hair */}
    <ellipse cx="50" cy="36" rx="26" ry="24" fill="#1E293B"/>
    <ellipse cx="50" cy="28" rx="24" ry="18" fill="#1E293B"/>
    {/* Hair sides flowing down */}
    <ellipse cx="28" cy="48" rx="8" ry="16" fill="#1E293B"/>
    <ellipse cx="72" cy="48" rx="8" ry="16" fill="#1E293B"/>
    {/* Face */}
    <ellipse cx="50" cy="46" rx="20" ry="22" fill="#FBBF77"/>
    {/* Eyes */}
    <ellipse cx="42" cy="44" rx="3.2" ry="3.5" fill="#1E293B"/>
    <ellipse cx="58" cy="44" rx="3.2" ry="3.5" fill="#1E293B"/>
    {/* Eye shine */}
    <circle cx="43.2" cy="42.8" r="1.2" fill="white"/>
    <circle cx="59.2" cy="42.8" r="1.2" fill="white"/>
    {/* Eyebrows */}
    <path d="M37 38 Q42 35 47 38" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path d="M53 38 Q58 35 63 38" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    {/* Nose */}
    <path d="M48 49 Q50 52 52 49" stroke="#E8A855" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    {/* Smile */}
    <path d="M42 54 Q50 62 58 54" stroke="#C0392B" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    {/* Lips fill */}
    <path d="M42 54 Q50 62 58 54 Q50 58 42 54" fill="#E74C3C" opacity="0.7"/>
    {/* Blush */}
    <circle cx="36" cy="52" r="3.5" fill="#F4A7A7" opacity="0.5"/>
    <circle cx="64" cy="52" r="3.5" fill="#F4A7A7" opacity="0.5"/>
    {/* Body / shirt collar */}
    <path d="M24 82 Q26 68 50 68 Q74 68 76 82 L80 100 L20 100 Z" fill="white"/>
    {/* Collar line */}
    <path d="M40 68 L50 78 L60 68" stroke="#E2E8F0" strokeWidth="1.5" fill="none"/>
    {/* Headset */}
    <path d="M26 40 Q26 22 50 22 Q74 22 74 40" stroke="#64748B" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <rect x="22" y="38" width="8" height="12" rx="4" fill="#64748B"/>
    <rect x="70" y="38" width="8" height="12" rx="4" fill="#64748B"/>
    {/* Headset mic arm */}
    <path d="M22 48 Q18 52 20 58" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <circle cx="20" cy="59" r="3" fill="#64748B"/>
  </svg>
);

export const SupportBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [hasAutoGreeted, setHasAutoGreeted] = useState(false);

  // Auto-show greeting after 5 seconds on first visit
  useEffect(() => {
    if (!hasAutoGreeted) {
      const timer = setTimeout(() => {
        setShowGreeting(true);
        setHasAutoGreeted(true);
        // Auto-hide after 6 seconds
        setTimeout(() => setShowGreeting(false), 6000);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [hasAutoGreeted]);

  const handleBotClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setShowGreeting(false);
    } else {
      setIsOpen(false);
    }
  };

  const handleSupportClick = () => {
    window.open('https://t.me/trustwalletcardpay_bot', '_blank');
    setIsOpen(false);
  };

  return (
    <div className="support-bot-wrapper">
      {/* Auto-greeting bubble */}
      {showGreeting && !isOpen && (
        <div className="bot-greeting-bubble" onClick={handleBotClick}>
          <div className="greeting-text">
            👋 Hi there! Need help with your Trust Wallet Card?
          </div>
          <button className="greeting-close" onClick={(e) => { e.stopPropagation(); setShowGreeting(false); }}>×</button>
        </div>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="bot-chat-panel">
          <div className="bot-chat-header">
            <div className="bot-chat-header-left">
              <div className="bot-avatar-small">
                <PersonAvatar size={32} />
              </div>
              <div>
                <div className="bot-chat-name">Trust Wallet Bot</div>
                <div className="bot-chat-status">
                  <span className="status-dot"></span>
                  Online
                </div>
              </div>
            </div>
            <button className="bot-chat-close" onClick={() => setIsOpen(false)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div className="bot-chat-body">
            <div className="bot-message-row">
              <div className="bot-msg-avatar">
                <PersonAvatar size={28} />
              </div>
              <div className="bot-message">
                <p>Hey there! 👋</p>
                <p>I'm <strong>Trust Wallet Bot</strong>, your personal support assistant!</p>
              </div>
            </div>

            <div className="bot-message-row delay-1">
              <div className="bot-msg-avatar">
                <PersonAvatar size={28} />
              </div>
              <div className="bot-message">
                <p>Have questions about your card, rewards, or anything else? Our support team is here 24/7 on Telegram! 💬</p>
              </div>
            </div>
          </div>

          <div className="bot-chat-footer">
            <button className="bot-telegram-btn" onClick={handleSupportClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Chat with Support on Telegram
            </button>
          </div>
        </div>
      )}

      {/* Floating button — person avatar */}
      <button
        className={`support-bot-btn ${isOpen ? 'active' : ''}`}
        onClick={handleBotClick}
        aria-label="Open support chat"
        id="support-bot-trigger"
      >
        <div className="bot-btn-face">
          {isOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <PersonAvatar size={42} />
          )}
        </div>
        {!isOpen && <span className="bot-pulse"></span>}
        {!isOpen && <span className="bot-pulse delay"></span>}
      </button>
    </div>
  );
};
