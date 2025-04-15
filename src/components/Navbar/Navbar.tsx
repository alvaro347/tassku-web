import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '../ThemeToggle'
import styles from './Navbar.module.css'

const NAV_LINKS = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Download', href: '#download' },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLinkClick = () => {
        setMenuOpen(false)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.inner}>
                <a href="#" className={styles.logo}>Tassku</a>

                <div className={styles.desktopNav}>
                    {NAV_LINKS.map(link => (
                        <a key={link.href} href={link.href} className={styles.link}>
                            {link.label}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>

                <div className={styles.mobileActions}>
                    <ThemeToggle />
                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className={styles.mobileMenu}>
                    {NAV_LINKS.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.mobileLink}
                            onClick={handleLinkClick}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar
