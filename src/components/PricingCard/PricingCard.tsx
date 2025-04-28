import { Check } from 'lucide-react'
import Button from '../Button/Button'
import type { PricingTier } from '../../data/pricing'
import styles from './PricingCard.module.css'

function PricingCard({ name, price, period, description, features, cta, ctaVariant, highlighted }: PricingTier) {
    const cardClasses = [
        styles.card,
        highlighted ? styles.highlighted : '',
    ].filter(Boolean).join(' ')

    return (
        <div className={cardClasses}>
            <div className={styles.header}>
                <span className={styles.name}>{name}</span>
                <div className={styles.priceRow}>
                    <span className={styles.price}>{price}</span>
                    {period && <span className={styles.period}>{period}</span>}
                </div>
                <p className={styles.description}>{description}</p>
            </div>
            <ul className={styles.features}>
                {features.map(feature => (
                    <li key={feature} className={styles.featureItem}>
                        <Check size={16} className={styles.check} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <Button variant={ctaVariant} size="lg" className={styles.cta}>
                {cta}
            </Button>
        </div>
    )
}

export default PricingCard
