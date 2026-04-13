import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import Button from '../Button/Button'
import AppMockup from '../AppMockup/AppMockup'
import styles from './Hero.module.css'

const RELEASE_URL = 'https://github.com/alvaro347/tassku-releases/releases/tag/v0.1'

const PLATFORMS = [
    {
        name: 'macOS',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
        ),
        url: RELEASE_URL,
    },
]

function Hero() {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false)
            }
        }
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [menuOpen])

    const current = PLATFORMS[0]

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
                    <div className={styles.downloadGroup} ref={menuRef}>
                        <a
                            href={current.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.downloadLink}
                        >
                            <Button variant="primary" size="lg">
                                {current.icon}
                                Download for {current.name}
                            </Button>
                        </a>
                        <button
                            className={styles.downloadChevron}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Select platform"
                            aria-expanded={menuOpen}
                        >
                            <ChevronDown size={16} />
                        </button>
                        {menuOpen && (
                            <div className={styles.platformMenu}>
                                {PLATFORMS.map(p => (
                                    <a
                                        key={p.name}
                                        href={p.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.platformItem}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {p.icon}
                                        <span>{p.name}</span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <a href="#features">
                        <Button variant="secondary" size="lg">
                            Learn More
                        </Button>
                    </a>
                </div>
                <span className={styles.preAlpha}>pre-alpha</span>
            </div>
            <div className={styles.mockup}>
                <AppMockup />
            </div>
        </div>
    )
}

export default Hero
