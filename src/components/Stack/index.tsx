import { Cloud, Monitor, Server } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLang } from '../../i18n';
import { stack, ui } from '../../data/content';
import type { StackIcon } from '../../data/content';
import { Section } from '../ui';

const ICONS: Record<StackIcon, LucideIcon> = { frontend: Monitor, backend: Server, devops: Cloud };

const Stack = () => {
    const { t } = useLang();
    return (
        <Section id="stack" index="03" title={t(ui.sections.stack)}>
            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
                {stack.map((group, i) => {
                    const Icon = ICONS[group.icon];
                    return (
                        <article key={group.icon} className="card-interactive group relative overflow-hidden p-7 md:p-9">
                            <div className="mb-12 md:mb-16 flex items-start justify-between">
                                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary-soft transition-colors group-hover:bg-primary group-hover:text-black">
                                    <Icon size={24} aria-hidden />
                                </span>
                                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                            </div>
                            <h3 className="font-display text-3xl font-bold uppercase tracking-tight">{t(group.title)}</h3>
                            <p className="mt-3 text-muted">{t(group.text)}</p>
                            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-wider text-white/70">
                                {group.items.map((item) => (
                                    <li key={item} className="before:mr-2 before:text-primary before:content-['/']">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    );
                })}
            </div>
        </Section>
    );
};

export default Stack;
