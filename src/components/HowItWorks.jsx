import { CalendarCheck, Truck, Banknote } from 'lucide-react'
import Reveal from './Reveal.jsx'

const steps = [
  { Icon: CalendarCheck, title: 'Book Your Pickup', text: 'Call, WhatsApp Or Fill In The Short Form. Pick A Time That Suits You.' },
  { Icon: Truck, title: 'We Collect & Weigh', text: 'We Arrive At Your Door And Weigh Your Scrap In Front Of You.' },
  { Icon: Banknote, title: 'Get Paid Instantly', text: 'Approve Your Quote And Receive Payment On The Spot.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="section-pad mt-8 bg-white lg:mt-12">
      <div className="gutter mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto mb-10 max-w-[640px] text-center lg:mb-14">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-hover">How It Works</p>
            <h2 id="how-title" className="h2">Pickup In 3 Simple Steps</h2>
            <p className="mt-4 text-text-muted">No Shop Visits, No Hassle. We Come To You.</p>
          </div>
        </Reveal>
        <ol className="pickup-timeline relative grid gap-5 md:grid-cols-3 md:gap-6">
          {steps.map(({ Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 120} className="timeline-step group relative grid grid-cols-[48px_minmax(0,1fr)] items-start gap-4 rounded-[24px] border border-green-100 bg-[#f7faf7] p-5 shadow-sm2 transition duration-[250ms] hover:shadow-md2 md:block md:bg-surface-alt md:p-8 md:text-center md:shadow-none">
              <span aria-hidden="true" className="timeline-icon relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white shadow-md2 md:mx-auto md:mb-5 md:h-[72px] md:w-[72px] md:rounded-full">
                <Icon size={25} />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-cta text-sm font-bold text-text-main">{i + 1}</span>
              </span>
              <div className="relative z-10 min-w-0">
                <h3 className="mt-1 text-lg font-bold leading-tight md:text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-muted md:text-base">{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
