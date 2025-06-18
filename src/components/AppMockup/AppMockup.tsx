import { useRef, useCallback } from 'react'
import styles from './AppMockup.module.css'

const SAMPLE_TASKS = [
    { title: 'Design onboarding flow', done: false, priority: 'high', due: 'Today', project: 'Tassku' },
    { title: 'Fix sidebar collapse on mobile', done: true, priority: 'medium', due: 'Yesterday', project: 'Tassku' },
    { title: 'Write API documentation', done: false, priority: 'low', due: 'Tomorrow', project: 'Docs' },
    { title: 'Review pull request #42', done: false, priority: 'medium', due: 'Today', project: 'Tassku' },
    { title: 'Set up CI/CD pipeline', done: true, priority: 'high', due: 'Mar 28', project: 'Infra' },
    { title: 'Update dependencies', done: false, priority: 'low', due: 'Apr 2', project: 'Tassku' },
]

const PROJECTS = [
    { name: 'Tassku', color: '#0e9f6e' },
    { name: 'Docs', color: '#6366f1' },
    { name: 'Infra', color: '#f97316' },
]

const PRIORITY_COLORS: Record<string, string> = {
    high: '#f97316',
    medium: '#0ea5e9',
    low: '#94a3b8',
}

function AppMockup() {
    const frameRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const el = frameRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        el.style.transform = `perspective(1200px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`
    }, [])

    const handleMouseLeave = useCallback(() => {
        const el = frameRef.current
        if (!el) return
        el.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)'
    }, [])

    return (
        <div
            className={styles.wrapper}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div ref={frameRef} className={styles.frame}>
                {/* Browser chrome */}
                <div className={styles.chrome}>
                    <div className={styles.trafficLights}>
                        <span className={styles.dot} data-color="red" />
                        <span className={styles.dot} data-color="yellow" />
                        <span className={styles.dot} data-color="green" />
                    </div>
                    <div className={styles.urlBar}>tassku.app</div>
                    <div className={styles.chromeSpacer} />
                </div>

                {/* App content */}
                <div className={styles.app}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <div className={styles.brand}>
                            <div className={styles.brandMark}>T</div>
                            <span className={styles.brandName}>Tassku</span>
                        </div>

                        <nav className={styles.nav}>
                            <div className={`${styles.navItem} ${styles.navActive}`}>
                                <div className={styles.navIcon}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
                                </div>
                                Inbox
                            </div>
                            <div className={styles.navItem}>
                                <div className={styles.navIcon}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                                </div>
                                Today
                                <span className={styles.badge}>3</span>
                            </div>
                            <div className={styles.navItem}>
                                <div className={styles.navIcon}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                </div>
                                Upcoming
                            </div>
                        </nav>

                        <div className={styles.sidebarSection}>
                            <div className={styles.sectionHeader}>Projects</div>
                            {PROJECTS.map(p => (
                                <div key={p.name} className={styles.navItem}>
                                    <span className={styles.projectDot} style={{ backgroundColor: p.color }} />
                                    {p.name}
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Main content */}
                    <main className={styles.main}>
                        <div className={styles.topBar}>
                            <h3 className={styles.viewTitle}>Today</h3>
                        </div>
                        <div className={styles.taskList}>
                            {SAMPLE_TASKS.map((task, i) => (
                                <div key={i} className={`${styles.taskItem} ${task.done ? styles.taskDone : ''}`}>
                                    <div className={`${styles.checkbox} ${task.done ? styles.checked : ''}`}>
                                        {task.done && (
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                        )}
                                    </div>
                                    <div className={styles.taskBody}>
                                        <span className={styles.taskTitle}>{task.title}</span>
                                        <div className={styles.taskMeta}>
                                            <span
                                                className={styles.priorityPill}
                                                style={{ '--pill-color': PRIORITY_COLORS[task.priority] } as React.CSSProperties}
                                            >
                                                {task.priority}
                                            </span>
                                            <span className={styles.taskDue}>{task.due}</span>
                                            <span className={styles.taskProject}>{task.project}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AppMockup
