import type { ReactNode } from 'react'
import styles from './FeatureCard.module.css'

interface FeatureCardProps {
    icon: ReactNode
    title: string
    description: string
    mockup?: ReactNode
}

function FeatureCard({ icon, title, description, mockup }: FeatureCardProps) {
    return (
        <div className={styles.card}>
            {mockup && (
                <div className={styles.mockupArea}>
                    {mockup}
                </div>
            )}
            <div className={styles.body}>
                <div className={styles.iconWrap}>{icon}</div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export default FeatureCard
