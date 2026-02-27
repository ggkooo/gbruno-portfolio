

const Hero = () => {
    return (
        <section id="home" className="min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center text-center relative mt-12 md:mt-0">
            <div className="mb-12 relative w-full">
                <h1 className="font-display text-5xl sm:text-7xl md:text-[7.5rem] leading-[1] md:leading-[0.85] font-black uppercase tracking-tighter mb-4">
                    HI THERE<br className="hidden md:block" />
                    <span className="md:hidden"> </span>I'M GIORDANO BRUNO<br />
                    <span className="relative inline-block border-2 border-primary text-primary px-4 md:px-10 py-2 md:py-3 mt-6 md:mt-8 text-glow box-glow text-2xl sm:text-4xl md:text-5xl whitespace-nowrap overflow-hidden text-ellipsis max-w-[90vw] md:max-w-none animate-float">
                        FULL STACK DE<span className="hidden sm:inline">VELOPER</span><span className="sm:hidden">V.</span>
                        <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-primary"></span>
                        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-primary"></span>
                        <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-primary"></span>
                        <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-primary"></span>
                    </span>
                </h1>
                <div className="absolute left-1/2 md:-left-20 top-[-60px] md:top-1/2 -translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2 opacity-60">
                    <img
                        alt="Abstract 3D Shape"
                        className="w-16 h-16 md:w-28 md:h-28 object-cover rounded-full mix-blend-lighten border border-primary/20 animate-soft-float"
                        src="/hero-shape.png"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
