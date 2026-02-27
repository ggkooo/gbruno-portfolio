const TechStack = () => {
    return (
        <section id="stack" className="mb-64">
            <div className="flex justify-between items-end mb-16">
                <h2 className="font-display text-6xl font-black uppercase tracking-tighter">Tech Stack &amp; Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group">
                    <div className="flex items-start justify-between mb-24">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden border border-primary/20 bg-primary/5 p-4">
                            <img
                                alt="Front End"
                                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:brightness-125 transition-all duration-500"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
                            />
                        </div>
                        <p className="max-w-[140px] text-[10px] text-slate-500 font-bold uppercase tracking-widest text-right leading-loose">
                            React, TypeScript, Tailwind
                        </p>
                    </div>
                    <div>
                        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">01</span>
                        <h3 className="text-4xl font-bold uppercase tracking-tight">Front-End</h3>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group">
                    <div className="flex items-start justify-between mb-24">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden border border-primary/20 bg-primary/5 p-4">
                            <img
                                alt="Back End"
                                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:brightness-125 transition-all duration-500"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/3840px-PHP-logo.svg.png"
                            />
                        </div>
                        <p className="max-w-[140px] text-[10px] text-slate-500 font-bold uppercase tracking-widest text-right leading-loose">
                            PHP, Laravel, MySQL, Redis
                        </p>
                    </div>
                    <div>
                        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">02</span>
                        <h3 className="text-4xl font-bold uppercase tracking-tight">Back-End</h3>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group">
                    <div className="flex items-start justify-between mb-24">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden border border-primary/20 bg-primary/5 p-4">
                            <img
                                alt="Cloud Services"
                                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:brightness-125 transition-all duration-500"
                                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                            />
                        </div>
                        <p className="max-w-[140px] text-[10px] text-slate-500 font-bold uppercase tracking-widest text-right leading-loose">
                            Linux, Docker, Git, GitHub
                        </p>
                    </div>
                    <div>
                        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">03</span>
                        <h3 className="text-4xl font-bold uppercase tracking-tight">Cloud &amp; DevOps</h3>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
