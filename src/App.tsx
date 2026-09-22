import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CardModals } from './components/CardModals';

import { Features } from './components/Features';
import { DigitalWallets } from './components/DigitalWallets';
import { Rewards } from './components/Rewards';
import { PremiumCardSection } from './components/PremiumCardSection';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CardShowcase } from './components/CardShowcase';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-lavender-pattern">
      <Navbar onIssueCard={() => setIsModalOpen(true)} />
      <Hero onIssueCard={() => setIsModalOpen(true)} />
      <CardShowcase onIssueCard={() => setIsModalOpen(true)} />
      <Features />
      <DigitalWallets />
      <Rewards />
      <PremiumCardSection />
      <HowItWorks />
      <FAQ />
      <FinalCTA onIssueCard={() => setIsModalOpen(true)} />
      <Footer />
      <CardModals isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ScrollToTop />
    </div>
  );
}

export default App;
