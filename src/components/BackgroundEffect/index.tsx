/** Decorative, fixed background: subtle grid, two soft brand glows and film grain. */
const BackgroundEffects = () => (
    <div aria-hidden>
        <div className="noise-overlay" />
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="bg-grid absolute inset-0" />
            {/* Radial gradients instead of blur() filters: same glow, far cheaper to paint. */}
            <div className="absolute -top-96 -right-72 h-[960px] w-[960px] bg-[radial-gradient(closest-side,rgba(168,85,247,0.22),transparent)]" />
            <div className="absolute -bottom-72 -left-72 h-[820px] w-[820px] bg-[radial-gradient(closest-side,rgba(49,46,129,0.35),transparent)]" />
        </div>
    </div>
);

export default BackgroundEffects;
