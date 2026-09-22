
type CardTier = 'white' | 'blue' | 'metal';

interface CssCardProps {
  tier: CardTier;
  className?: string;
  style?: React.CSSProperties;
}

export const CssCard: React.FC<CssCardProps> = ({ tier, className = '', style }) => {
  return (
    <div className={`css-card card-${tier} ${className}`} style={style}>
      <div className="card-top flex justify-between items-start">
        <div className="card-logo flex items-center gap-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="currentColor" opacity="0.9"/>
          </svg>
          TRUST
        </div>
        <div style={{ fontSize: '0.6em', opacity: 0.6, fontWeight: 700, letterSpacing: '1px' }}>VIRTUAL</div>
      </div>
      
      <div className="card-chip"></div>
      
      <div className="card-details">
        <div>**** **** **** {tier === 'white' ? '0366' : tier === 'blue' ? '0452' : '9010'}</div>
      </div>
    </div>
  );
};
