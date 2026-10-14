import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import MeetTheKabadi from './components/MeetTheKabadi.jsx'
import Services from './components/Services.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Cta from './components/Cta.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import StickyContact from './components/StickyContact.jsx'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-semibold">
        Skip To Content
      </a>
      <div className="mx-auto max-w-[1280px] overflow-hidden bg-white lg:my-6 lg:rounded-hero">
        <Navbar />
        <main id="main">
          <Hero />
          <HowItWorks />
          <WhyChoose />
          <MeetTheKabadi />
          <Services />
          <Testimonials />
          <Faq />
          <Cta />
          <Contact />
        </main>
        <Footer />
      </div>
      <StickyContact />
    </>
  )
}
