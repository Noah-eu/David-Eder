import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HelpSection } from './components/HelpSection'
import { AudienceSection } from './components/AudienceSection'
import { BenefitsSection } from './components/BenefitsSection'
import { AboutSection } from './components/AboutSection'
import { ProcessSection } from './components/ProcessSection'
import { PackagesSection } from './components/PackagesSection'
import { ApproachSection } from './components/ApproachSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a className="skip-link" href="#uvod">
        Přeskočit na obsah
      </a>
      <Header />
      <main>
        <Hero />
        <HelpSection />
        <AudienceSection />
        <BenefitsSection />
        <AboutSection />
        <ProcessSection />
        <PackagesSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
