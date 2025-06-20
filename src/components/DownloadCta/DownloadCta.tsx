import Section from '../Section/Section'
import styles from './DownloadCta.module.css'

function DownloadCta() {
    return (
        <Section id="download" className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles.title}>We're building something great.</h2>
                <p className={styles.subtitle}>
                    Tassku is currently in development. Sign up to be notified when
                    it's ready.
                </p>
                <div className={styles.notify}>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className={styles.emailInput}
                        disabled
                    />
                    <button className={styles.notifyButton} disabled>
                        Notify Me
                    </button>
                </div>
                <span className={styles.comingSoon}>Coming Soon</span>
            </div>
        </Section>
    )
}

export default DownloadCta
