import { ArrowRight, Recycle, Scale, Truck } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function MeetTheKabadi() {
  return (
    <section id="meet-the-kabadi" aria-labelledby="kabadi-title" className="section-pad bg-white">
      <div className="gutter mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative mx-auto flex min-h-[280px] w-full max-w-[480px] items-center justify-center overflow-hidden rounded-[28px] bg-[#0f7541] p-8 text-white sm:min-h-[360px]">
            <div aria-hidden="true" className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[36px] border-white/10" />
            <div aria-hidden="true" className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-white/10" />
            <div className="relative w-full max-w-[300px] rounded-[24px] border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-sm sm:p-7">
              <div className="flex items-center justify-between text-green-50">
                <span className="inline-flex items-center gap-2 text-sm font-semibold"><Recycle size={18} /> Scrap Pickup</span>
                <Scale size={20} />
              </div>
              <div className="flex h-40 items-center justify-center sm:h-48">
                <Truck aria-hidden="true" className="text-[#c9f5a6]" size={112} strokeWidth={1.4} />
              </div>
              <div className="rounded-2xl bg-white p-4 text-text-main">
                <p className="text-sm font-bold">A Friendly Face At Your Door</p>
                <p className="mt-1 text-xs text-text-muted">Pickup, Weighing, And Payment Made Simple.</p>
              </div>
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
