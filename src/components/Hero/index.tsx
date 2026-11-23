import { ArrowDown, Download } from 'lucide-react';
import { useLang } from '../../i18n';
import { profile, ui } from '../../data/content';
import { GitHubIcon, LinkedInIcon } from '../ui';

const Hero = () => {
    const { t } = useLang();

    return (
        <section id="home" className="relative flex min-h-[100svh] flex-col justify-center pt-24 pb-16">
            <div className="relative">
                <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                    {t(profile.role)}
                </p>

                <h1 className="font-display font-black uppercase leading-[0.9] tracking-tighter text-[clamp(3rem,11vw,9rem)]">
                    <span className="block text-muted text-[0.32em] tracking-tight mb-3 md:mb-4">{t(ui.hero.greeting)}</span>
                    Giordano
                    <br />
                    <span className="text-primary text-glow">Bruno.</span>
                </h1>

                <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-muted">{t(profile.tagline)}</p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                    <a href="#projects" className="btn-primary">
                        {t(ui.hero.ctaProjects)} <ArrowDown size={16} aria-hidden />
                    </a>
                    <a href={t(profile.cv)} className="btn-ghost" download>
                        <Download size={16} aria-hidden /> {t(ui.hero.ctaCv)}
                    </a>
                    <div className="ml-1 flex items-center gap-1">
                        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full text-muted hover:text-white transition-colors">
                            <GitHubIcon />
                        </a>
                        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full text-muted hover:text-white transition-colors">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>

                <img
                    src="/hero-shape.webp"
                    loading="lazy"
                    alt=""
                    aria-hidden
                    width={320}
                    height={320}
                    className="pointer-events-none absolute -right-6 top-1/2 hidden w-56 -translate-y-1/2 rounded-full opacity-70 mix-blend-lighten animate-float lg:block xl:w-80"
                />
            </div>
        </section>
    );
};

export default Hero;
