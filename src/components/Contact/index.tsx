import { useEffect, useState } from 'react';
import { Check, Copy, Mail } from 'lucide-react';
import { useLang } from '../../i18n';
import { profile, ui } from '../../data/content';
import { useReveal } from '../ui';

const Contact = () => {
    const { t } = useLang();
    const [ref, revealClass] = useReveal<HTMLElement>();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const id = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(id);
    }, [copied]);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
        } catch {
            window.location.href = `mailto:${profile.email}`;
        }
    };

    return (
        <section id="contact" ref={ref} className={`py-24 md:py-40 text-center ${revealClass}`}>
            <h2 className="mx-auto max-w-5xl font-display text-[clamp(2.75rem,8vw,7rem)] font-black uppercase leading-[0.95] tracking-tighter text-balance">
                {t(ui.contact.title)}
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-muted md:text-lg">{t(ui.contact.text)}</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                    <Mail size={16} aria-hidden /> {t(ui.contact.cta)}
                </a>
                <button type="button" onClick={copy} className="btn-ghost">
                    {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
                    <span aria-live="polite">{t(copied ? ui.contact.copied : ui.contact.copy)}</span>
                </button>
            </div>
            <p className="mt-6 font-mono text-sm text-faint">{profile.email}</p>
        </section>
    );
};

export default Contact;
