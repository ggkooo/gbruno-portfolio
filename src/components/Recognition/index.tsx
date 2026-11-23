import { useState } from 'react';
import { ArrowUpRight, Award, FileText, Mic, Trophy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLang } from '../../i18n';
import { recognition, ui } from '../../data/content';
import type { Recognition as RecognitionItem, RecognitionKind } from '../../data/content';
import { Section } from '../ui';

const ICONS: Record<RecognitionKind, LucideIcon> = { publication: FileText, hackathon: Trophy, summit: Mic };
const FILTERS = ['all', 'publication', 'hackathon', 'summit'] as const;
type Filter = (typeof FILTERS)[number];

function Row({ item }: { item: RecognitionItem }) {
    const { t } = useLang();
    const Icon = ICONS[item.kind];
    const body = (
        <>
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-primary-soft group-hover:border-primary/40">
                <Icon size={18} aria-hidden />
            </span>
            <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="font-display text-lg md:text-2xl font-bold tracking-tight group-hover:text-primary-soft transition-colors">
                        {item.title}
                    </h3>
                    {item.award && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-300">
                            <Award size={12} aria-hidden /> {t(item.award)}
                        </span>
                    )}
                </div>
                <p className="mt-1 text-sm text-muted">
                    {item.org}
                    {item.detail && `, ${t(item.detail)}`}
                </p>
            </div>
            <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-faint">{item.year}</span>
                {item.file && (
                    <ArrowUpRight size={20} className="text-faint transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                )}
            </div>
        </>
    );
    const cls = 'group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 md:gap-8 md:py-8 transition-colors hover:bg-white/[0.02]';

    return item.file ? (
        <a href={item.file} target="_blank" rel="noopener noreferrer" className={cls} title={t(ui.recognition.open)}>
            {body}
        </a>
    ) : (
        <div className={cls}>{body}</div>
    );
}

const Recognition = () => {
    const { t } = useLang();
    const [filter, setFilter] = useState<Filter>('all');
    const items = filter === 'all' ? recognition : recognition.filter((r) => r.kind === filter);

    const filters = (
        <div className="flex flex-wrap gap-2" role="group">
            {FILTERS.map((f) => (
                <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    aria-pressed={filter === f}
                    className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                        filter === f ? 'border-primary bg-primary text-black' : 'border-white/10 text-muted hover:text-white'
                    }`}
                >
                    {t(ui.recognition[f])}
                </button>
            ))}
        </div>
    );

    return (
        <Section id="recognition" index="05" title={t(ui.sections.recognition)} aside={filters}>
            <ul className="divide-y divide-line border-y border-line">
                {items.map((item) => (
                    <li key={item.title}>
                        <Row item={item} />
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default Recognition;
