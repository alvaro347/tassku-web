import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
    id?: string
    className?: string
    children: ReactNode
}

function Section({ id, className, children }: SectionProps) {
    const classes = [styles.section, className].filter(Boolean).join(' ')

    return (
        <section id={id} className={classes}>
            {children}
        </section>
    )
}

export default Section
