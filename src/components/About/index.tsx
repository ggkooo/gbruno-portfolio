import { useState } from 'react';
import { useLang } from '../../i18n';
import { about, profile, ui } from '../../data/content';
import { Section } from '../ui';

function Portrait() {
    const [failed, setFailed] = useState(false);
    const initials = profile.name
        .split(' ')
        .map((p) => p[0])
        .join('');

    return (
        <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-line bg-surface">
            {failed ? (
                <div className="grid h-full place-items-center font-display text-7xl font-black text-primary/40" aria-hidden>
                    {initials}
                </div>
            ) : (
                <img
                    src={profile.photo}
                    srcSet={`${profile.photoSmall} 400w, ${profile.photo} 720w`}
                    sizes="(min-width: 400px) 384px, 100vw"
                    width={720}
                    height={1083}
                    alt={profile.name}
                    loading="lazy"
                    onError={() => setFailed(true)}
                    className="h-full w-full object-cover object-[50%_20%] grayscale-[30%] transition duration-700 hover:grayscale-0"
                />
            )}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/20" />
        </div>
    );
}

const About = () => {
    const { t } = useLang();

    return (
        <Section id="about" index="01" title={t(ui.sections.about)}>
            <div className="grid gap-10 md:grid-cols-12 md:gap-16">
                <div className="md:col-span-5">
                    <Portrait />
                </div>
                <div className="md:col-span-7 flex flex-col justify-between gap-10">
                    <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted">
                        {about.paragraphs.map((p, i) => (
                            <p key={i} className={i === 0 ? 'text-white/90' : undefined}>
                                {t(p)}
                            </p>
                        ))}
                    </div>
                    <dl className="grid grid-cols-3 gap-4 border-t border-line pt-8">
                        {about.facts.map((f) => (
                            <div key={f.label.en} className="flex flex-col-reverse">
                                <dt className="mt-1 text-xs uppercase tracking-widest text-muted">{t(f.label)}</dt>
                                <dd className="font-display text-4xl md:text-5xl font-black text-white">{f.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </Section>
    );
};

export default About;
