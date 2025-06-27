import styles from './FeatureMockup.module.css'

/** Cross-platform: desktop window with overlapping phone */
export function PlatformMockup() {
    return (
        <div className={styles.platformWrap}>
            {/* Desktop */}
            <div className={styles.desktopFrame}>
                <div className={styles.miniChrome}>
                    <span className={styles.miniDot} data-c="r" />
                    <span className={styles.miniDot} data-c="y" />
                    <span className={styles.miniDot} data-c="g" />
                    <div className={styles.miniUrl}>tassku.app</div>
                </div>
                <div className={styles.desktopContent}>
                    <div className={styles.miniSidebar}>
                        <div className={styles.miniLogo} />
                        <div className={styles.miniNavItem} data-active="" />
                        <div className={styles.miniNavItem} />
                        <div className={styles.miniNavItem} />
                        <div className={styles.miniDivider} />
                        <div className={styles.miniNavItem} data-project="" />
                        <div className={styles.miniNavItem} data-project="" />
                    </div>
                    <div className={styles.miniMain}>
                        <div className={styles.miniHeader} />
                        <div className={styles.miniTaskRow}><span className={styles.miniCheck} /><span className={styles.miniLine} data-w="70" /></div>
                        <div className={styles.miniTaskRow}><span className={`${styles.miniCheck} ${styles.miniChecked}`} /><span className={`${styles.miniLine} ${styles.miniDone}`} data-w="55" /></div>
                        <div className={styles.miniTaskRow}><span className={styles.miniCheck} /><span className={styles.miniLine} data-w="80" /></div>
                        <div className={styles.miniTaskRow}><span className={styles.miniCheck} /><span className={styles.miniLine} data-w="45" /></div>
                        <div className={styles.miniTaskRow}><span className={`${styles.miniCheck} ${styles.miniChecked}`} /><span className={`${styles.miniLine} ${styles.miniDone}`} data-w="60" /></div>
                    </div>
                </div>
            </div>

            {/* Phone */}
            <div className={styles.phoneFrame}>
                <div className={styles.phoneNotch} />
                <div className={styles.phoneContent}>
                    <div className={styles.miniTaskRow}><span className={styles.miniCheck} /><span className={styles.miniLine} data-w="70" /></div>
                    <div className={styles.miniTaskRow}><span className={`${styles.miniCheck} ${styles.miniChecked}`} /><span className={`${styles.miniLine} ${styles.miniDone}`} data-w="55" /></div>
                    <div className={styles.miniTaskRow}><span className={styles.miniCheck} /><span className={styles.miniLine} data-w="60" /></div>
                    <div className={styles.miniTaskRow}><span className={styles.miniCheck} /><span className={styles.miniLine} data-w="45" /></div>
                </div>
            </div>
        </div>
    )
}

/** Organize: realistic task list panel */
export function OrganizeMockup() {
    return (
        <div className={styles.organizeWrap}>
            <div className={styles.orgPanel}>
                <div className={styles.orgPanelHeader}>
                    <span className={styles.orgViewTitle}>Today</span>
                    <span className={styles.orgCount}>4 tasks</span>
                </div>
                <div className={styles.orgItems}>
                    <div className={styles.orgTask}>
                        <div className={styles.orgCheckbox} />
                        <div className={styles.orgBody}>
                            <div className={styles.orgTitle}>Design homepage layout</div>
                            <div className={styles.orgMeta}>
                                <span className={styles.orgPriority} data-level="high" />
                                <span className={styles.orgLabel} data-color="emerald">Design</span>
                                <span className={styles.orgDue}>Today</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.orgTask}>
                        <div className={`${styles.orgCheckbox} ${styles.orgChecked}`}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <div className={styles.orgBody}>
                            <div className={`${styles.orgTitle} ${styles.orgTitleDone}`}>Set up project structure</div>
                            <div className={styles.orgMeta}>
                                <span className={styles.orgPriority} data-level="medium" />
                                <span className={styles.orgLabel} data-color="violet">Dev</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.orgTask}>
                        <div className={styles.orgCheckbox} />
                        <div className={styles.orgBody}>
                            <div className={styles.orgTitle}>Write user stories</div>
                            <div className={styles.orgMeta}>
                                <span className={styles.orgPriority} data-level="low" />
                                <span className={styles.orgLabel} data-color="amber">Planning</span>
                                <span className={styles.orgDue}>Tomorrow</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.orgTask}>
                        <div className={styles.orgCheckbox} />
                        <div className={styles.orgBody}>
                            <div className={styles.orgTitle}>Review pull request #42</div>
                            <div className={styles.orgMeta}>
                                <span className={styles.orgPriority} data-level="high" />
                                <span className={styles.orgLabel} data-color="emerald">Code</span>
                                <span className={styles.orgDue}>Today</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/** Collaborate: shared project card with member activity */
