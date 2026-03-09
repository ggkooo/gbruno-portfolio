const Expertise = () => {
    return (
        <section id="services" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-32 md:mb-64">
            <div className="col-span-1 lg:col-span-6">
                <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-[1.1] mb-6 md:mb-8">
                    Architecting robust digital solutions with <span className="text-primary text-glow">modern stacks</span>.
                </h2>
            </div>
            <div className="col-span-1 lg:col-span-5 lg:col-start-8 mt-4 lg:mt-0">
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    I am a Full Stack Developer focused on building scalable web applications. From low-latency microservices to reactive front-end interfaces, I bridge the gap between complex backend logic and seamless user experiences. I specialize in turning ideas into high-performance reality.
                </p>
            </div>
        </section>
    );
};

export default Expertise;
