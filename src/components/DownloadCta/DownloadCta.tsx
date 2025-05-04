import Button from '../Button/Button'
import Section from '../Section/Section'
import styles from './DownloadCta.module.css'

function DownloadCta() {
    return (
        <Section id="download" className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles.title}>Ready to take control of your tasks?</h2>
                <p className={styles.subtitle}>
                    Join thousands of people who organize their work with Tassku.
                </p>
                <Button variant="primary" size="lg">
                    Download for Free
                </Button>
            </div>
        </Section>
    )
}

export default DownloadCta
