import Section from '../Section/Section'
import styles from './DownloadCta.module.css'

const RELEASE_URL = 'https://github.com/alvaro347/tassku-releases/releases/tag/v0.1'

function DownloadCta() {
    return (
        <Section id="download" className={styles.section}>
            <div className={styles.content}>
                <span className={styles.preAlpha}>pre-alpha</span>
                <h2 className={styles.title}>Download Tassku</h2>
                <p className={styles.subtitle}>
                    Try the early build. More platforms coming soon.
                </p>
                <div className={styles.platforms}>
                    <a
                        href={RELEASE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.platformCard}
                    >
                        <svg className={styles.platformIcon} width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <div className={styles.platformInfo}>
                            <span className={styles.platformName}>macOS</span>
                            <span className={styles.platformVersion}>v0.1</span>
                        </div>
                        <svg className={styles.downloadArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                    </a>
                </div>
                <p className={styles.hint}>
                    Windows &amp; Linux builds are on the way.
                </p>
            </div>
        </Section>
    )
}

export default DownloadCta
