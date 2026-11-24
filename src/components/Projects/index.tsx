import { Atom, BrainCircuit, ChartColumn, Server, Ticket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLang } from '../../i18n';
import { projects, ui } from '../../data/content';
import type { Project, ProjectIcon } from '../../data/content';
import { GitHubIcon, Section, Tag } from '../ui';

const ICONS: Record<ProjectIcon, LucideIcon> = { ticket: Ticket, atom: Atom, chart: ChartColumn, server: Server, brain: BrainCircuit };

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const { t } = useLang();
    const Icon = ICONS[project.icon];
    const { repo, frontend, backend } = project.links;
    const repos = [
        repo && { href: repo, label: t(ui.projects.repo) },
        frontend && { href: frontend, label: t(ui.projects.frontend) },
        backend && { href: backend, label: t(ui.projects.backend) },
    ].filter((r): r is { href: string; label: string } => !!r);

    return (
        <article className={`card-interactive group flex flex-col overflow-hidden ${index === 0 ? 'md:col-span-2' : ''}`}>
            {project.image && (
                <div className="aspect-[16/9] overflow-hidden border-b border-line">
                    <img
                        src={project.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                </div>
            )}
            <div className="flex flex-1 flex-col p-7 md:p-9">
                <div className="mb-8 flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary-soft">
                        <Icon size={22} aria-hidden />
                    </span>
                    <span className="font-mono text-xs text-faint">
                        {String(index + 1).padStart(2, '0')}
                        {project.year && ` / ${project.year}`}
                    </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">{project.name}</h3>
                <p className="mt-3 text-muted leading-relaxed">{t(project.summary)}</p>

                <p className="mt-5 text-xs uppercase tracking-widest text-faint">
                    {t(ui.projects.role)}: <span className="text-white/80">{t(project.role)}</span>
                </p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Stack">
                    {project.stack.map((s) => (
                        <li key={s}>
                            <Tag>{s}</Tag>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8">
                    {repos.map((r) => (
                        <a
                            key={r.href}
                            href={r.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 py-1.5 text-sm font-semibold text-muted hover:text-white transition-colors"
                        >
                            <GitHubIcon size={15} /> {r.label}
                        </a>
                    ))}
                </div>
            </div>
        </article>
    );
}

const Projects = () => {
    const { t } = useLang();
    return (
        <Section id="projects" index="02" title={t(ui.sections.projects)}>
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                {projects.map((p, i) => (
                    <ProjectCard key={p.id} project={p} index={i} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
