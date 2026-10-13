import Reveal from './Reveal.jsx'
import Accordion from './ui/Accordion.jsx'

export const faqs = [
  { q: 'What scrap do you buy?', a: 'We buy iron, steel, copper, aluminium, brass, paper, plastic, e-waste, and old appliances.' },
  { q: 'Is the doorstep pickup free?', a: 'Yes. Pickup from your doorstep is free.' },
  { q: 'How is my scrap weighed?', a: 'We use digital weighing scales for accurate, transparent weight.' },
  { q: 'When can I book a pickup?', a: 'We are open Monday to Saturday, 8 AM to 7 PM.' },
  { q: 'Which areas do you serve?', a: 'Our service is available across Delhi NCR.' },
  { q: 'How do I get paid?', a: 'Payment is instant once your scrap has been weighed.' },
]

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-pad bg-bg-base">
      <div className="gutter mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[35fr_65fr] lg:gap-14">
        <Reveal>
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-hover">FAQ</p>
          <h2 id="faq-title" className="h2">Questions, answered</h2>
          <p className="mt-4 text-text-muted">Still unsure? Call or WhatsApp: +91 98765 43210</p>
          <a href="#contact" className="mt-4 inline-flex min-h-[44px] items-center font-semibold text-accent-hover underline">Contact us</a>
        </Reveal>
        <Reveal delay={100}><Accordion items={faqs} /></Reveal>
      </div>
    </section>
  )
}
