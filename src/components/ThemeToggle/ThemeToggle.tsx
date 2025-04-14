import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import styles from './ThemeToggle.module.css'

const CYCLE: Array<'system' | 'light' | 'dark'> = ['system', 'light', 'dark']

function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    const next = () => {
        const idx = CYCLE.indexOf(theme)
        setTheme(CYCLE[(idx + 1) % CYCLE.length])
    }

    const icon = theme === 'light'
        ? <Sun size={18} />
        : theme === 'dark'
            ? <Moon size={18} />
            : <Monitor size={18} />

    return (
        <button
            className={styles.toggle}
            onClick={next}
            aria-label={`Theme: ${theme}`}
            title={`Theme: ${theme}`}
        >
            {icon}
        </button>
    )
}

export default ThemeToggle
