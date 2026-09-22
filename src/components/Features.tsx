import { Wallet, Globe, Smartphone, Shield, Zap, Gift } from 'lucide-react';
import './Features.css';

export const Features = () => {
  return (
    <section className="section-padding bg-main" id="features">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-bold text-tw-blue tracking-widest mb-4">
            Features
          </p>
          <h2 className="h2 mb-4" style={{ letterSpacing: '-0.03em' }}>
            Everything you need. Nothing you don't.
          </h2>
          <p className="text-xl text-secondary">
            Built for the modern crypto user. Every feature designed to make your life easier.
          </p>
        </div>

        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Wallet size={20} className="text-tw-blue" />
            </div>
            <h3 className="h4 mt-6 mb-3 font-bold text-xl">Direct Wallet Integration</h3>
            <p className="text-secondary text-base leading-relaxed">
              Connect your wallet directly. Spend from your crypto balance with seamless integration.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Globe size={20} className="text-tw-blue" />
            </div>
            <h3 className="h4 mt-6 mb-3 font-bold text-xl">Global Acceptance</h3>
            <p className="text-secondary text-base leading-relaxed">
              Accepted at 80+ million merchants worldwide. Use it anywhere Visa and Mastercard are accepted.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Smartphone size={20} className="text-tw-blue" />
            </div>
            <h3 className="h4 mt-6 mb-3 font-bold text-xl">Apple Pay & Google Pay</h3>
            <p className="text-secondary text-base leading-relaxed">
              Add to your digital wallet for contactless payments. Tap to pay with your phone or watch.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Shield size={20} className="text-tw-blue" />
            </div>
            <h3 className="h4 mt-6 mb-3 font-bold text-xl">Bank-Grade Security</h3>
            <p className="text-secondary text-base leading-relaxed">
              256-bit encryption, biometric authentication, and real-time fraud monitoring protect every transaction.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Zap size={20} className="text-tw-blue" />
            </div>
            <h3 className="h4 mt-6 mb-3 font-bold text-xl">Instant Approvals</h3>
            <p className="text-secondary text-base leading-relaxed">
              Get approved in seconds, not days. No credit checks, no paperwork. Just connect your wallet.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Gift size={20} className="text-tw-blue" />
            </div>
            <h3 className="h4 mt-6 mb-3 font-bold text-xl">Crypto Rewards</h3>
            <p className="text-secondary text-base leading-relaxed">
              Earn up to 5% back in BTC, ETH, or stablecoins on every purchase. Stack sats while you spend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
