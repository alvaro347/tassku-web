import { Monitor, ListTodo, Users, WifiOff } from 'lucide-react'
import Section from '../Section/Section'
import FeatureCard from '../FeatureCard/FeatureCard'
import { PlatformMockup, OrganizeMockup, CollaborateMockup, OfflineMockup } from '../FeatureMockup'
import { features } from '../../data/features'
import styles from './Features.module.css'

const ICONS = {
    Monitor: <Monitor size={20} />,
    ListTodo: <ListTodo size={20} />,
    Users: <Users size={20} />,
    WifiOff: <WifiOff size={20} />,
}

const MOCKUPS = {
    Monitor: <PlatformMockup />,
    ListTodo: <OrganizeMockup />,
    Users: <CollaborateMockup />,
    WifiOff: <OfflineMockup />,
}

function Features() {
    return (
        <Section id="features">
            <div className={styles.header}>
                <h2 className={styles.title}>Built for the way you work</h2>
                <p className={styles.subtitle}>
                    Simple enough for personal use, powerful enough for teams.
                </p>
            </div>
            <div className={styles.grid}>
                {features.map(feature => (
                    <FeatureCard
                        key={feature.title}
                        icon={ICONS[feature.iconName]}
                        title={feature.title}
                        description={feature.description}
                        mockup={MOCKUPS[feature.iconName]}
                    />
                ))}
            </div>
        </Section>
    )
}

export default Features
