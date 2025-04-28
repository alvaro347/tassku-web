import Section from '../Section/Section'
import PricingCard from '../PricingCard/PricingCard'
import { pricingTiers } from '../../data/pricing'
import styles from './Pricing.module.css'

function Pricing() {
    return (
        <Section id="pricing">
            <div className={styles.header}>
                <h2 className={styles.title}>Simple, transparent pricing</h2>
                <p className={styles.subtitle}>
                    Start free. Upgrade when you need sync and collaboration.
                </p>
            </div>
            <div className={styles.grid}>
                {pricingTiers.map(tier => (
                    <PricingCard key={tier.name} {...tier} />
                ))}
            </div>
        </Section>
    )
}

export default Pricing
