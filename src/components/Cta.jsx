import { ArrowRight, Truck } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Button from './ui/Button.jsx'

export default function Cta() {
  return (
    <section aria-labelledby="cta-title" className="bg-sky-tint py-10 sm:py-14">
      <div className="gutter mx-auto max-w-[1200px]">
        <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex items-start gap-4 sm:items-center sm:gap-5">
            <span aria-hidden="true" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-accent-hover sm:h-16 sm:w-16">
              <Truck size={30} strokeWidth={1.8} />
            </span>
            <div>
              <h2 id="cta-title" className="text-[26px] font-bold leading-tight tracking-[-0.025em] sm:text-[32px]">Ready To Clear Some Space?</h2>
              <p className="mt-2 text-sm leading-6 text-text-muted sm:text-base">Free Doorstep Scrap Pickup Across Delhi NCR.</p>
            </div>
          </div>
          <Button href="#contact" variant="dark" className="w-full shrink-0 !px-6 md:w-auto">
            Book Free Pickup <ArrowRight aria-hidden="true" size={18} />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
