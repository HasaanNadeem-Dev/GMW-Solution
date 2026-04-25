import Topbar from './component/Topbar.jsx'
import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx'
import SocialProof from './component/SocialProof.jsx'
import Testimonials from './component/Testimonials.jsx'
import HowItWorks from './component/HowItWorks.jsx'
import Services from './component/Services.jsx'
import WhyUs from './component/WhyUs.jsx'
import Industries from './component/Industries.jsx'
import About from './component/About.jsx'
import ContactCTA from './component/ContactCTA.jsx'
import Footer from './component/Footer.jsx'
import ScrollRevealEffects from './component/ScrollRevealEffects.jsx'

export default function App() {
  return (
    <>
      <ScrollRevealEffects />
      <Topbar />
      <Navbar />
      <Hero />
      <SocialProof />
      <Testimonials />
      <HowItWorks />
      <Services />
      <WhyUs />
      <Industries />
      <About />
      <ContactCTA />
      <Footer />
    </>
  )
}

