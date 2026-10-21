import { BadgeIndianRupee, Scale, Truck, Banknote, Leaf, Clock } from 'lucide-react'
import Reveal from './Reveal.jsx'

const reasons = [
  { Icon: BadgeIndianRupee, title: 'Free Visit, No Extra Cost or Visit Charge' },
  { Icon: Scale, title: 'Proper Weighing' },
  { Icon: Truck, title: 'Free Doorstep Pickup, No Extra Pickup Cost' },
  { Icon: Banknote, title: 'Instant Payment On The Spot, No Approval Needed' },
  { Icon: Leaf, title: 'Environmentally Friendly' },
  { Icon: Clock, title: 'Convenient Timing' },
]

export default function WhyChoose() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="section-pad relative overflow-hidden bg-[#f3f7f3]">
      <div className="why-inner gutter mx-auto max-w-[1200px]">
        <Reveal>
          <div className="why-heading mx-auto mb-10 max-w-[640px] text-center lg:mb-14">
            <p className="why-eyebrow mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-accent-hover shadow-sm2"><span className="h-2 w-2 rounded-full bg-success" /> Why Choose Us</p>
            <h2 id="why-title" className="h2">A Better Way To Clear Your Scrap.</h2>
            <p className="why-intro">Good service should feel simple from the very first call.</p>
          </div>
        </Reveal>
        <ul className="why-grid relative grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {reasons.map(({ Icon, title }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 100} className="why-card group relative flex min-h-[76px] items-center gap-3 overflow-hidden rounded-[16px] border border-white bg-white/90 p-3 text-left shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-[0_18px_40px_rgba(15,23,42,0.09)] sm:min-h-[170px] sm:gap-4 sm:rounded-[24px] sm:p-6">
              <span aria-hidden="true" className="why-card-wash absolute -right-9 -top-10 h-28 w-28 rounded-full bg-green-50 transition-transform duration-500 group-hover:scale-125" />
              <span aria-hidden="true" className="why-icon relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf6ed] text-accent-hover transition duration-300 group-hover:rotate-[-4deg] group-hover:bg-accent group-hover:text-white sm:h-16 sm:w-16 sm:rounded-2xl"><Icon size={21} strokeWidth={1.9} className="sm:h-[30px] sm:w-[30px]" /></span>
              <h3 className="relative min-w-0 flex-1 text-left text-[17px] font-bold leading-tight tracking-[-0.02em] sm:text-[24px]">{title}</h3>
              <span aria-hidden="true" className="why-number relative ml-auto hidden font-bold tabular-nums">0{i + 1}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
