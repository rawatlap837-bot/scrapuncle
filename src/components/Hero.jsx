import { ArrowRight, Play, Recycle, Truck, Scale, Banknote, BadgeIndianRupee, Leaf } from 'lucide-react'
import Button, { CircleButton } from './ui/Button.jsx'

export default function Hero() {
  return (
    <section id="top" className="gutter mx-auto max-w-[1200px] pt-2">
      <div className="relative flex min-h-[520px] flex-col justify-center overflow-hidden rounded-hero hero-green text-white p-6 sm:p-10 md:min-h-[480px] lg:h-[560px] lg:p-0">
        {/* Decorative depth layers (CSS-built, no photo) */}
        <div aria-hidden="true" className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-white/10" />
        <div aria-hidden="true" className="absolute -bottom-32 right-24 h-[360px] w-[360px] rounded-full bg-white/10" />
        <div aria-hidden="true" className="drift absolute right-10 top-12 hidden h-56 w-56 items-center justify-center rounded-full bg-white shadow-lg2 md:flex lg:right-24 lg:top-20 lg:h-72 lg:w-72">
          <Truck size={112} strokeWidth={2} className="text-accent-hover" />
        </div>
        <div aria-hidden="true" className="glass z-10 absolute right-[27rem] top-[250px] text-text-main hidden items-center gap-2 rounded-chip px-4 py-2 text-sm font-semibold lg:flex">
          <Banknote size={20} className="text-success" /> Instant payment
        </div>
        <div aria-hidden="true" className="glass z-10 absolute right-8 top-[330px] text-text-main hidden items-center gap-2 rounded-chip px-4 py-2 text-sm font-semibold md:flex lg:right-12">
          <Recycle size={20} className="text-success" /> Fair rates
        </div>

        <div aria-hidden="true" className="absolute left-8 top-1/2 hidden -translate-y-1/2 flex-col items-center lg:flex">
          {[1, 2, 3].map((n, i) => (
            <div key={n} className="flex flex-col items-center">
              <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${i === 0 ? 'bg-white text-text-main' : 'border border-white/60 text-white'}`}>{n}</span>
              {i < 2 && <span className="h-8 w-px bg-white/40" />}
            </div>
          ))}
        </div>

        <div className="relative max-w-[640px] lg:pl-16">
          <p className="fade-up mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-green-200">Free doorstep pickup</p>
          <h1 className="h1">
            <span className="fade-up block">Turn your scrap</span>
            <span className="fade-up block" style={{ animationDelay: '100ms' }}>into cash</span>
            <span className="fade-up block" style={{ animationDelay: '200ms' }}>today.</span>
          </h1>
          <p className="fade-up mt-5 text-lg font-medium" style={{ animationDelay: '300ms' }}>
            Free doorstep pickup. Fair rates. Instant payment.
          </p>
          <ul className="fade-up mt-5 flex flex-wrap gap-2" style={{ animationDelay: '350ms' }}>
            <li className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-text-main">
              <BadgeIndianRupee aria-hidden="true" size={18} className="text-accent-hover" /> Fair price
            </li>
            <li className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-text-main">
              <Leaf aria-hidden="true" size={18} className="text-accent-hover" /> Environment friendly
            </li>
          </ul>
          <div className="fade-up mt-8 flex items-center gap-3" style={{ animationDelay: '400ms' }}>
            <Button variant="cta" href="#contact">Book pickup</Button>
            <CircleButton label="See how it works" href="#how-it-works"><Play aria-hidden="true" size={20} /></CircleButton>
          </div>
        </div>

        <div className="notched relative text-text-main mt-8 flex flex-col gap-3 rounded-card bg-white p-5 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-80 lg:p-6 lg:pl-8">
          <a href="#why-us" className="inline-flex min-h-[44px] items-center justify-between text-sm font-semibold">
            Know More <ArrowRight aria-hidden="true" size={20} />
          </a>
          <div className="flex items-center">
            {[Recycle, Truck, Scale].map((Icon, i) => (
              <span key={i} aria-hidden="true" className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-accent-soft text-accent-hover ${i ? '-ml-3' : ''}`}>
                <Icon size={20} />
              </span>
            ))}
          </div>
          <div>
            <p className="font-semibold">Digital weighing scales</p>
            <p className="text-xs text-text-muted">Accurate, transparent weight.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
