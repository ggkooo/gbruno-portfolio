import BackgroundEffects from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Recognition from './components/Recognition';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-black">
                Skip to content
            </a>
            <BackgroundEffects />
            <Navbar />
            <main id="main" className="mx-auto max-w-page px-5 md:px-8">
                <Hero />
                <About />
                <Projects />
                <Stack />
                <Experience />
                <Recognition />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