export function CollaborateMockup() {
    return (
        <div className={styles.collabWrap}>
            <div className={styles.collabCard}>
                <div className={styles.collabTop}>
                    <div className={styles.collabHeader}>
                        <span className={styles.collabDot} />
                        <span className={styles.collabProject}>Marketing Website</span>
                    </div>
                    <span className={styles.collabShared}>Shared</span>
                </div>

                <div className={styles.collabMembers}>
                    <div className={styles.avatar} data-color="emerald">A</div>
                    <div className={styles.avatar} data-color="blue">M</div>
                    <div className={styles.avatar} data-color="violet">K</div>
                    <div className={styles.avatar} data-color="amber">J</div>
                    <div className={styles.avatarMore}>+3</div>
                </div>

                <div className={styles.collabDivider} />

                <div className={styles.collabFeed}>
                    <div className={styles.feedItem}>
                        <div className={styles.feedAvatar} data-color="blue">M</div>
                        <div className={styles.feedBody}>
                            <span className={styles.feedName}>Maria</span> completed <span className={styles.feedTask}>"Update copy"</span>
                        </div>
                        <span className={styles.feedTime}>2m</span>
                    </div>
                    <div className={styles.feedItem}>
                        <div className={styles.feedAvatar} data-color="emerald">A</div>
                        <div className={styles.feedBody}>
                            <span className={styles.feedName}>You</span> added <span className={styles.feedTask}>"Review assets"</span>
                        </div>
                        <span className={styles.feedTime}>5m</span>
                    </div>
                    <div className={styles.feedItem}>
                        <div className={styles.feedAvatar} data-color="violet">K</div>
                        <div className={styles.feedBody}>
                            <span className={styles.feedName}>Kai</span> commented on <span className={styles.feedTask}>"Logo v2"</span>
                        </div>
                        <span className={styles.feedTime}>12m</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

/** Offline: device with pending changes and sync progress */
export function OfflineMockup() {
    return (
        <div className={styles.offlineWrap}>
            <div className={styles.offlineCard}>
                <div className={styles.offlineStatus}>
                    <div className={styles.offlineIconWrap}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="2" x2="22" y1="2" y2="22"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 4.17-2.65"/><path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76"/><path d="M16.85 11.25a10 10 0 0 1 2.22 1.68"/><path d="M5 12.86a10 10 0 0 1 5.17-2.87"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>
                    </div>
                    <div className={styles.offlineStatusText}>
                        <span className={styles.offlineTitle}>Working offline</span>
                        <span className={styles.offlineSub}>3 changes pending</span>
                    </div>
                </div>

                <div className={styles.offlineChanges}>
                    <div className={styles.offlineChange}>
                        <div className={styles.changeCheck}>
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <span className={styles.changeText}>Completed "Write draft"</span>
                        <span className={styles.changeBadge}>pending</span>
                    </div>
                    <div className={styles.offlineChange}>
                        <div className={styles.changePlus}>+</div>
                        <span className={styles.changeText}>Added "Review designs"</span>
                        <span className={styles.changeBadge}>pending</span>
                    </div>
                    <div className={styles.offlineChange}>
                        <div className={styles.changeEdit}>
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                        </div>
                        <span className={styles.changeText}>Edited "Update assets"</span>
                        <span className={styles.changeBadge}>pending</span>
                    </div>
                </div>

                <div className={styles.syncSection}>
                    <div className={styles.syncBar}>
                        <div className={styles.syncFill} />
                    </div>
                    <span className={styles.syncLabel}>Syncs automatically when back online</span>
                </div>
            </div>
        </div>
    )
}
