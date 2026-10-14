import { ArrowRight, Recycle, Truck, Leaf, Check } from 'lucide-react'
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
              <span className="h-2 w-2 rounded-full bg-green-300" /> Doorstep Pickup In Delhi NCR
            </p>
            <h1 id="hero-title" className="fade-up text-[38px] font-bold leading-[1.06] tracking-[-0.04em] sm:text-[52px] lg:text-[60px]">
              Turn Your Scrap<br />Into <span className="text-[#c9f5a6]">Cash.</span>
            </h1>
            <p className="fade-up mt-4 max-w-[440px] text-[15px] leading-6 sm:mt-6 sm:leading-7 text-green-50/90 sm:text-lg" style={{ animationDelay: '100ms' }}>
              Give Old Items A Greener Second Life. Responsible Recycling Helps Conserve Resources And Keep Reusable Materials Out Of Landfills.
            </p>
            <div className="fade-up mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3" style={{ animationDelay: '200ms' }}>
              <Button variant="cta" href="#contact" className="w-full !px-5 sm:w-auto">Book Free Pickup <ArrowRight aria-hidden="true" size={18} /></Button>
              <a href="#how-it-works" className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 text-sm font-semibold text-green-50 transition hover:bg-white/20 sm:w-auto">How It Works <ArrowRight aria-hidden="true" size={16} /></a>
            </div>
            <ul className="fade-up mt-4 flex flex-nowrap gap-1 text-[8px] font-medium text-green-50 min-[360px]:text-[9px] sm:mt-7 sm:flex-wrap sm:gap-2 sm:text-xs" style={{ animationDelay: '300ms' }}>
              {['Free Visit', 'Free Pickup', 'Instant Payment'].map(item => <li key={item} className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/25 bg-white/10 px-1.5 py-1 min-[360px]:px-2 sm:gap-1.5 sm:px-3 sm:py-2"><Check aria-hidden="true" size={12} className="text-green-300 sm:h-[15px] sm:w-[15px]" />{item}</li>)}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-[410px]">
            <div className="relative rounded-[24px] border border-white/20 bg-white/10 p-2 sm:rounded-[32px] shadow-[0_20px_70px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:p-7">
              <div className="hidden items-center justify-between gap-3 text-xs font-semibold text-green-100 sm:flex">
                <span className="inline-flex items-center gap-2"><Recycle aria-hidden="true" size={18} /> A Fresh Start For Your Scrap</span>
                <Leaf aria-hidden="true" size={20} />
              </div>
              <div aria-hidden="true" className="relative hidden h-[220px] items-center justify-center sm:flex">
                <div className="absolute h-36 w-36 rounded-full border border-white/15 sm:h-44 sm:w-44" />
                <div className="absolute h-28 w-28 rounded-full bg-[#c9f5a6]/10 sm:h-36 sm:w-36" />
                <Truck className="drift relative h-24 w-24 text-[#c9f5a6] sm:h-28 sm:w-28" strokeWidth={1.5} />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10">
                <img
                  src="/images/SohilAlvi.png"
                  alt="Sohil Alvi"
                  className="h-[240px] w-full object-cover object-top sm:h-[280px]"
                  width="1060"
                  height="1500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

