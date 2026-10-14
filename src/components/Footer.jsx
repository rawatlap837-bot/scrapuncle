import { Recycle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="gutter border-t border-line bg-white pb-24 pt-14 md:pb-10">
      <div className="mx-auto grid max-w-[1200px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 text-lg font-bold"><Recycle aria-hidden="true" size={24} className="text-success" />[Brand name]</p>
          <p className="mt-3 text-text-muted">Turn your scrap into cash today. Free doorstep pickup.</p>
        </div>
        <div>
          <h2 className="mb-3 text-base font-semibold">Explore</h2>
          <ul className="space-y-1">
            {[['#how-it-works', 'How it works'], ['#why-us', 'Why choose us'], ['#services', 'What we collect'], ['#faq', 'FAQ']].map(([h, l]) => (
              <li key={h}><a href={h} className="inline-flex min-h-[44px] items-center hover:underline">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-base font-semibold">Book</h2>
          <ul className="space-y-1">
            <li><a href="#contact" className="inline-flex min-h-[44px] items-center hover:underline">Pickup booking</a></li>
            <li><a href="#top" className="inline-flex min-h-[44px] items-center hover:underline">Back to top</a></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-base font-semibold">Contact</h2>
          <p><a href="tel:+919876543210" className="font-semibold hover:underline">+91 98765 43210</a></p>
          <p className="text-text-muted">Open Monday to Saturday, 8 AM to 7 PM.</p>
          <p className="text-text-muted">Service available across Delhi NCR.</p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1200px] flex-col justify-between gap-2 border-t border-line pt-6 text-sm text-text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} [Brand name]</p>
        <p className="flex gap-4">
          <a href="#top" className="inline-flex min-h-[44px] items-center hover:underline">Privacy</a>
          <a href="#top" className="inline-flex min-h-[44px] items-center hover:underline">Terms</a>
        </p>
      </div>
    </footer>
  )
}
