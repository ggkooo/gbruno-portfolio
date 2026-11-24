/**
 * All site content lives here. Edit this file to update the portfolio —
 * components only render what is declared below.
 *
 * Every user-facing string is `{ pt, en }`. Entries marked `TODO` are
 * placeholders that still need real information.
 */
import type { Localized } from '../i18n';

import paperScratch from '../assets/1304499.pdf';
import paperAppGo from '../assets/1606371.pdf';
import certSouthSummit from '../assets/ssb-2026.pdf';

// ---------------------------------------------------------------- profile

export const profile = {
    name: 'Giordano Bruno',
    fullName: 'Giordano Bruno Biasi Berwig',
    shortName: 'G.Bruno',
    role: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' } as Localized,
    tagline: {
        pt: 'Construo aplicações web completas, do banco de dados à interface, com React, TypeScript, PHP e Laravel.',
        en: 'I build complete web applications, from database to interface, with React, TypeScript, PHP and Laravel.',
    } as Localized,
    email: 'giordanoberwig@proton.me',
    /** Put the photo at public/profile.webp. Initials are shown until it exists. */
    photo: '/profile.webp',
    photoSmall: '/profile-400.webp',
    /**
     * CV download button. Hidden while undefined. After adding public/cv-pt.pdf and
     * public/cv-en.pdf, set it to { pt: '/cv-pt.pdf', en: '/cv-en.pdf' }.
     */
    cv: undefined as Localized | undefined,
    socials: {
        github: 'https://github.com/ggkooo',
        linkedin: 'https://www.linkedin.com/in/giordano-berwig/',
        instagram: 'https://www.instagram.com/giordanoberwig/',
    },
};

// ---------------------------------------------------------------- UI copy

export const ui = {
    nav: {
        about: { pt: 'Sobre', en: 'About' },
        projects: { pt: 'Projetos', en: 'Projects' },
        stack: { pt: 'Stack', en: 'Stack' },
        experience: { pt: 'Trajetória', en: 'Journey' },
        recognition: { pt: 'Reconhecimentos', en: 'Recognition' },
        contact: { pt: 'Contato', en: 'Contact' },
        openMenu: { pt: 'Abrir menu', en: 'Open menu' },
        closeMenu: { pt: 'Fechar menu', en: 'Close menu' },
        switchLang: { pt: 'Switch to English', en: 'Mudar para português' },
    },
    hero: {
        greeting: { pt: 'Olá, eu sou', en: "Hi, I'm" },
        ctaProjects: { pt: 'Ver projetos', en: 'See projects' },
        ctaCv: { pt: 'Baixar currículo', en: 'Download CV' },
    },
    sections: {
        about: { pt: 'Sobre mim', en: 'About me' },
        projects: { pt: 'Projetos selecionados', en: 'Selected work' },
        stack: { pt: 'Stack & serviços', en: 'Stack & services' },
        experience: { pt: 'Experiência & formação', en: 'Experience & education' },
        recognition: { pt: 'Pesquisa & eventos', en: 'Research & events' },
    },
    projects: {
        role: { pt: 'Meu papel', en: 'My role' },
        repo: { pt: 'Repositório', en: 'Repository' },
        frontend: { pt: 'Frontend', en: 'Frontend' },
        backend: { pt: 'Backend', en: 'Backend' },
    },
    recognition: {
        all: { pt: 'Todos', en: 'All' },
        publication: { pt: 'Publicações', en: 'Publications' },
        hackathon: { pt: 'Hackathons', en: 'Hackathons' },
        summit: { pt: 'Eventos', en: 'Summits' },
        open: { pt: 'Abrir documento', en: 'Open document' },
    },
    contact: {
        title: { pt: 'Vamos criar algo incrível.', en: "Let's build something great." },
        text: {
            pt: 'Tem um projeto, uma vaga ou só quer trocar uma ideia? Meu e-mail está sempre aberto.',
            en: 'Have a project, a role, or just want to chat? My inbox is always open.',
        },
        cta: { pt: 'Enviar e-mail', en: 'Send an email' },
        copy: { pt: 'Copiar e-mail', en: 'Copy email' },
        copied: { pt: 'Copiado!', en: 'Copied!' },
    },
} satisfies Record<string, Record<string, Localized>>;

// ---------------------------------------------------------------- about

