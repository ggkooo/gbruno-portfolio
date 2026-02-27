const BackgroundEffects = () => {
    return (
        <>
            <div className="noise-overlay"></div>
            <div className="star-noise"></div>
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="gradient-blur bg-primary w-[600px] h-[600px] -top-64 -right-32 rounded-full"></div>
                <div className="gradient-blur bg-indigo-900 w-[500px] h-[500px] bottom-0 -left-40 rounded-full"></div>
            </div>
        </>
    );
};

export default BackgroundEffects;
