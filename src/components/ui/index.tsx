/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, useState } from 'react';
import type { ReactNode, SVGProps } from 'react';

// ---------------------------------------------------------------- reveal

/** Adds `is-visible` once the element scrolls into view (CSS handles motion + reduced-motion). */
export function useReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    // Browsers without IntersectionObserver just show everything.
    const [visible, setVisible] = useState(() => typeof window !== 'undefined' && !('IntersectionObserver' in window));

    useEffect(() => {
        const el = ref.current;
        if (!el || visible) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    io.disconnect();
                }
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, [visible]);

    return [ref, `reveal ${visible ? 'is-visible' : ''}`] as const;
}

// ---------------------------------------------------------------- section

interface SectionProps {
    id: string;
    index: string;
    title: string;
    children: ReactNode;
    aside?: ReactNode;
}

export function Section({ id, index, title, children, aside }: SectionProps) {
    const [ref, revealClass] = useReveal<HTMLElement>();
    return (
        <section id={id} ref={ref} className={`py-20 md:py-32 ${revealClass}`} aria-labelledby={`${id}-title`}>
            <header className="mb-10 md:mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                    <span className="font-mono text-xs text-primary tracking-widest">{index} /</span>
                    <h2 id={`${id}-title`} className="mt-3 font-display text-4xl md:text-6xl font-black uppercase tracking-tighter text-balance">
                        {title}
                    </h2>
                </div>
                {aside}
            </header>
            {children}
        </section>
    );
}

// ---------------------------------------------------------------- tag

export function Tag({ children }: { children: ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted">
            {children}
        </span>
    );
}

// ---------------------------------------------------------------- brand icons
// lucide-react no longer ships brand marks, so these are inline (simple-icons paths).

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const brand = (path: string) =>
    function BrandIcon({ size = 20, ...props }: IconProps) {
        return (
            <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...props}>
                <path d={path} />
            </svg>
        );
    };

export const GitHubIcon = brand(
    'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
);

export const LinkedInIcon = brand(
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
);

export const InstagramIcon = brand(
    'M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227a3.71 3.71 0 0 1-.896 1.382 3.72 3.72 0 0 1-1.382.896c-.422.164-1.057.36-2.227.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.413a3.71 3.71 0 0 1-1.381-.896 3.71 3.71 0 0 1-.896-1.382c-.164-.422-.36-1.057-.413-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.381.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a5.88 5.88 0 0 0-2.126 1.384A5.88 5.88 0 0 0 .63 4.14C.333 4.902.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.058 1.277.261 2.15.558 2.913a5.88 5.88 0 0 0 1.384 2.126A5.88 5.88 0 0 0 4.14 23.37c.763.297 1.636.5 2.913.558C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.15-.261 2.913-.558a5.88 5.88 0 0 0 2.126-1.384 5.88 5.88 0 0 0 1.384-2.126c.297-.763.5-1.636.558-2.913.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.261-2.15-.558-2.913a5.88 5.88 0 0 0-1.384-2.126A5.88 5.88 0 0 0 19.86.63C19.098.333 18.225.13 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
);
