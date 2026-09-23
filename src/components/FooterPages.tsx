import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';
import './FooterPages.css';

type PageId = 'privacy-policy' | 'terms-of-service' | 'cookie-policy' | 'aml-policy' | 'risk-disclosure' | null;

const pageContent: Record<string, { title: string; lastUpdated: string; sections: { heading: string; content: string }[] }> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    lastUpdated: 'September 2026',
    sections: [
      {
        heading: 'Information We Collect',
        content: 'We collect information you provide directly to us, including your name, email address, wallet address, and transaction data when you use our crypto card services. We also automatically collect certain information about your device and usage patterns to improve our services.'
      },
      {
        heading: 'How We Use Your Information',
        content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and comply with legal obligations. Your transaction data is processed securely and in accordance with applicable financial regulations.'
      },
      {
        heading: 'Information Sharing',
        content: 'We do not sell your personal information. We may share information with third-party service providers who assist in our operations, payment processors, and when required by law or to protect our legal rights. All third parties are bound by confidentiality obligations.'
      },
      {
        heading: 'Data Security',
        content: 'We implement industry-standard security measures including 256-bit encryption, secure socket layer technology, and regular security audits to protect your personal information. Your wallet keys are never stored on our servers.'
      },
      {
        heading: 'Your Rights',
        content: 'You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, please contact our support team through our official Telegram channel.'
      },
      {
        heading: 'Cookies & Tracking',
        content: 'We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver personalized content. You can manage your cookie preferences through your browser settings. See our Cookie Policy for more details.'
      }
    ]
  },
  'terms-of-service': {
    title: 'Terms of Service',
    lastUpdated: 'September 2026',
    sections: [
      {
        heading: 'Acceptance of Terms',
        content: 'By accessing or using Trust Wallet Card services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and Trust Wallet Card.'
      },
      {
        heading: 'Eligibility',
        content: 'You must be at least 18 years old and have the legal capacity to enter into a binding agreement to use our services. You must also reside in a jurisdiction where cryptocurrency transactions are permitted by law. We reserve the right to verify your identity and eligibility.'
      },
      {
        heading: 'Card Services',
        content: 'Our card services allow you to spend cryptocurrency at merchants worldwide. Transactions are converted from crypto to fiat currency at the point of sale at the prevailing exchange rate. Exchange rates may fluctuate, and the final amount charged may differ from the displayed estimate.'
      },
      {
        heading: 'User Responsibilities',
        content: 'You are responsible for maintaining the security of your account and wallet credentials. You agree not to use our services for any unlawful purpose, including money laundering, fraud, or financing of terrorism. You must promptly report any unauthorized transactions.'
      },
      {
        heading: 'Fees & Charges',
        content: 'Certain services may be subject to fees, which will be clearly disclosed before you complete a transaction. Fees may include card issuance fees, transaction fees, currency conversion fees, and ATM withdrawal fees. Virtual and standard physical cards carry no annual fee.'
      },
      {
        heading: 'Limitation of Liability',
        content: 'Trust Wallet Card shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount of fees paid by you in the twelve months preceding the claim.'
      },
      {
        heading: 'Modifications',
        content: 'We reserve the right to modify these Terms of Service at any time. We will notify you of material changes via email or through our platform. Your continued use of the services after such modifications constitutes acceptance of the updated terms.'
      }
    ]
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    lastUpdated: 'September 2026',
    sections: [
      {
        heading: 'What Are Cookies',
        content: 'Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing usage patterns, and enabling certain functionalities of our platform.'
      },
      {
        heading: 'Types of Cookies We Use',
        content: 'We use essential cookies (required for basic functionality), analytical cookies (to understand usage patterns via privacy-respecting analytics), functional cookies (to remember your preferences like language and theme), and performance cookies (to optimize loading speeds and user experience).'
      },
      {
        heading: 'Third-Party Cookies',
        content: 'Some cookies are set by third-party services that appear on our pages. These include analytics providers and security services. We do not control these cookies and recommend reviewing the respective privacy policies of these third parties.'
      },
      {
        heading: 'Managing Cookies',
        content: 'You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. However, blocking essential cookies may affect the functionality of our platform. You can also use our cookie preference center to customize your choices.'
      },
      {
        heading: 'Cookie Retention',
        content: 'Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them. We regularly review our cookie usage and retention periods to ensure compliance with applicable regulations.'
      }
    ]
  },
  'aml-policy': {
    title: 'AML Policy',
    lastUpdated: 'September 2026',
    sections: [
      {
        heading: 'Anti-Money Laundering Commitment',
        content: 'Trust Wallet Card is committed to preventing money laundering and terrorist financing. We comply with all applicable anti-money laundering (AML) laws and regulations in the jurisdictions where we operate. Our AML program is designed to detect, prevent, and report suspicious activities.'
      },
      {
        heading: 'Know Your Customer (KYC)',
        content: 'We implement robust KYC procedures to verify the identity of our users. This may include collecting government-issued identification, proof of address, and other documentation. Enhanced due diligence is applied to higher-risk customers and transactions.'
      },
      {
        heading: 'Transaction Monitoring',
        content: 'We employ automated and manual systems to monitor transactions for suspicious patterns. This includes monitoring for unusual transaction volumes, structuring, rapid movement of funds, and transactions involving high-risk jurisdictions.'
      },
      {
        heading: 'Reporting Obligations',
        content: 'We file Suspicious Activity Reports (SARs) with relevant authorities when we identify potentially suspicious transactions. We also comply with requirements for Currency Transaction Reports (CTRs) and other mandatory reporting obligations.'
      },
      {
        heading: 'Sanctions Compliance',
        content: 'We screen all users and transactions against international sanctions lists, including those maintained by OFAC, the EU, and the UN. Transactions involving sanctioned individuals, entities, or jurisdictions are prohibited and will be blocked.'
      },
      {
        heading: 'Record Keeping',
        content: 'We maintain records of all customer identification information and transaction data for a minimum of five years, as required by applicable regulations. These records are securely stored and available for regulatory review upon request.'
      }
    ]
  },
  'risk-disclosure': {
    title: 'Risk Disclosure',
    lastUpdated: 'September 2026',
    sections: [
      {
        heading: 'Cryptocurrency Volatility',
        content: 'Cryptocurrency values can be highly volatile and may experience rapid and significant price fluctuations. The value of your crypto holdings may decrease substantially, and past performance is not indicative of future results. You should only invest what you can afford to lose.'
      },
      {
        heading: 'Exchange Rate Risk',
        content: 'When using your crypto card for purchases, cryptocurrency is converted to fiat currency at the prevailing exchange rate. Exchange rates can change rapidly, and the final amount charged may differ from the estimate shown at the time of the transaction.'
      },
      {
        heading: 'Regulatory Risk',
        content: 'Cryptocurrency regulations vary by jurisdiction and are subject to change. Changes in laws or regulations could adversely affect the use, transfer, or value of your cryptocurrencies. Certain services may not be available in all jurisdictions.'
      },
      {
        heading: 'Technology Risk',
        content: 'Blockchain networks and cryptocurrency systems are subject to technical risks including network congestion, smart contract vulnerabilities, and potential security breaches. While we implement robust security measures, no system can guarantee complete protection against all threats.'
      },
      {
        heading: 'Loss of Access',
        content: 'You are responsible for safeguarding your wallet credentials and private keys. Loss of access to your wallet may result in permanent loss of your cryptocurrency. We cannot recover lost private keys or reverse blockchain transactions.'
      },
      {
        heading: 'No Financial Advice',
        content: 'Nothing on our platform constitutes financial, investment, legal, or tax advice. We recommend consulting with qualified professionals before making any financial decisions related to cryptocurrency. Our services are tools for spending crypto, not investment platforms.'
      }
    ]
  }
};

