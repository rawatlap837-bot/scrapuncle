import { BadgeIndianRupee, Scale, Truck, Banknote, Leaf, Clock } from 'lucide-react'
import Reveal from './Reveal.jsx'

const reasons = [
  { Icon: BadgeIndianRupee, title: 'Fair prices', text: 'Clear, honest rates for every material. No hidden cuts, no surprises.', tag: 'Fair price' },
  { Icon: Scale, title: 'Digital weighing', text: 'Accurate, transparent weight measured in front of you.', tag: 'Transparent' },
  { Icon: Truck, title: 'Free doorstep pickup', text: 'We come to your home, shop or office across Delhi NCR at no charge.', tag: 'Zero cost' },
  { Icon: Banknote, title: 'Instant payment', text: 'You are paid as soon as your scrap is weighed.', tag: 'Paid on the spot' },
  { Icon: Leaf, title: 'Environment friendly', text: 'Your scrap is sent for recycling, so it becomes new material instead of landfill.', tag: 'Eco-friendly' },
  { Icon: Clock, title: 'Convenient timing', text: 'Open Monday to Saturday, 8 AM to 7 PM. Book a slot that fits your day.', tag: 'Mon to Sat' },
]

export default function WhyChoose() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="section-pad bg-surface-alt">
      <div className="gutter mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto mb-10 max-w-[640px] text-center lg:mb-14">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-hover">Why choose us</p>
            <h2 id="why-title" className="h2">Fair for you. Good for the planet.</h2>
            <p className="mt-4 text-text-muted">A scrap service you can trust, from booking to payment.</p>
          </div>
        </Reveal>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ Icon, title, text, tag }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 100} className="rounded-card bg-white p-7 shadow-sm2 transition duration-[250ms] hover:-translate-y-1 hover:shadow-md2">
              <div className="mb-5 flex items-center justify-between">
                <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent-hover"><Icon size={26} /></span>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-[12px] font-semibold text-accent-hover">{tag}</span>
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-text-muted">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
