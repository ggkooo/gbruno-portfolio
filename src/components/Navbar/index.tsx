import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 z-40 w-full px-6 md:px-12 py-5 md:py-8 flex justify-between items-center bg-background-dark/80 backdrop-blur-xl border-b border-white/5 relative">
                <div className="hidden lg:flex gap-10 text-xs font-bold uppercase tracking-[0.2em]">
                    <a className="nav-link" href="#home">Home</a>
                    <a className="nav-link" href="#services">Services</a>
                    <a className="nav-link" href="#stack">Stack</a>
                    <a className="nav-link" href="#projects">Projects</a>
                    <a className="nav-link" href="#articles">Articles</a>

                </div>

                <div className="lg:hidden z-30">
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="text-white hover:text-primary transition-colors focus:outline-none"
                    >
                        <span className="material-symbols-outlined text-2xl">
                            menu
                        </span>
                    </button>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 font-display font-black text-xl md:text-2xl tracking-tighter uppercase text-glow z-10">
                    G.Bruno
                </div>

                <div className="hidden md:block">
                    <a
                        className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full border border-primary/40 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-primary/10 transition-all box-glow text-primary"
                        href="mailto:hello@gbruno.dev"
                    >
                        Say hi
                        <span className="material-symbols-outlined text-sm">north_east</span>
                    </a>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-[60] lg:hidden backdrop-blur-sm transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

            <div className={`fixed top-0 left-0 h-screen w-[75%] max-w-sm bg-[#050505] border-r border-white/10 z-[70] flex flex-col p-8 transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="self-end text-white hover:text-primary transition-colors focus:outline-none mb-12"
                >
                    <span className="material-symbols-outlined text-3xl">close</span>
                </button>

                <div className="flex flex-col gap-8 flex-grow">
                    <a className="nav-link text-lg font-bold uppercase tracking-[0.2em]" href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <a className="nav-link text-lg font-bold uppercase tracking-[0.2em]" href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                    <a className="nav-link text-lg font-bold uppercase tracking-[0.2em]" href="#stack" onClick={() => setIsMobileMenuOpen(false)}>Stack</a>
                    <a className="nav-link text-lg font-bold uppercase tracking-[0.2em]" href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                    <a className="nav-link text-lg font-bold uppercase tracking-[0.2em]" href="#articles" onClick={() => setIsMobileMenuOpen(false)}>Articles</a>
                </div>

                <div className="mt-auto pt-8 border-t border-white/10">
                    <a
                        className="flex justify-center items-center gap-2 px-6 py-4 rounded-full border border-primary/40 text-xs font-bold uppercase tracking-widest hover:bg-primary/10 transition-all box-glow text-primary"
                        href="mailto:hello@gbruno.dev"
                    >
                        Say hi
                        <span className="material-symbols-outlined text-sm">north_east</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
