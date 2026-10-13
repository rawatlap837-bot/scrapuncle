import { CalendarCheck, Truck, Banknote } from 'lucide-react'
import Reveal from './Reveal.jsx'

const steps = [
  { Icon: CalendarCheck, title: 'Book your pickup', text: 'Call, WhatsApp or fill in the short form. Pick a time that suits you.' },
  { Icon: Truck, title: 'We pickup and weigh', text: 'Our team arrives at your door and weighs everything on a digital scale in front of you.' },
  { Icon: Banknote, title: 'Get paid instantly', text: 'See the weight, accept the rate and receive payment on the spot.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="section-pad mt-8 bg-white lg:mt-12">
      <div className="gutter mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto mb-10 max-w-[640px] text-center lg:mb-14">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-hover">How it works</p>
            <h2 id="how-title" className="h2">Pickup in 3 simple steps</h2>
            <p className="mt-4 text-text-muted">No shop visits, no hassle. We come to you.</p>
          </div>
        </Reveal>
        <ol className="relative grid gap-6 md:grid-cols-3">
          <div aria-hidden="true" className="absolute left-[16.6%] right-[16.6%] top-[52px] hidden border-t-2 border-dashed border-accent/40 md:block" />
          {steps.map(({ Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 120} className="relative rounded-card bg-surface-alt p-8 text-center transition duration-[250ms] hover:-translate-y-1 hover:shadow-md2">
              <span aria-hidden="true" className="relative mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-accent text-white shadow-md2">
                <Icon size={30} />
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-cta text-sm font-bold text-text-main">{i + 1}</span>
              </span>
              <p className="text-sm font-semibold text-text-muted">Step {i + 1}</p>
              <h3 className="mt-1 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-text-muted">{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
