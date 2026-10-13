import { Phone } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Button from './ui/Button.jsx'

const rows = ['Iron', 'Steel', 'Copper', 'Aluminium', 'Brass', 'Paper', 'Plastic', 'E-waste and old appliances']

export default function Rates() {
  return (
    <section id="rates" aria-labelledby="rates-title" className="section-pad bg-surface-alt">
      <div className="gutter mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto mb-8 max-w-[640px] text-center lg:mb-12">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-hover">Scrap rates</p>
            <h2 id="rates-title" className="h2">Fair rates, clearly listed</h2>
            <p className="mt-4 text-text-muted">Call or WhatsApp: +91 98765 43210</p>
          </div>
        </Reveal>
        <Reveal className="mx-auto max-w-[720px]">
          <div className="overflow-x-auto rounded-card bg-white shadow-md2">
            <table className="w-full min-w-[420px] text-left">
              <caption className="sr-only">Scrap rates by material</caption>
              <thead>
                <tr className="border-b border-line text-sm text-text-muted">
                  <th scope="col" className="px-6 py-4 font-semibold">Material</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Rate</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r} className="border-b border-line last:border-0">
                    <th scope="row" className="px-6 py-4 font-semibold">{r}</th>
                    <td className="px-6 py-4 text-text-muted">[USER TO PROVIDE: rate per kg]</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="cta" href="tel:+919876543210"><Phone aria-hidden="true" size={20} /> Call for today's rate</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
