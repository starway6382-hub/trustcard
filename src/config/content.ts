import { Wallet, Globe, Smartphone, Shield, Zap, Gift } from 'lucide-react';

export const productConfig = {
  features: [
    {
      id: 'wallet',
      icon: Wallet,
      titleKey: 'features.items.wallet.title',
      descKey: 'features.items.wallet.desc'
    },
    {
      id: 'globe',
      icon: Globe,
      titleKey: 'features.items.globe.title',
      descKey: 'features.items.globe.desc'
    },
    {
      id: 'mobile',
      icon: Smartphone,
      titleKey: 'features.items.mobile.title',
      descKey: 'features.items.mobile.desc'
    },
    {
      id: 'shield',
      icon: Shield,
      titleKey: 'features.items.shield.title',
      descKey: 'features.items.shield.desc'
    },
    {
      id: 'zap',
      icon: Zap,
      titleKey: 'features.items.zap.title',
      descKey: 'features.items.zap.desc'
    },
    {
      id: 'gift',
      icon: Gift,
      titleKey: 'features.items.gift.title',
      descKey: 'features.items.gift.desc'
    }
  ],
  rewards: [
    { rate: '3%', categoryKey: 'rewards.categories.dining' },
    { rate: '2%', categoryKey: 'rewards.categories.shopping' },
    { rate: '1%', categoryKey: 'rewards.categories.everything' }
  ],
  rewardAssets: ['TRON', 'Ethereum', 'BNB', 'Polygon'],
  faq: [
    'whatIs',
    'howWorks',
    'cryptoSupported',
    'walletsSupported',
    'countriesSupported',
    'cardFees',
    'howRewardsWork',
    'applePay',
    'googlePay',
    'availability',
    'howToGet',
    'afterActivation'
  ],
  socialLinks: {
    twitter: '#',
    telegram: '#',
    discord: '#'
  },
  legalLinks: [
    { key: 'privacy', url: '#' },
    { key: 'terms', url: '#' },
    { key: 'cookie', url: '#' },
    { key: 'aml', url: '#' },
    { key: 'risk', url: '#' }
  ]
};
