import './DigitalWallets.css';
import applePayLogo from '../assets/apple-pay.svg';

export const DigitalWallets = () => {
  return (
    <section className="section-padding bg-soft digital-wallets-section">
      <div className="container text-center">
        
        {/* Apple/Google Pay Row */}
        <div className="pay-pill-container mb-12">
          <div className="flex items-center gap-6">
            <img 
              src={applePayLogo} 
              alt="Apple Pay" 
              className="h-10 object-contain"
            />
            
            <div className="pay-logo">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                 {/* Google G Path */}
                 <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0 5.611 0 0 5.372 0 12s5.611 12 12.24 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
               </svg>
               <span className="font-medium ml-1 text-gray-600" style={{ fontSize: '1.4rem' }}>Pay</span>
            </div>
          </div>
        </div>


        {/* Favorite Wallets */}
        <div className="w-full flex flex-col items-center mb-20">
          <p className="text-secondary text-sm font-semibold mb-8 text-center">Works with your favorite wallets</p>
          <div className="logo-strip w-full max-w-5xl mx-auto">
            {/* MetaMask */}
            <div className="wallet-brand font-black text-2xl tracking-tighter leading-none" style={{ textAlign: 'left', letterSpacing: '-0.05em' }}>
              Meta<br/>Mask
            </div>
            {/* Trust Wallet */}
            <div className="wallet-brand font-bold text-2xl flex items-center gap-2" style={{ letterSpacing: '0.05em' }}>
              <svg width="28" height="28" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 10 L15 20 V50 C15 75 35 90 50 95 C65 90 85 75 85 50 V20 Z" />
              </svg> 
              TRUST
            </div>
            {/* Coinbase */}
            <div className="wallet-brand font-bold text-3xl tracking-tight">coinbase</div>
            {/* Phantom */}
            <div className="wallet-brand font-bold text-2xl flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 2.5 1 4.5 2 6l2 2V12c0-3.31 2.69-6 6-6s6 2.69 6 6v8l2-2c1-1.5 2-3.5 2-6 0-5.52-4.48-10-10-10zm-2 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
              </svg>
              phantom
            </div>
            {/* Ledger */}
            <div className="wallet-brand flex items-center text-2xl tracking-widest font-mono">
              <span className="opacity-50">[</span>
              <span className="font-bold mx-1">LEDGER</span>
              <span className="opacity-50">]</span>
            </div>
            {/* Exodus */}
            <div className="wallet-brand font-bold text-2xl flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              EXODUS
            </div>
          </div>
        </div>

        {/* Backers */}
        <div className="w-full flex flex-col items-center mt-20">
          <p className="text-secondary text-sm font-semibold mb-8 text-center">Our Backers</p>
          <div className="backers-grid w-full max-w-5xl mx-auto">
            <div className="backer-card">
              <span className="font-bold text-2xl tracking-tight">a16z<span className="font-normal">crypto</span></span>
            </div>
            <div className="backer-card">
              <div className="font-bold text-2xl flex items-center gap-2 font-serif">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1 21h22L12 2 1 21zm4-2l7-12 7 12H5z"/>
                </svg> Paradigm
              </div>
            </div>
            <div className="backer-card">
              <span className="font-bold text-2xl tracking-widest font-serif">SEQUOIA<span className="opacity-50 ml-1">❦</span></span>
            </div>
            <div className="backer-card">
              <span className="font-bold text-2xl tracking-widest flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1L19.1 4.9"/>
                </svg>
                PANTERA
              </span>
            </div>
            <div className="backer-card">
              <span className="font-bold text-2xl flex items-center gap-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="12" cy="4" r="2"/>
                  <circle cx="12" cy="20" r="2"/>
                  <circle cx="4" cy="12" r="2"/>
                  <circle cx="20" cy="12" r="2"/>
                  <circle cx="6" cy="6" r="1.5"/>
                  <circle cx="18" cy="18" r="1.5"/>
                  <circle cx="6" cy="18" r="1.5"/>
                  <circle cx="18" cy="6" r="1.5"/>
                </svg>
                BCAP
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
