export interface PricingTier {
    name: string
    price: string
    period?: string
    description: string
    features: string[]
    cta: string
    ctaVariant: 'primary' | 'secondary'
    highlighted?: boolean
}

export const pricingTiers: PricingTier[] = [
    {
        name: 'Free',
        price: '$0',
        period: '/mo',
        description: 'Everything you need to get started.',
        features: [
            'Unlimited tasks & projects',
            'Labels & priorities',
            'Due dates & reminders',
            'Offline access',
            'Light & dark theme',
        ],
        cta: 'Get Started',
        ctaVariant: 'secondary',
    },
    {
        name: 'Pro',
        price: '$5',
        period: '/mo',
        description: 'For individuals who need sync and more.',
        features: [
            'Everything in Free',
            'Cross-device sync',
            'Shared projects',
            'Subtasks',
            'Priority support',
        ],
        cta: 'Start Free Trial',
        ctaVariant: 'primary',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For teams that need control.',
        features: [
            'Everything in Pro',
            'Admin dashboard',
            'Team metrics',
            'SSO integration',
            'Dedicated support',
        ],
        cta: 'Contact Sales',
        ctaVariant: 'secondary',
    },
]
