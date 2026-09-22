

export const Logo = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldGrad" x1="50" y1="20" x2="100" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#0047FF" />
        </linearGradient>
      </defs>
      {/* Left side - solid deep blue */}
      <path d="M50 10 L15 20 V50 C15 75 35 90 50 95 V10 Z" fill="#0022FF" />
      {/* Right side - gradient green to blue */}
      <path d="M50 10 L85 20 V50 C85 75 65 90 50 95 V10 Z" fill="url(#shieldGrad)" />
    </svg>
    <div className="flex" style={{ color: '#0022FF', fontSize: '24px', letterSpacing: '-0.5px' }}>
      <span style={{ fontWeight: 900 }}>TRUST</span>
      <span style={{ fontWeight: 300, marginLeft: '4px', letterSpacing: '1px' }}>WALLET</span>
    </div>
  </div>
);