export const FooterPages = () => {
  const [activePage, setActivePage] = useState<PageId>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (hash && pageContent[hash]) {
        setActivePage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActivePage(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleClose = () => {
    setActivePage(null);
    window.history.pushState('', document.title, window.location.pathname);
  };

  if (!activePage) return null;

  const page = pageContent[activePage];

  return (
    <div className="footer-page-overlay">
      <div className="footer-page-container">
        <header className="footer-page-header">
          <div className="container">
            <div className="footer-page-nav">
              <button className="footer-page-back" onClick={handleClose}>
                <ArrowLeft size={20} />
                <span>Back</span>
              </button>
              <Logo />
            </div>
          </div>
        </header>

        <main className="footer-page-content">
          <div className="container">
            <div className="footer-page-body">
              <div className="footer-page-badge">Legal</div>
              <h1 className="footer-page-title">{page.title}</h1>
              <p className="footer-page-updated">Last updated: {page.lastUpdated}</p>

              <div className="footer-page-sections">
                {page.sections.map((section, idx) => (
                  <div key={idx} className="footer-page-section">
                    <h2 className="footer-page-section-title">
                      <span className="section-number">{String(idx + 1).padStart(2, '0')}</span>
                      {section.heading}
                    </h2>
                    <p className="footer-page-section-content">{section.content}</p>
                  </div>
                ))}
              </div>

              <div className="footer-page-contact">
                <div className="contact-card">
                  <h3>Questions about this policy?</h3>
                  <p>Our support team is available 24/7 to assist you.</p>
                  <a
                    href="https://t.me/trustwalletcardpay_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-telegram-btn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Contact Support on Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
