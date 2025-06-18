import Button from '../Button/Button'
import AppMockup from '../AppMockup/AppMockup'
import styles from './Hero.module.css'

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.glow} aria-hidden="true" />
            <div className={styles.content}>
                <h1 className={styles.headline}>
                    Your tasks, finally<br />in order.
                </h1>
                <p className={styles.subtitle}>
                    A modern task manager that works across all your devices.
                    Organize projects, collaborate with your team, and stay
                    productive — even offline.
                </p>
                <div className={styles.actions}>
                    <a href="#download">
                        <Button variant="primary" size="lg">
                            Coming Soon
                        </Button>
                    </a>
                    <a href="#features">
                        <Button variant="secondary" size="lg">
                            Learn More
                        </Button>
                    </a>
                </div>
            </div>
            <div className={styles.mockup}>
                <AppMockup />
            </div>
        </div>
    )
}

export default Hero
