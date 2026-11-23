import { ArrowUpRight, Briefcase, GraduationCap, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLang } from '../../i18n';
import { experience, ui } from '../../data/content';
import type { TimelineItem } from '../../data/content';
import { Section, Tag } from '../ui';

const ICONS: Record<TimelineItem['kind'], LucideIcon> = { work: Briefcase, company: Rocket, education: GraduationCap };

const Experience = () => {
    const { t } = useLang();
    return (
        <Section id="experience" index="04" title={t(ui.sections.experience)}>
            <ol className="relative ml-4 border-l border-line">
                {experience.map((item, i) => {
                    const Icon = ICONS[item.kind];
                    return (
                        <li key={i} className="relative pb-12 pl-10 last:pb-0 md:pl-14">
                            <span className="absolute -left-[18px] top-0 grid h-9 w-9 place-items-center rounded-full border border-primary/40 bg-ink text-primary-soft">
                                <Icon size={16} aria-hidden />
                            </span>
                            <div className="grid gap-2 md:grid-cols-12 md:gap-8">
                                <p className="font-mono text-xs uppercase tracking-widest text-primary md:col-span-3 md:pt-1.5">
                                    {t(item.period)}
                                </p>
                                <div className="md:col-span-9">
                                    <h3 className="font-display text-2xl font-bold tracking-tight">{t(item.title)}</h3>
                                    {item.url ? (
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-widest text-primary-soft hover:text-white transition-colors"
                                        >
                                            {item.org} <ArrowUpRight size={14} aria-hidden />
                                        </a>
                                    ) : (
                                        <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-muted">{item.org}</p>
                                    )}
                                    {item.text && <p className="mt-4 max-w-2xl text-muted leading-relaxed">{t(item.text)}</p>}
                                    {item.stack && (
                                        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Stack">
                                            {item.stack.map((s) => (
                                                <li key={s}>
                                                    <Tag>{s}</Tag>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </Section>
    );
};

export default Experience;
