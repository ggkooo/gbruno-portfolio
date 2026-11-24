import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'pt' | 'en';
/** A string that exists in every supported language. */
export type Localized = Record<Lang, string>;

const STORAGE_KEY = 'gbruno-lang';

// eslint-disable-next-line react-refresh/only-export-components
export function detectInitialLang(): Lang {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'pt' || saved === 'en') return saved;
    } catch {
        /* storage unavailable (private mode) — fall through */
    }
    return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

interface LangContextValue {
    lang: Lang;
    setLang: (lang: Lang) => void;
    toggle: () => void;
    t: (value: Localized) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

/** `initial` forces a language (used by the prerender and its hydration); otherwise it is detected. */
export function LangProvider({ children, initial }: { children: ReactNode; initial?: Lang }) {
    const [lang, setLang] = useState<Lang>(() => initial ?? detectInitialLang());

    useEffect(() => {
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch {
            /* ignore */
        }
    }, [lang]);

    const toggle = useCallback(() => setLang((l) => (l === 'pt' ? 'en' : 'pt')), []);
    const t = useCallback((value: Localized) => value[lang], [lang]);

    const value = useMemo(() => ({ lang, setLang, toggle, t }), [lang, toggle, t]);
    return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
    const ctx = useContext(LangContext);
    if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
    return ctx;
}
