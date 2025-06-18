import styles from './FeatureMockup.module.css'

/** Cross-platform: phone + desktop frames */
export function PlatformMockup() {
    return (
        <div className={styles.platformWrap}>
            {/* Desktop frame */}
            <div className={styles.desktopFrame}>
                <div className={styles.miniChrome}>
                    <span className={styles.miniDot} />
                    <span className={styles.miniDot} />
                    <span className={styles.miniDot} />
                </div>
                <div className={styles.desktopContent}>
                    <div className={styles.miniSidebar}>
                        <div className={styles.miniNavItem} data-active="" />
                        <div className={styles.miniNavItem} />
                        <div className={styles.miniNavItem} />
                    </div>
                    <div className={styles.miniMain}>
                        <div className={styles.miniTaskLine} data-w="80" />
                        <div className={styles.miniTaskLine} data-w="60" data-done="" />
                        <div className={styles.miniTaskLine} data-w="70" />
                        <div className={styles.miniTaskLine} data-w="50" />
                    </div>
                </div>
            </div>

            {/* Phone frame */}
            <div className={styles.phoneFrame}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneContent}>
                    <div className={styles.miniTaskLine} data-w="75" />
                    <div className={styles.miniTaskLine} data-w="55" data-done="" />
                    <div className={styles.miniTaskLine} data-w="65" />
                </div>
            </div>
        </div>
    )
}

/** Organize: task cards with labels and priorities */
export function OrganizeMockup() {
    return (
        <div className={styles.organizeWrap}>
            <div className={styles.orgTask}>
                <div className={styles.orgCheckbox} />
                <div className={styles.orgBody}>
                    <div className={styles.orgTitle}>Design homepage layout</div>
                    <div className={styles.orgTags}>
                        <span className={styles.orgPriority} data-level="high">High</span>
                        <span className={styles.orgLabel} data-color="emerald">Design</span>
                    </div>
                </div>
            </div>
            <div className={styles.orgTask}>
                <div className={`${styles.orgCheckbox} ${styles.orgChecked}`}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div className={styles.orgBody}>
                    <div className={`${styles.orgTitle} ${styles.orgDone}`}>Set up project structure</div>
                    <div className={styles.orgTags}>
                        <span className={styles.orgPriority} data-level="medium">Medium</span>
                        <span className={styles.orgLabel} data-color="violet">Dev</span>
                    </div>
                </div>
            </div>
            <div className={styles.orgTask}>
                <div className={styles.orgCheckbox} />
                <div className={styles.orgBody}>
                    <div className={styles.orgTitle}>Write user stories</div>
                    <div className={styles.orgTags}>
                        <span className={styles.orgPriority} data-level="low">Low</span>
                        <span className={styles.orgLabel} data-color="amber">Planning</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

/** Collaborate: shared project with avatars */
export function CollaborateMockup() {
    return (
        <div className={styles.collabWrap}>
            <div className={styles.collabHeader}>
                <span className={styles.collabDot} />
                <span className={styles.collabProject}>Marketing Website</span>
                <span className={styles.collabShared}>Shared</span>
            </div>
            <div className={styles.collabAvatars}>
                <div className={styles.avatar} data-color="emerald">A</div>
                <div className={styles.avatar} data-color="blue">M</div>
                <div className={styles.avatar} data-color="violet">K</div>
                <div className={styles.avatarMore}>+2</div>
            </div>
            <div className={styles.collabActivity}>
                <div className={styles.activityDot} />
                <span className={styles.activityText}>Maria completed "Update copy"</span>
            </div>
            <div className={styles.collabActivity}>
                <div className={styles.activityDot} />
                <span className={styles.activityText}>You added "Review assets"</span>
            </div>
        </div>
    )
}

/** Offline: sync status indicator */
export function OfflineMockup() {
    return (
        <div className={styles.offlineWrap}>
            <div className={styles.offlineDevice}>
                <div className={styles.offlineIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="2" x2="22" y1="2" y2="22"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 4.17-2.65"/><path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76"/><path d="M16.85 11.25a10 10 0 0 1 2.22 1.68"/><path d="M5 12.86a10 10 0 0 1 5.17-2.87"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>
                </div>
                <div className={styles.offlineLabel}>Working offline</div>
            </div>
            <div className={styles.offlineTasks}>
                <div className={styles.offlineTask}>
                    <div className={styles.offlineCheck}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span>Complete draft</span>
                    <span className={styles.offlinePending}>pending sync</span>
                </div>
                <div className={styles.offlineTask}>
                    <div className={styles.offlineCheck}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span>Add comments</span>
                    <span className={styles.offlinePending}>pending sync</span>
                </div>
            </div>
            <div className={styles.syncBar}>
                <div className={styles.syncFill} />
            </div>
            <div className={styles.syncLabel}>Syncs when back online</div>
        </div>
    )
}
