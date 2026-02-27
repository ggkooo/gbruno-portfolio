import BackgroundEffects from "./components/BackgroundEffect"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Expertise from "./components/Expertise"
import TechStack from "./components/TechStack"
import SelectedWorks from "./components/SelectedWorks"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import Publications from "./components/Publications"

function App() {

  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <Hero />
        <Expertise />
        <TechStack />
        <SelectedWorks />
        <Publications />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}

export default App
