
import { Sparkles } from 'lucide-react';
import './Rewards.css';

export const Rewards = () => {
  return (
    <section className="section-padding bg-main" id="rewards">
      <div className="container">
        
        <div className="rewards-layout">
          <div className="rewards-text">
            <div className="inline-block bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm text-sm font-semibold text-tw-blue mb-8 flex items-center gap-2" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
              <span style={{ fontSize: '16px' }}>✨</span> Rewards
            </div>
            <h2 className="h1 mb-6" style={{ letterSpacing: '-0.04em' }}>
              Earn crypto on every swipe.
            </h2>
            <p className="text-xl text-secondary mb-12 max-w-lg leading-relaxed">
              Turn everyday purchases into portfolio growth. Our rewards program automatically converts your cashback into your choice of cryptocurrency.
            </p>

            <div className="progress-bars">
              {/* Bar 1 */}
              <div className="progress-item">
                <div className="progress-header">
                  <span className="font-bold text-2xl text-tw-blue">3%</span>
                  <span className="text-secondary font-medium">Dining & Travel</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill bg-tw-blue" style={{ width: '100%' }}></div>
                </div>
              </div>

              {/* Bar 2 */}
              <div className="progress-item">
                <div className="progress-header">
                  <span className="font-bold text-2xl text-tw-blue">2%</span>
                  <span className="text-secondary font-medium">Online Shopping</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill bg-tw-blue" style={{ width: '66%' }}></div>
                </div>
              </div>

              {/* Bar 3 */}
              <div className="progress-item">
                <div className="progress-header">
                  <span className="font-bold text-2xl text-tw-blue">1%</span>
                  <span className="text-secondary font-medium">Everything Else</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill bg-tw-blue" style={{ width: '33%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="rewards-visual">
            <div className="rewards-grid-2x2">
              <div className="reward-coin-card">
                <div className="coin-icon bg-red-50 text-red-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12l10 10 10-10L12 2zm0 14.5L6.5 12 12 7.5l5.5 4.5-5.5 4.5z"/></svg>
                </div>
                <div className="font-bold text-xl mt-4">Tron</div>
                <div className="text-secondary text-sm">Up to 3% back</div>
              </div>
              <div className="reward-coin-card">
                <div className="coin-icon bg-gray-50 text-gray-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.22l7.365 4.354 7.365-4.35L12.056 0z"/></svg>
                </div>
                <div className="font-bold text-xl mt-4">Ethereum</div>
                <div className="text-secondary text-sm">Up to 3% back</div>
              </div>
              <div className="reward-coin-card">
                <div className="coin-icon bg-yellow-50 text-yellow-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.9l-7.3-4.2V8.3L12 4l7.3 4.3v8.4l-7.3 4.2zm-5.3-5.3l5.3 3.1 5.3-3.1v-6.2l-5.3-3-5.3 3v6.2z"/></svg>
                </div>
                <div className="font-bold text-xl mt-4">BSC</div>
                <div className="text-secondary text-sm">Up to 2% back</div>
              </div>
              <div className="reward-coin-card">
                <div className="coin-icon bg-purple-50 text-purple-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 13.5l-4.5 2.6-4.5-2.6v-5.2l4.5-2.6 4.5 2.6v5.2z"/></svg>
                </div>
                <div className="font-bold text-xl mt-4">Polygon</div>
                <div className="text-secondary text-sm">Up to 4% back</div>
              </div>
              
              <div className="max-badge">
                <Sparkles size={18} fill="currentColor" style={{ color: '#FCD34D' }} />
                <span style={{ fontSize: '1.6rem', fontWeight: 800, lineHeight: 1 }}>5%</span>
                <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', opacity: 0.85 }}>MAX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
