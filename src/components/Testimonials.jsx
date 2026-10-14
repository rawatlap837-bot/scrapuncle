import { MessageSquareQuote, Star } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="section-pad bg-[#f3f7f3]">
      <div className="gutter mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto max-w-[640px] text-center">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-hover">Testimonials</p>
            <h2 id="testimonials-title" className="h2">What Our Customers Say</h2>
            <p className="mt-4 text-text-muted">We're Gathering Feedback From Customers. Their Stories Will Appear Here Soon.</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mx-auto mt-9 flex max-w-[760px] items-start gap-4 rounded-[24px] border border-white bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.045)] sm:gap-6 sm:p-9">
            <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent-hover sm:h-14 sm:w-14"><MessageSquareQuote size={26} /></span>
            <div>
              <div aria-hidden="true" className="mb-3 flex gap-1 text-amber-400">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} />)}</div>
              <h3 className="text-lg font-bold">Your Experience Matters</h3>
              <p className="mt-2 text-text-muted">Have You Used Our Scrap Pickup Service? We're Preparing This Space For Real Customer Feedback.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
