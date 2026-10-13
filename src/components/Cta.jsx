import { ArrowRight, Truck } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function Cta() {
  return (
    <section aria-labelledby="cta-title" className="section-pad bg-sky-tint">
      <div className="gutter mx-auto grid max-w-[1200px] gap-8 md:grid-cols-[1fr_2fr] lg:gap-8">
        <Reveal className="order-2 md:order-1">
          <div aria-hidden="true" className="flex aspect-[4/5] max-w-[320px] items-center justify-center rounded-card bg-white shadow-md2 md:max-w-none">
            <Truck size={96} className="text-accent-hover" />
          </div>
          <div className="mt-4 rounded-chip bg-white p-4">
            <p className="text-2xl font-bold text-accent-hover">Free</p>
            <p className="text-[13px] text-text-muted">Doorstep pickup across Delhi NCR</p>
          </div>
        </Reveal>
        <Reveal className="order-1 flex flex-col justify-between gap-8 md:order-2">
          <h2 id="cta-title" className="giant font-bold">
            Turn your<br />scrap into<br />cash today.
          </h2>
          <a href="#contact" className="group flex h-16 items-center justify-center gap-3 rounded-full bg-white/70 text-xl font-medium backdrop-blur transition hover:bg-white">
            Book a free pickup
            <ArrowRight aria-hidden="true" size={24} className="transition-transform duration-200 group-hover:translate-x-1.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
