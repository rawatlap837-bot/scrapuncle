import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function MeetTheKabadi() {
  return (
    <section id="meet-the-kabadi" aria-labelledby="kabadi-title" className="section-pad bg-white">
      <div className="gutter mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative mx-auto flex min-h-[280px] w-full max-w-[480px] items-center justify-center overflow-hidden rounded-[28px] bg-[#0f7541] p-8 text-white sm:min-h-[360px]">
            <div aria-hidden="true" className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[36px] border-white/10" />
            <div aria-hidden="true" className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-white/10" />
            <div className="relative w-full max-w-[360px] overflow-hidden rounded-[24px] border border-white/20 shadow-xl">
              <img
                src="/photo.png"
                alt="Sohil Alvi"
                className="h-[280px] w-full object-cover object-top sm:h-[320px]"
                width="929"
                height="945"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="max-w-[520px]">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-hover">Meet The Kabadi</p>
            <h2 id="kabadi-title" className="h2">Your Local Scrap Pickup Partner</h2>
            <p className="mt-4 text-text-muted">We Make Clearing Scrap From Your Home, Shop, Or Office Simple. Get A Convenient Doorstep Pickup And See Your Items Weighed In Front Of You.</p>
            <a href="#contact" className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-6 font-semibold text-white transition hover:bg-accent-hover">
              Book A Free Pickup <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
