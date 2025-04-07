import { useState, useEffect, useCallback } from 'react'

type ThemeMode = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

const STORAGE_KEY = 'tassku-web.theme'

function getSystemTheme(): ResolvedTheme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function resolveTheme(mode: ThemeMode): ResolvedTheme {
    return mode === 'system' ? getSystemTheme() : mode
}

function getStoredTheme(): ThemeMode {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
        return stored
    }
    return 'system'
}

function applyTheme(resolved: ResolvedTheme) {
    document.documentElement.setAttribute('data-theme', resolved)
}

export function useTheme() {
    const [theme, setThemeState] = useState<ThemeMode>(getStoredTheme)
    const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
        resolveTheme(getStoredTheme())
    )

    const setTheme = useCallback((mode: ThemeMode) => {
        setThemeState(mode)
        localStorage.setItem(STORAGE_KEY, mode)
        const resolved = resolveTheme(mode)
        setResolvedTheme(resolved)
        applyTheme(resolved)
    }, [])

    useEffect(() => {
        applyTheme(resolvedTheme)
    }, [resolvedTheme])

    useEffect(() => {
        if (theme !== 'system') return

        const mql = window.matchMedia('(prefers-color-scheme: dark)')
        const handler = () => {
            const resolved = getSystemTheme()
            setResolvedTheme(resolved)
            applyTheme(resolved)
        }

        mql.addEventListener('change', handler)
        return () => mql.removeEventListener('change', handler)
    }, [theme])

    return { theme, resolvedTheme, setTheme } as const
}
