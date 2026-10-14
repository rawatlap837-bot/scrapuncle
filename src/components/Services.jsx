import { ArrowRight, BadgeIndianRupee, Leaf } from 'lucide-react'
import Reveal from './Reveal.jsx'

const items = [
  { slug: 'inverter', title: 'Inverter', text: 'Used Inverters And Backup Units.', eco: 'Recycled Responsibly' },
  { slug: 'battery', title: 'Battery', text: 'Old Batteries, Collected For Responsible Recycling.', eco: 'Recycled Responsibly' },
  { slug: 'fridge', title: 'Fridge', text: 'Used Refrigerators And Large Appliances.', eco: 'Recycled Responsibly' },
  { slug: 'air-conditioner', title: 'AC', text: 'Old Window And Split Air Conditioners.', eco: 'Recycled Responsibly' },
  { slug: 'air-cooler', title: 'Cooler', text: 'Used Air Coolers And Their Parts.', eco: 'Recycled Responsibly' },
  { slug: 'fan', title: 'Pankha (Fan)', text: 'Old Pedestal, Table, And Ceiling Fans.', eco: 'Recycled Responsibly' },
  { slug: 'washing-machine', title: 'Washing Machine', text: 'Used Front- And Top-Load Machines.', eco: 'Recycled Responsibly' },
  { slug: 'raddi-paper', title: 'Raddi Paper', text: 'Old Newspapers, Books, Cartons, And Paper.', eco: 'Recycled Responsibly' },
  { slug: 'computer', title: 'Computer', text: 'Used Computers, Monitors, And Parts.', eco: 'Recycled Responsibly' },
]

function CollectionCards({ duplicate = false }) {
  return items.map(({ slug, title, text, eco }) => (
    <li key={slug} className="collect-slide w-[min(82vw,320px)] shrink-0 sm:w-[min(42vw,340px)] lg:w-[340px]">
      <a href="#contact" tabIndex={duplicate ? -1 : undefined} aria-label={`${title}: Get A Quote`} className="group flex h-full flex-col overflow-hidden rounded-card bg-surface-alt transition duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-lg2">
        <div className="img-zoom relative aspect-[3/2] overflow-hidden bg-sky-tint">
          <img
            src={`/images/collect/${slug}.jpg`}
            alt={`Old ${title} ready for scrap collection`}
            loading="lazy"
            width="900"
            height="600"
            className="h-full w-full object-cover"
          />
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[12px] font-semibold text-text-main shadow-sm2">
            <BadgeIndianRupee aria-hidden="true" size={14} className="text-accent-hover" /> Fair Price
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
            Get A Quote <ArrowRight aria-hidden="true" size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </a>
    </li>
  ))
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-pad overflow-hidden bg-white">
      <div className="gutter mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto mb-10 max-w-[640px] text-center lg:mb-14">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-hover">What We Collect</p>
            <h2 id="services-title" className="h2">If It Is Scrap, We Buy It</h2>
            <p className="mt-4 text-text-muted">Inverters, Batteries, Fridges, ACs, Coolers, Fans, Washing Machines, Raddi Paper, And Computers.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="collect-viewport" role="region" aria-label="Scrap Items We Collect" tabIndex={0}>
            <div className="collect-track flex w-max" aria-live="off">
              <ul className="collect-track-group flex shrink-0 gap-5 pr-5" aria-label="Collection Items">
                <CollectionCards />
              </ul>
              <ul className="collect-track-group flex shrink-0 gap-5 pr-5" aria-hidden="true">
                <CollectionCards duplicate />
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
