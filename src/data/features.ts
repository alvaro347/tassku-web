export interface Feature {
    iconName: 'Monitor' | 'ListTodo' | 'Users' | 'WifiOff'
    title: string
    description: string
}

export const features: Feature[] = [
    {
        iconName: 'Monitor',
        title: 'Everywhere you are',
        description:
            'Available on Android, iOS, Web, and Desktop. Your tasks follow you across every device.',
    },
    {
        iconName: 'ListTodo',
        title: 'Organize your way',
        description:
            'Projects, labels, priorities, and due dates. Structure your work the way that makes sense to you.',
    },
    {
        iconName: 'Users',
        title: 'Collaborate seamlessly',
        description:
            'Share projects with your team, assign roles, and stay in sync with real-time updates.',
    },
    {
        iconName: 'WifiOff',
        title: 'Works offline',
        description:
            'Keep working without an internet connection. Your changes sync automatically when you\'re back online.',
    },
]
