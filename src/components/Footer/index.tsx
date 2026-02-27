const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-10 md:py-10 text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold border-t border-white/5 gap-6 md:gap-0">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 w-full md:w-auto">
                <a className="nav-link" href="https://github.com/ggkooo" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a className="nav-link" href="https://www.linkedin.com/in/giordano-berwig/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                <a className="nav-link" href="https://www.instagram.com/giordanoberwig/?hl=pt-br" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
            </div>
            <div className="text-center md:text-left mt-4 md:mt-0 opacity-60 md:opacity-100">Giordano Bruno — Full Stack Dev © 2026</div>
        </div>
    );
};

export default Footer;
