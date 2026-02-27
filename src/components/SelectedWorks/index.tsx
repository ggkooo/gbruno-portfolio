const SelectedWorks = () => {
    return (
        <section id="projects" className="mb-32 md:mb-64">
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 md:mb-16">Selected Works</h2>
            <div className="divide-y divide-white/10">
                <a
                    className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 md:py-12 transition-all duration-500 hover:px-4 md:hover:px-8 hover:bg-white/5 gap-6 md:gap-0"
                    href="https://github.com/ggkooo/physic-go"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="flex items-center gap-4 md:gap-8">
                        <span className="material-symbols-outlined text-primary text-2xl md:text-3xl opacity-40 group-hover:opacity-100 transition-opacity">fitness_center</span>
                        <h3 className="text-2xl md:text-5xl font-bold tracking-tight">PhysicGO</h3>
                    </div>
                    <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-6 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold opacity-100 md:opacity-0 group-hover:opacity-100 transition-all">Laravel / Blade / JavaScript</span>
                        <span className="material-symbols-outlined text-3xl md:text-5xl opacity-100 md:opacity-10 group-hover:opacity-100 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">north_east</span>
                    </div>
                </a>

                <a
                    className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 md:py-12 transition-all duration-500 hover:px-4 md:hover:px-8 hover:bg-white/5 gap-6 md:gap-0"
                    href="https://github.com/ggkooo/mqtt-mobile-client"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="flex items-center gap-4 md:gap-8">
                        <span className="material-symbols-outlined text-primary text-2xl md:text-3xl opacity-40 group-hover:opacity-100 transition-opacity">settings_remote</span>
                        <h3 className="text-2xl md:text-5xl font-bold tracking-tight">MQTT Mobile Client</h3>
                    </div>
                    <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-6 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold opacity-100 md:opacity-0 group-hover:opacity-100 transition-all">React Native / Expo / JS</span>
                        <span className="material-symbols-outlined text-3xl md:text-5xl opacity-100 md:opacity-10 group-hover:opacity-100 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">north_east</span>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default SelectedWorks;
