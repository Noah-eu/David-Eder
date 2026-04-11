import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HelpSection } from './components/HelpSection'
import { AudienceSection } from './components/AudienceSection'
import { PackagesSection } from './components/PackagesSection'
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
        <PackagesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
