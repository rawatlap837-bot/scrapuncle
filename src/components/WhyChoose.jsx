import { BadgeIndianRupee, Scale, Truck, Banknote, Leaf, Clock } from 'lucide-react'
import Reveal from './Reveal.jsx'

const reasons = [
  { Icon: BadgeIndianRupee, title: 'Clear quotes', text: 'Get a straightforward quote after we assess your items, with no pressure to proceed.', tag: 'Your choice' },
  { Icon: Scale, title: 'Digital weighing', text: 'Accurate, transparent weight measured in front of you.', tag: 'Transparent' },
  { Icon: Truck, title: 'Free doorstep pickup', text: 'We come to your home, shop or office across Delhi NCR at no charge.', tag: 'Zero cost' },
  { Icon: Banknote, title: 'Instant payment', text: 'You are paid as soon as your scrap is weighed.', tag: 'Paid on the spot' },
  { Icon: Leaf, title: 'Environment friendly', text: 'Your scrap is sent for recycling, so it becomes new material instead of landfill.', tag: 'Eco-friendly' },
  { Icon: Clock, title: 'Convenient timing', text: 'Open Monday to Saturday, 8 AM to 7 PM. Book a slot that fits your day.', tag: 'Mon to Sat' },
]

export default function WhyChoose() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="section-pad relative overflow-hidden bg-[#f3f7f3]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-green-100/70 blur-3xl" />
      <div className="gutter mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto mb-10 max-w-[640px] text-center lg:mb-14">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-accent-hover shadow-sm2"><span className="h-2 w-2 rounded-full bg-success" /> Why choose us</p>
            <h2 id="why-title" className="h2">A better way to clear your scrap.</h2>
            <p className="mx-auto mt-4 max-w-[520px] text-text-muted">From doorstep pickup to instant payment, every step is designed to be simple and transparent.</p>
          </div>
        </Reveal>
        <ul className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {reasons.map(({ Icon, title, text, tag }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 100} className="group relative overflow-hidden rounded-[24px] border border-white bg-white/90 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-[0_18px_40px_rgba(15,23,42,0.09)] sm:p-7">
              <span aria-hidden="true" className="absolute -right-9 -top-10 h-28 w-28 rounded-full bg-green-50 transition-transform duration-500 group-hover:scale-125" />
              <div className="relative mb-6 flex items-start justify-between">
                <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf6ed] text-accent-hover transition duration-300 group-hover:rotate-[-4deg] group-hover:bg-accent group-hover:text-white"><Icon size={25} strokeWidth={1.9} /></span>
                <span className="rounded-full border border-green-100 bg-white px-3 py-1 text-[11px] font-bold text-accent-hover">{tag}</span>
              </div>
              <h3 className="relative text-lg font-bold tracking-[-0.02em] sm:text-xl">{title}</h3>
              <p className="relative mt-2 text-[15px] leading-7 text-text-muted">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
