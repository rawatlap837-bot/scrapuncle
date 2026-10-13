import { ArrowRight, BadgeIndianRupee, Leaf } from 'lucide-react'
import Reveal from './Reveal.jsx'

/*
  Images: each card first tries /images/collect/<slug>.jpg (put your AI-generated photo there).
  If that file is missing it falls back to the illustration /images/collect/<slug>.svg.
*/
const items = [
  { slug: 'iron-steel', title: 'Iron and steel', text: 'Rods, pipes, grills, sheets and machine parts, sold by weight.', eco: 'Recycled into new steel' },
  { slug: 'copper', title: 'Copper', text: 'Wire, pipes and offcuts, weighed on a digital scale.', eco: 'Endlessly recyclable metal' },
  { slug: 'aluminium-brass', title: 'Aluminium and brass', text: 'Cans, sheets, utensils and fittings, paid instantly.', eco: 'Saves energy vs. new metal' },
  { slug: 'paper-cardboard', title: 'Paper and cardboard', text: 'Newspapers, books, cartons and boxes.', eco: 'Saves trees and water' },
  { slug: 'plastic', title: 'Plastic', text: 'Bottles, containers, crates and drums.', eco: 'Keeps plastic out of landfill' },
  { slug: 'e-waste', title: 'E-waste and appliances', text: 'Old appliances, monitors, circuit boards and electronics.', eco: 'Safe, responsible disposal' },
]

function fallback(e, slug) {
  const img = e.currentTarget
  if (img.dataset.fb) return
  img.dataset.fb = '1'
  img.src = `/images/collect/${slug}.svg`
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-pad bg-white">
      <div className="gutter mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto mb-10 max-w-[640px] text-center lg:mb-14">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-hover">What we collect</p>
            <h2 id="services-title" className="h2">If it is scrap, we buy it</h2>
            <p className="mt-4 text-text-muted">We buy iron, steel, copper, aluminium, brass, paper, plastic, e-waste, and old appliances.</p>
          </div>
        </Reveal>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ slug, title, text, eco }, i) => (
            <Reveal as="li" key={slug} delay={(i % 3) * 100}>
              <a href="#contact" aria-label={`${title}: get a quote`} className="group flex h-full flex-col overflow-hidden rounded-card bg-surface-alt transition duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-lg2">
                <div className="img-zoom relative aspect-[3/2] overflow-hidden bg-sky-tint">
                  <img
                    src={`/images/collect/${slug}.jpg`}
                    onError={(e) => fallback(e, slug)}
                    alt={`${title} scrap`}
                    loading="lazy"
                    width="600"
                    height="400"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[12px] font-semibold text-text-main shadow-sm2">
                    <BadgeIndianRupee aria-hidden="true" size={14} className="text-accent-hover" /> Fair price
                  </span>
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[12px] font-semibold text-white shadow-sm2">
                    <Leaf aria-hidden="true" size={14} /> Eco-friendly
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-1 text-text-muted">{text}</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-hover">
                    <Leaf aria-hidden="true" size={16} /> {eco}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-accent-hover">
                    Get a quote <ArrowRight aria-hidden="true" size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
