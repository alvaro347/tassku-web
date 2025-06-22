export interface Feature {
    iconName: 'Monitor' | 'ListTodo' | 'Users' | 'WifiOff'
    title: string
    description: string
}

export const features: Feature[] = [
    {
        iconName: 'Monitor',
        title: 'Everywhere you are',
        description: 'Android, iOS, Web, and Desktop — all in sync.',
    },
    {
        iconName: 'ListTodo',
        title: 'Organize your way',
        description: 'Projects, labels, priorities, and due dates.',
    },
    {
        iconName: 'Users',
        title: 'Collaborate seamlessly',
        description: 'Share projects and stay in sync with your team.',
    },
    {
        iconName: 'WifiOff',
        title: 'Works offline',
        description: 'Keep working offline. Syncs when you reconnect.',
    },
]