export const about = {
    // TODO: revise com sua história real (formação, o que te motiva, o que busca).
    paragraphs: [
        {
            pt: 'Sou desenvolvedor full stack e gosto de transformar problemas reais em software que as pessoas usam de verdade. Trabalho dos dois lados da aplicação: APIs e regras de negócio em PHP/Laravel, e interfaces rápidas e acessíveis em React e TypeScript.',
            en: 'I am a full stack developer who enjoys turning real problems into software people actually use. I work on both sides of the application: APIs and business logic in PHP/Laravel, and fast, accessible interfaces in React and TypeScript.',
        },
        {
            pt: 'Também participei de pesquisa acadêmica na UNIJUÍ, com trabalhos publicados no Salão do Conhecimento, além de hackathons e eventos de inovação.',
            en: 'I was also involved in academic research at UNIJUÍ, with papers published at the Salão do Conhecimento, and took part in hackathons and innovation events.',
        },
    ] as Localized[],
    facts: [
        { value: '4+', label: { pt: 'projetos publicados', en: 'shipped projects' } },
        { value: '2', label: { pt: 'artigos publicados', en: 'published papers' } },
        { value: '1', label: { pt: 'destaque acadêmico', en: 'academic award' } },
    ] as { value: string; label: Localized }[],
};

// ---------------------------------------------------------------- projects

export type ProjectIcon = 'ticket' | 'atom' | 'chart' | 'server' | 'brain';

export interface Project {
    id: string;
    name: string;
    icon: ProjectIcon;
    year?: string;
    summary: Localized;
    role: Localized;
    stack: string[];
    /** Optional screenshot in /public (e.g. /projects/siasus.webp). */
    image?: string;
    links: { repo?: string; frontend?: string; backend?: string };
}

export const projects: Project[] = [
    {
        id: 'siasus',
        name: 'SIASUS DW',
        icon: 'chart',
        summary: {
            pt: 'Dashboard de produção ambulatorial do SUS sobre um data warehouse com milhões de registros. A API entrega só dados agregados, com cache das consultas pesadas, e o frontend traz gráficos interativos, filtros compartilhados e tabelas paginadas.',
            en: 'Analytics dashboard for SUS outpatient production data over a data warehouse with millions of rows. The API serves only aggregated data with caching for heavy queries, and the frontend has interactive charts, shared filters and paginated tables.',
        },
        role: { pt: 'Full stack', en: 'Full stack' },
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Laravel', 'Sanctum', 'Docker'],
        links: {
            frontend: 'https://github.com/ggkooo/f-siasus-dw',
            backend: 'https://github.com/ggkooo/b-siasus-dw',
        },
    },
    {
        id: 'server-monitoring',
        name: 'Server Monitoring',
        icon: 'server',
        summary: {
            pt: 'Monitoramento de servidores em tempo real. O Prometheus coleta métricas do host e dos processos, o Laravel Reverb transmite tudo por WebSocket criptografado de ponta a ponta e o dashboard em React mostra os dados ao vivo.',
            en: 'Real time server monitoring. Prometheus collects host and process metrics, Laravel Reverb broadcasts them over end to end encrypted WebSocket and a React dashboard shows the data live.',
        },
        role: { pt: 'Full stack e infraestrutura', en: 'Full stack & infrastructure' },
        stack: ['Prometheus', 'Laravel Reverb', 'React', 'TypeScript', 'Docker', 'Nginx'],
        links: {
            repo: 'https://github.com/ggkooo/server-monitoring',
            frontend: 'https://github.com/ggkooo/f-server-monitoring',
            backend: 'https://github.com/ggkooo/b-server-monitoring',
        },
    },
    {
        id: 'primum-ai',
        name: 'Primum AI',
        icon: 'brain',
        summary: {
            pt: 'Triagem em saúde assistida por IA. O backend recebe datasets em CSV, transforma em registros semânticos com embeddings e responde em um chat usando modelos locais via Ollama.',
            en: 'AI assisted health triage. The backend ingests CSV datasets, turns them into semantic records with embeddings and answers in a chat using local models through Ollama.',
        },
        role: { pt: 'Full stack', en: 'Full stack' },
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Laravel', 'Ollama'],
        links: {
            frontend: 'https://github.com/ggkooo/f-primum-ai',
            backend: 'https://github.com/ggkooo/b-primum-ai',
        },
    },
    {
        id: 'physicgo',
        name: 'PhysicGO',
        icon: 'atom',
        year: '2025',
        summary: {
            pt: 'Plataforma do projeto AppGo, da UNIJUÍ. Desenhei a arquitetura do backend, que virou artigo publicado no Salão do Conhecimento 2025.',
            en: 'Platform for the AppGo project at UNIJUÍ. I designed the backend architecture, which became a paper published at Salão do Conhecimento 2025.',
        },
        role: { pt: 'Arquitetura e desenvolvimento backend', en: 'Backend architecture & development' },
        stack: ['Laravel', 'Blade', 'JavaScript'],
        links: { repo: 'https://github.com/ggkooo/physic-go' },
    },
    {
        id: 'unilab',
        name: 'UniLab Ticket Manager',
        icon: 'ticket',
        summary: {
            pt: 'Sistema de senhas de atendimento do UniLab, em uso na UNIJUÍ. Tem painel web, API e um app mobile para o totem que gera as senhas.',
            en: 'Queue ticket system for UniLab, in use at UNIJUÍ. It has a web panel, an API and a mobile app for the kiosk that issues the tickets.',
        },
        role: { pt: 'Full stack e mobile', en: 'Full stack & mobile' },
        stack: ['React', 'TypeScript', 'React Native', 'Expo', 'Laravel'],
        links: {
            frontend: 'https://github.com/ggkooo/f-tickets-manager',
            backend: 'https://github.com/ggkooo/b-tickets-manager',
        },
    },
];

