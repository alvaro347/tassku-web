import { useState, type ReactNode } from 'react'
import Section from '../Section/Section'
import styles from './FeatureShowcase.module.css'

export interface ShowcaseItem {
    title: string
    description: string
    mockup: ReactNode
}

interface FeatureShowcaseProps {
    id: string
    icon: ReactNode
    label: string
    title: string
    description: string
    items: ShowcaseItem[]
    reverse?: boolean
}

function FeatureShowcase({
    id,
    icon,
    label,
    title,
    description,
    items,
    reverse = false,
}: FeatureShowcaseProps) {
    const [active, setActive] = useState(0)

    return (
        <Section id={id}>
            <div className={`${styles.layout} ${reverse ? styles.reverse : ''}`}>
                <div className={styles.content}>
                    <div className={styles.label}>
                        <span className={styles.labelIcon}>{icon}</span>
                        {label}
                    </div>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.itemList}>
                        {items.map((item, i) => (
                            <button
                                key={i}
                                className={`${styles.item} ${i === active ? styles.itemActive : ''}`}
                                onClick={() => setActive(i)}
                            >
                                <span className={styles.itemTitle}>{item.title}</span>
                                <span className={styles.itemDesc}>{item.description}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.visual}>
                    {items[active].mockup}
                </div>
            </div>
        </Section>
    )
}

export default FeatureShowcase
