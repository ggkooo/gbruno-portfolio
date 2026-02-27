const CallToAction = () => {
    return (
        <section className="text-center py-20 md:py-32 border-t border-white/5">
            <h2 className="font-display text-5xl md:text-[5rem] lg:text-[7rem] font-black uppercase leading-[1.1] md:leading-[0.9] tracking-tighter mb-10 md:mb-16">
                LET'S <img alt="Icon" className="inline-block w-12 h-12 md:w-24 md:h-24 rounded-full mx-2 md:mx-4 align-middle border border-primary/30 p-1 bg-primary/5" src="/cta-icon.png" /> CREATE<br className="hidden md:block" />
                <span className="md:hidden"> </span>GREAT THINGS.
            </h2>
            <a href="mailto:giordanoberwig@proton.me" className="inline-flex items-center gap-3 bg-primary px-8 md:px-12 py-4 md:py-5 rounded-full text-sm md:text-base font-black uppercase tracking-widest text-black hover:bg-white transition-all box-glow mb-20 md:mb-40 group">
                Let’s Talk
                <span className="material-symbols-outlined font-bold group-hover:translate-x-1 transition-transform text-lg md:text-xl">arrow_forward</span>
            </a>
        </section>
    );
};

export default CallToAction;
