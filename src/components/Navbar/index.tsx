import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useLang } from '../../i18n';
import { profile, ui } from '../../data/content';

const LINKS = ['about', 'projects', 'stack', 'experience', 'recognition'] as const;

function useActiveSection(ids: readonly string[]) {
    const [active, setActive] = useState<string | null>(null);
    useEffect(() => {
        const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
            },
            { rootMargin: '-45% 0px -50% 0px' },
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [ids]);
    return active;
}

function LangToggle() {
    const { lang, toggle, t } = useLang();
    return (
        <button
            type="button"
            onClick={toggle}
            title={t(ui.nav.switchLang)}
            className="flex h-9 items-center rounded-full border border-white/10 p-0.5 font-mono text-[11px] font-bold uppercase"
        >
            <span className="sr-only">{t(ui.nav.switchLang)} </span>
            {(['pt', 'en'] as const).map((l) => (
                <span
                    key={l}
                    className={`rounded-full px-2.5 py-1.5 transition-colors ${lang === l ? 'bg-primary text-black' : 'text-muted'}`}
                >
                    {l}{' '}
                </span>
            ))}
        </button>
    );
}

const Navbar = () => {
    const { t } = useLang();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const active = useActiveSection(LINKS);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Mobile menu: lock scroll and close on Escape.
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener('keydown', onKey);
        };
    }, [open]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled || open ? 'border-b border-line bg-ink/80 backdrop-blur-xl' : 'border-b border-transparent'
            }`}
        >
            <nav className="mx-auto flex h-16 md:h-20 max-w-page items-center justify-between px-5 md:px-8" aria-label="Main">
                <a href="#home" className="font-display text-xl font-black uppercase tracking-tighter text-glow">
                    {profile.shortName}
                </a>

                <ul className="hidden lg:flex items-center gap-9 text-xs font-bold uppercase tracking-[0.18em]">
                    {LINKS.map((id) => (
                        <li key={id}>
                            <a href={`#${id}`} className="nav-link" aria-current={active === id ? 'true' : undefined}>
                                {t(ui.nav[id])}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <LangToggle />
                    <a href="#contact" className="hidden md:inline-flex btn-ghost !px-5 !py-2 !text-xs">
                        {t(ui.nav.contact)} <ArrowUpRight size={14} aria-hidden />
                    </a>
                    <button
                        type="button"
                        className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white"
                        onClick={() => setOpen((o) => !o)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={t(open ? ui.nav.closeMenu : ui.nav.openMenu)}
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </nav>

            <div id="mobile-menu" className="lg:hidden" hidden={!open}>
                <ul className="flex h-[calc(100svh-4rem)] flex-col gap-2 overflow-y-auto px-5 pb-10 pt-6">
                    {[...LINKS, 'contact' as const].map((id, i) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={() => setOpen(false)}
                                className="flex items-baseline gap-4 border-b border-line py-4 font-display text-3xl font-black uppercase tracking-tight"
                            >
                                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                                {t(ui.nav[id])}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
