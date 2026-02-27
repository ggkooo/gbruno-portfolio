import paper1 from '../../assets/1304499.pdf';
import paper2 from '../../assets/1606371.pdf';

const Publications = () => {
    const publications = [
        {
            title: "SCRATCH: APRENDENDO PROGRAMAÇÃO COM PLATAFORMA LOW-CODE",
            event: "Salão do Conhecimento UNIJUÍ",
            type: "Resumo Expandido",
            year: "2024",
            award: "Premiado como Destaque em 2025",
            icon: "code_blocks",
            file: paper1
        },
        {
            title: "PROJETO APPGO: ARQUITETURA BACKEND DO PHYSICGO",
            event: "Salão do Conhecimento UNIJUÍ",
            type: "Resumo Expandido",
            year: "2025",
            icon: "account_tree",
            file: paper2
        }
    ];

    return (
        <section id="articles" className="mb-32 md:mb-64">
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 md:mb-16">Selected Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {publications.map((pub, index) => (
                    <a
                        key={index}
                        href={pub.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group hover:bg-white/5 transition-all duration-500 block"
                    >
                        <div className="flex items-start justify-between mb-8">
                            <span className="material-symbols-outlined text-4xl text-primary opacity-40 group-hover:opacity-100 transition-opacity">
                                {pub.icon}
                            </span>
                            <div className="flex flex-col items-end gap-2">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                                    {pub.type}
                                </span>
                                {pub.award && (
                                    <span className="text-[9px] uppercase tracking-[0.15em] text-yellow-500 font-bold bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20 animate-pulse">
                                        🏆 {pub.award}
                                    </span>
                                )}
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors leading-tight">
                            {pub.title}
                        </h3>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                            <div className="flex items-center gap-3 text-slate-500">
                                <span className="material-symbols-outlined text-sm">event</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold">
                                    {pub.event} • {pub.year}
                                </span>
                            </div>
                            <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-1">
                                picture_as_pdf
                            </span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Publications;
