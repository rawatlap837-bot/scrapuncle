import Reveal from './Reveal.jsx'
import Accordion from './ui/Accordion.jsx'

export const faqs = [
  { q: 'What Scrap Do You Buy?', a: 'We Buy Iron, Steel, Copper, Aluminium, Brass, Paper, Plastic, E-waste, And Old Appliances.' },
  { q: 'Is The Doorstep Pickup Free?', a: 'Yes. Pickup From Your Doorstep Is Free.' },
  { q: 'How Is My Scrap Weighed?', a: 'We Use Digital Weighing Scales For Accurate, Transparent Weight.' },
  { q: 'When Can I Book A Pickup?', a: 'We Are Open Monday To Saturday, 8 AM To 7 PM.' },
  { q: 'Which Areas Do You Serve?', a: 'Our Service Is Available Across Delhi NCR.' },
  { q: 'How Do I Get Paid?', a: 'Payment Is Instant Once Your Scrap Has Been Weighed.' },
]

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-pad bg-bg-base">
      <div className="gutter mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[35fr_65fr] lg:gap-14">
        <Reveal>
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-hover">FAQ</p>
          <h2 id="faq-title" className="h2">Questions, Answered</h2>
          <p className="mt-4 text-text-muted">Still Unsure? Call Or WhatsApp: +91 88823 43340</p>
          <a href="#contact" className="mt-4 inline-flex min-h-[44px] items-center font-semibold text-accent-hover underline">Contact Us</a>
        </Reveal>
        <Reveal delay={100}><Accordion items={faqs} /></Reveal>
      </div>
    </section>
  )
}
