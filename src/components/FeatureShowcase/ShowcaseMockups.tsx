import styles from './ShowcaseMockups.module.css'

/* ================================
   SYNC SECTION MOCKUPS
   ================================ */

/** Two devices showing the same task list in sync */
export function SyncDevicesMockup() {
    return (
        <div className={styles.syncDevices}>
            <div className={styles.deviceCard}>
                <div className={styles.deviceHeader}>
                    <span className={styles.deviceDot} />
                    <span className={styles.deviceLabel}>Desktop</span>
                </div>
                <div className={styles.deviceTasks}>
                    <div className={styles.taskRow}>
                        <div className={`${styles.checkbox} ${styles.checked}`}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <span className={`${styles.taskText} ${styles.taskDone}`}>Set up CI pipeline</span>
                    </div>
                    <div className={styles.taskRow}>
                        <div className={styles.checkbox} />
                        <span className={styles.taskText}>Review API endpoints</span>
                        <span className={styles.taskPill} data-color="emerald">Backend</span>
                    </div>
                    <div className={styles.taskRow}>
                        <div className={styles.checkbox} />
                        <span className={styles.taskText}>Write integration tests</span>
                    </div>
                </div>
            </div>

            <div className={styles.syncIndicator}>
                <div className={styles.syncPulse} />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                    <path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                </svg>
            </div>

            <div className={styles.deviceCard}>
                <div className={styles.deviceHeader}>
                    <span className={styles.deviceDot} />
                    <span className={styles.deviceLabel}>Phone</span>
                </div>
                <div className={styles.deviceTasks}>
                    <div className={styles.taskRow}>
                        <div className={`${styles.checkbox} ${styles.checked}`}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <span className={`${styles.taskText} ${styles.taskDone}`}>Set up CI pipeline</span>
                    </div>
                    <div className={styles.taskRow}>
                        <div className={styles.checkbox} />
                        <span className={styles.taskText}>Review API endpoints</span>
                        <span className={styles.taskPill} data-color="emerald">Backend</span>
                    </div>
                    <div className={styles.taskRow}>
                        <div className={styles.checkbox} />
                        <span className={styles.taskText}>Write integration tests</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

/** Encryption visualization — lock with encrypted data stream */
export function EncryptionMockup() {
    return (
        <div className={styles.encryptionWrap}>
            <div className={styles.dataStream}>
                <div className={styles.dataPacket}>
                    <span className={styles.dataLabel}>Task data</span>
                    <div className={styles.dataRows}>
                        <span className={styles.dataLine} data-w="70" />
                        <span className={styles.dataLine} data-w="50" />
                        <span className={styles.dataLine} data-w="60" />
                    </div>
                </div>

                <div className={styles.lockBadge}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                </div>

                <div className={styles.dataPacket}>
                    <span className={styles.dataLabel}>Encrypted</span>
                    <div className={styles.dataRows}>
                        <span className={styles.scrambled}>a8f2•c91d•4e7b</span>
                        <span className={styles.scrambled}>3d0a•f6e8•12cb</span>
                        <span className={styles.scrambled}>b7c5•0e3f•9a16</span>
                    </div>
                </div>
            </div>

            <div className={styles.encryptionFooter}>
                <div className={styles.shieldIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                        <path d="m9 12 2 2 4-4"/>
                    </svg>
                </div>
                <span className={styles.encryptionLabel}>End-to-end encrypted</span>
            </div>
        </div>
    )
}

/** Offline queue with pending changes */
export function OfflineQueueMockup() {
    return (
        <div className={styles.offlineQueueWrap}>
            <div className={styles.offlineBanner}>
                <div className={styles.offlineIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="2" x2="22" y1="2" y2="22"/>
                        <path d="M8.5 16.5a5 5 0 0 1 7 0"/>
                        <path d="M2 8.82a15 15 0 0 1 4.17-2.65"/>
                        <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76"/>
                        <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68"/>
                        <path d="M5 12.86a10 10 0 0 1 5.17-2.87"/>
                        <line x1="12" x2="12.01" y1="20" y2="20"/>
                    </svg>
                </div>
                <span className={styles.offlineText}>Offline — 3 changes queued</span>
            </div>

            <div className={styles.queueList}>
                <div className={styles.queueItem}>
                    <div className={styles.queueDot} data-type="complete" />
                    <span className={styles.queueLabel}>Completed "Write draft"</span>
                    <span className={styles.queueBadge}>queued</span>
                </div>
                <div className={styles.queueItem}>
                    <div className={styles.queueDot} data-type="add" />
                    <span className={styles.queueLabel}>Added "Review designs"</span>
                    <span className={styles.queueBadge}>queued</span>
                </div>
                <div className={styles.queueItem}>
                    <div className={styles.queueDot} data-type="edit" />
                    <span className={styles.queueLabel}>Edited priority on "Deploy v2"</span>
                    <span className={styles.queueBadge}>queued</span>
                </div>
            </div>

            <div className={styles.queueFooter}>
                <span className={styles.queueFooterText}>Will sync automatically when back online</span>
            </div>
        </div>
    )
}


/* ================================
   ORGANIZATION SECTION MOCKUPS
   ================================ */

/** Project tree with nested items */
export function ProjectTreeMockup() {
    return (
        <div className={styles.projectTreeWrap}>
            <div className={styles.treeHeader}>
                <span className={styles.treeHeaderTitle}>Projects</span>
            </div>
            <div className={styles.treeItems}>
                <div className={styles.treeItem} data-level="0">
                    <span className={styles.treeChevron}>&#9662;</span>
                    <span className={styles.treeDot} data-color="emerald" />
                    <span className={styles.treeName}>Marketing Website</span>
                    <span className={styles.treeCount}>12</span>
                </div>
                <div className={styles.treeItem} data-level="1">
                    <span className={styles.treeDot} data-color="emerald" />
                    <span className={styles.treeName}>Homepage</span>
                    <span className={styles.treeCount}>5</span>
                </div>
                <div className={styles.treeItem} data-level="1">
                    <span className={styles.treeDot} data-color="emerald" />
                    <span className={styles.treeName}>Blog</span>
                    <span className={styles.treeCount}>3</span>
                </div>
                <div className={styles.treeItem} data-level="1">
                    <span className={styles.treeDot} data-color="emerald" />
                    <span className={styles.treeName}>Landing Pages</span>
                    <span className={styles.treeCount}>4</span>
                </div>
                <div className={`${styles.treeItem} ${styles.treeItemActive}`} data-level="0">
                    <span className={styles.treeChevron}>&#9662;</span>
                    <span className={styles.treeDot} data-color="blue" />
                    <span className={styles.treeName}>Mobile App v2</span>
                    <span className={styles.treeCount}>8</span>
                </div>
                <div className={styles.treeItem} data-level="1">
                    <span className={styles.treeDot} data-color="blue" />
                    <span className={styles.treeName}>Auth Flow</span>
                    <span className={styles.treeCount}>3</span>
                </div>
                <div className={styles.treeItem} data-level="1">
                    <span className={styles.treeDot} data-color="blue" />
                    <span className={styles.treeName}>Settings</span>
                    <span className={styles.treeCount}>5</span>
                </div>
                <div className={styles.treeItem} data-level="0">
                    <span className={styles.treeChevron}>&#9656;</span>
                    <span className={styles.treeDot} data-color="violet" />
                    <span className={styles.treeName}>Design System</span>
                    <span className={styles.treeCount}>6</span>
                </div>
            </div>
        </div>
    )
}

/** Tasks with labels and priority badges */
export function LabelsMockup() {
    return (
        <div className={styles.labelsWrap}>
            <div className={styles.labelsHeader}>
                <span className={styles.labelsTitle}>Filters</span>
            </div>
            <div className={styles.filterChips}>
                <span className={styles.chip} data-active="">All</span>
                <span className={styles.chip} data-color="emerald">Design</span>
                <span className={styles.chip} data-color="blue">Dev</span>
                <span className={styles.chip} data-color="amber">Urgent</span>
            </div>
            <div className={styles.labelsTasks}>
                <div className={styles.labelsTask}>
                    <div className={styles.labelsCheck} />
                    <div className={styles.labelsBody}>
                        <span className={styles.labelsTaskTitle}>Redesign settings page</span>
                        <div className={styles.labelsTagRow}>
                            <span className={styles.tag} data-color="emerald">Design</span>
                            <span className={styles.tag} data-color="amber">Urgent</span>
                            <span className={styles.priorityFlag} data-level="high" />
                        </div>
                    </div>
                </div>
                <div className={styles.labelsTask}>
                    <div className={styles.labelsCheck} />
                    <div className={styles.labelsBody}>
                        <span className={styles.labelsTaskTitle}>Fix auth token refresh</span>
                        <div className={styles.labelsTagRow}>
                            <span className={styles.tag} data-color="blue">Dev</span>
                            <span className={styles.priorityFlag} data-level="high" />
                        </div>
                    </div>
                </div>
                <div className={styles.labelsTask}>
                    <div className={`${styles.labelsCheck} ${styles.labelsChecked}`}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div className={styles.labelsBody}>
                        <span className={`${styles.labelsTaskTitle} ${styles.labelsDone}`}>Update color tokens</span>
                        <div className={styles.labelsTagRow}>
                            <span className={styles.tag} data-color="emerald">Design</span>
                            <span className={styles.priorityFlag} data-level="low" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/** Calendar strip with tasks on dates */
export function CalendarMockup() {
    return (
        <div className={styles.calendarWrap}>
            <div className={styles.calHeader}>
                <span className={styles.calMonth}>October 2025</span>
            </div>
            <div className={styles.calStrip}>
                <div className={styles.calDay}>
                    <span className={styles.calDayName}>Mon</span>
                    <span className={styles.calDayNum}>13</span>
                </div>
                <div className={`${styles.calDay} ${styles.calDayToday}`}>
                    <span className={styles.calDayName}>Tue</span>
                    <span className={styles.calDayNum}>14</span>
                    <span className={styles.calDot} />
                </div>
                <div className={styles.calDay}>
                    <span className={styles.calDayName}>Wed</span>
                    <span className={styles.calDayNum}>15</span>
                    <span className={styles.calDot} />
                </div>
                <div className={styles.calDay}>
                    <span className={styles.calDayName}>Thu</span>
                    <span className={styles.calDayNum}>16</span>
                </div>
                <div className={styles.calDay}>
                    <span className={styles.calDayName}>Fri</span>
                    <span className={styles.calDayNum}>17</span>
                    <span className={styles.calDot} />
                    <span className={styles.calDot} />
                </div>
            </div>
            <div className={styles.calTasks}>
                <div className={styles.calTask}>
                    <span className={styles.calTaskTime}>9:00</span>
                    <span className={styles.calTaskBar} data-color="emerald" />
                    <span className={styles.calTaskName}>Design review</span>
                </div>
                <div className={styles.calTask}>
                    <span className={styles.calTaskTime}>14:00</span>
                    <span className={styles.calTaskBar} data-color="blue" />
                    <span className={styles.calTaskName}>Sprint planning</span>
                </div>
                <div className={styles.calTask}>
                    <span className={styles.calTaskTime}>17:00</span>
                    <span className={styles.calTaskBar} data-color="amber" />
                    <span className={styles.calTaskName}>Ship v2.1 release</span>
                </div>
            </div>
        </div>
    )
}
