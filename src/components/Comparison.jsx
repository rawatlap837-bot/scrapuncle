import { ArrowRight, Check, Recycle, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Button from './ui/Button.jsx'

const comparisons = [
  { label: 'Visit & pickup charges', ours: 'Free visit. Free doorstep pickup.', other: 'Ask about visit and transport charges.' },
  { label: 'Weighing your scrap', ours: 'Proper weighing at your doorstep.', other: 'Check how your scrap will be weighed.' },
  { label: 'Getting paid', ours: 'Instant payment on the spot.', other: 'Confirm when you will receive payment.' },
  { label: 'Pickup timing', ours: 'Request a date and time that suit you.', other: 'Check availability before you book.' },
  { label: 'Responsible recycling', ours: 'Collection with the environment in mind.', other: 'Ask how collected items are handled.' },
]

export default function Comparison() {
  return (
    <section id="compare" aria-labelledby="compare-title" className="section-pad bg-white">
      <div className="gutter mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto mb-8 max-w-[620px] text-center sm:mb-10">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-accent-hover"><ShieldCheck size={17} aria-hidden="true" /> Choose with confidence</p>
            <h2 id="compare-title" className="h2 tracking-tight">A Clear Choice For Your Scrap.</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">Compare our commitments with the questions worth asking any scrap dealer.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="comparison-shell">
            <table className="comparison-table">
              <caption className="sr-only">Kabadi Wale Uncle service commitments and what to check with other scrap dealers</caption>
              <thead>
                <tr>
                  <th scope="col" className="comparison-feature-heading">What matters</th>
                  <th scope="col" className="comparison-ours"><span className="mb-2 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#c9f5a6]"><Recycle size={14} aria-hidden="true" /> Our commitment</span><span className="block">Kabadi Wale Uncle</span></th>
                  <th scope="col"><span className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-text-muted">Before you book</span>Other scrap dealers</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map(row => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td className="comparison-ours"><span className="flex items-start gap-2"><Check size={17} className="mt-0.5 shrink-0 text-accent-hover" aria-hidden="true" /><span>{row.ours}</span></span></td>
                    <td>{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-col items-start justify-between gap-4 border-t border-line bg-[#f8faf8] px-5 py-5 sm:flex-row sm:items-center sm:px-7">
              <p className="max-w-md text-xs leading-relaxed text-text-muted">Services vary by dealer. Confirm charges, payment terms and availability before arranging a pickup.</p>
              <Button href="#contact" variant="accent" className="w-full shrink-0 !px-5 !text-sm sm:w-auto">Book Free Pickup <ArrowRight size={17} aria-hidden="true" /></Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