// ---------------------------------------------------------------- stack

export type StackIcon = 'frontend' | 'backend' | 'devops';

export const stack: { icon: StackIcon; title: Localized; text: Localized; items: string[] }[] = [
    {
        icon: 'frontend',
        title: { pt: 'Front-end', en: 'Front-end' },
        text: {
            pt: 'Interfaces responsivas, acessíveis e performáticas.',
            en: 'Responsive, accessible and fast interfaces.',
        },
        items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SASS', 'React Native', 'Vite', 'Gulp'],
    },
    {
        icon: 'backend',
        title: { pt: 'Back-end', en: 'Back-end' },
        text: {
            pt: 'APIs REST, regras de negócio e modelagem de dados.',
            en: 'REST APIs, business logic and data modeling.',
        },
        items: ['PHP', 'Laravel', 'Smarty', 'MySQL', 'Redis'],
    },
    {
        icon: 'devops',
        title: { pt: 'Cloud & DevOps', en: 'Cloud & DevOps' },
        text: {
            pt: 'Ambientes, deploy e versionamento.',
            en: 'Environments, deployment and version control.',
        },
        items: ['Linux', 'Docker', 'Git', 'GitHub'],
    },
];

// ---------------------------------------------------------------- experience

export interface TimelineItem {
    kind: 'work' | 'company' | 'education';
    title: Localized;
    org: string;
    period: Localized;
    text?: Localized;
    url?: string;
    stack?: string[];
}

const CURRENT: Localized = { pt: 'Atual', en: 'Present' };

// TODO: adicione o ano de início de cada cargo (ex.: { pt: 'Desde 2023', en: 'Since 2023' }).
export const experience: TimelineItem[] = [
    {
        kind: 'work',
        title: { pt: 'Desenvolvedor', en: 'Developer' },
        org: 'UNIJUÍ',
        period: CURRENT,
        text: {
            pt: 'Desenvolvimento e manutenção de sistemas web da universidade.',
            en: "Development and maintenance of the university's web systems.",
        },
        stack: ['PHP', 'TPL', 'Smarty', 'SASS', 'Gulp', 'JavaScript'],
    },
    {
        kind: 'company',
        title: { pt: 'Fundador e CEO', en: 'Founder & CEO' },
        org: 'VertexCloud',
        period: CURRENT,
        url: 'https://app.vertexcloud.app.br',
    },
    {
        kind: 'company',
        title: { pt: 'Fundador e CEO', en: 'Founder & CEO' },
        org: 'Flowly',
        period: CURRENT,
        url: 'https://fflowly.online',
    },
    // TODO: adicione a formação quando tiver os dados, por exemplo:
    // { kind: 'education', title: { pt: 'Curso', en: 'Degree' }, org: 'UNIJUÍ', period: { pt: '2022 a 2026', en: '2022 to 2026' } },
];

// ---------------------------------------------------------------- recognition

export type RecognitionKind = 'publication' | 'hackathon' | 'summit';

export interface Recognition {
    kind: RecognitionKind;
    title: string;
    org: string;
    year: string;
    detail?: Localized;
    award?: Localized;
    file?: string;
}

export const recognition: Recognition[] = [
    {
        kind: 'summit',
        title: 'South Summit Brazil 2026',
        org: 'South Summit',
        year: '2026',
        detail: { pt: 'Participante', en: 'Attendee' },
        file: certSouthSummit,
    },
    {
        kind: 'publication',
        title: 'Projeto AppGo: arquitetura backend do PhysicGO',
        org: 'Salão do Conhecimento UNIJUÍ',
        year: '2025',
        detail: { pt: 'Resumo expandido', en: 'Expanded summary' },
        file: paperAppGo,
    },
    {
        kind: 'hackathon',
        title: 'Hackathon Saúde Unijuí HCI',
        org: 'UNIJUÍ e HCI',
        year: '2025',
        detail: { pt: 'Participante', en: 'Participant' },
        file: '/hackathon-certificate.png',
    },
    {
        kind: 'publication',
        title: 'Scratch: aprendendo programação com plataforma low-code',
        org: 'Salão do Conhecimento UNIJUÍ',
        year: '2024',
        detail: { pt: 'Resumo expandido', en: 'Expanded summary' },
        award: { pt: 'Trabalho destaque 2025', en: 'Highlighted work 2025' },
        file: paperScratch,
    },
];
