import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import styles from './ThemeToggle.module.css'

function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const isDark = resolvedTheme === 'dark'

    const toggle = () => setTheme(isDark ? 'light' : 'dark')

    return (
        <button
            className={styles.track}
            onClick={toggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Theme: ${resolvedTheme}`}
        >
            <span
                className={`${styles.slider} ${isDark ? styles.sliderRight : ''}`}
                aria-hidden="true"
            />
            <span className={`${styles.icon} ${!isDark ? styles.iconActive : ''}`}>
                <Sun size={14} />
            </span>
            <span className={`${styles.icon} ${isDark ? styles.iconActive : ''}`}>
                <Moon size={14} />
            </span>
        </button>
    )
}

export default ThemeToggle
