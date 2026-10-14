import { ArrowRight, Recycle, Truck, Scale, Banknote, Leaf, Check } from 'lucide-react'
import Button from './ui/Button.jsx'

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="gutter mx-auto max-w-[1200px] pt-2">
      <div className="hero-green relative isolate overflow-hidden rounded-[28px] px-5 py-7 text-white sm:rounded-hero sm:p-10 lg:p-14">
        <div aria-hidden="true" className="pointer-events-none absolute -right-36 -top-36 h-[520px] w-[520px] rounded-full border-[70px] border-white/5" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-64 left-1/3 h-[460px] w-[460px] rounded-full bg-white/5" />
        <div className="relative grid items-center gap-6 lg:min-h-[440px] lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          <div>
            <p className="fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.07em] sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-green-300" /> Doorstep pickup in Delhi NCR
            </p>
            <h1 id="hero-title" className="fade-up text-[38px] font-bold leading-[1.06] tracking-[-0.04em] sm:text-[52px] lg:text-[60px]">
              Turn your scrap<br />into <span className="text-[#c9f5a6]">cash.</span>
            </h1>
            <p className="fade-up mt-4 max-w-[440px] text-[15px] leading-6 sm:mt-6 sm:leading-7 text-green-50/90 sm:text-lg" style={{ animationDelay: '100ms' }}>
              We collect, weigh and pay at your doorstep. Clear your space without the hassle.
            </p>
            <div className="fade-up mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3" style={{ animationDelay: '200ms' }}>
              <Button variant="cta" href="#contact" className="w-full !px-5 sm:w-auto">Book free pickup <ArrowRight aria-hidden="true" size={18} /></Button>
              <a href="#how-it-works" className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold text-green-50 hover:bg-white/10">How it works <ArrowRight aria-hidden="true" size={16} /></a>
            </div>
            <ul className="fade-up mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/15 pt-4 text-[11px] sm:mt-7 font-medium text-green-100 sm:text-sm" style={{ animationDelay: '300ms' }}>
              {['Free pickup', 'Digital weighing', 'Instant payment'].map(item => <li key={item} className="inline-flex items-center gap-1.5"><Check aria-hidden="true" size={16} className="text-green-300" />{item}</li>)}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-[410px]">
            <div className="relative rounded-[24px] border border-white/20 bg-white/10 p-2 sm:rounded-[32px] shadow-[0_20px_70px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:p-7">
              <div className="hidden items-center justify-between gap-3 text-xs font-semibold text-green-100 sm:flex">
                <span className="inline-flex items-center gap-2"><Recycle aria-hidden="true" size={18} /> A fresh start for your scrap</span>
                <Leaf aria-hidden="true" size={20} />
              </div>
              <div aria-hidden="true" className="relative hidden h-[220px] items-center justify-center sm:flex">
                <div className="absolute h-36 w-36 rounded-full border border-white/15 sm:h-44 sm:w-44" />
                <div className="absolute h-28 w-28 rounded-full bg-[#c9f5a6]/10 sm:h-36 sm:w-36" />
                <Truck className="drift relative h-24 w-24 text-[#c9f5a6] sm:h-28 sm:w-28" strokeWidth={1.5} />
              </div>
              <div className="rounded-2xl bg-white p-4 text-text-main sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-hover"><Scale aria-hidden="true" size={23} /></span>
                  <div><p className="text-sm font-bold">Weighed right in front of you</p><p className="mt-1 text-xs leading-5 text-text-muted">A clear quote. You decide before we collect.</p></div>
                </div>
                <div className="mt-4 flex items-center gap-2 border-t border-line pt-3 text-xs font-semibold text-accent-hover"><Banknote aria-hidden="true" size={18} /> Payment on the spot</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

