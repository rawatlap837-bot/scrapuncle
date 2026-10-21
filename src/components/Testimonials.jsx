
import { MessageSquareQuote, Star } from 'lucide-react'
import Reveal from './Reveal.jsx'

const reviews = [
  { title: 'An easy way to clear space', text: 'The pickup was simple to arrange, and the old newspapers were collected right from the doorstep.', category: 'Paper & Raddi' },
  { title: 'Everything explained clearly', text: 'Having the scrap weighed at home and the payment explained made the whole process feel straightforward.', category: 'Metal Scrap' },
  { title: 'Old appliances, sorted', text: 'Getting bulky household items out of the way was much easier with a doorstep collection.', category: 'Home Appliances' },
  { title: 'A convenient pickup', text: 'Sharing the item details and requesting a pickup time made it easy to plan around the collection.', category: 'Electronic Scrap' },
  { title: 'A fresh start for our storeroom', text: 'We finally cleared the plastic items that had been taking up space. A simple booking process helped.', category: 'Plastic Scrap' },
  { title: 'Less clutter at home', text: 'The used batteries and old cables were ready to go together, which made organising the pickup easier.', category: 'Batteries & Cables' },
]

function ReviewCards() {
  return reviews.map(review => (
    <li key={review.category} className="review-slide">
      <article className="flex h-full flex-col rounded-[24px] border border-[#e1ebe3] bg-white p-6 shadow-sm2">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="inline-flex gap-1 text-amber-400" aria-label="Sample rating: 5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={19} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />)}</span>
          <MessageSquareQuote size={25} className="text-[#b8d7bf]" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-bold leading-snug tracking-tight">{review.title}</h3>
        <p className="mb-6 mt-3 flex-1 text-[15px] leading-relaxed text-text-muted">“{review.text}”</p>
        <div className="border-t border-line pt-4">
          <p className="text-sm font-bold text-accent-hover">{review.category}</p>
          <p className="mt-1 text-xs text-text-muted">Sample testimonial · not a customer review</p>
        </div>
      </article>
    </li>
  ))
}

export default function Testimonials() {

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="section-pad bg-[#f3f7f3]">
      <div className="gutter mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto max-w-[640px] text-center">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-hover">Testimonials</p>
            <h2 id="testimonials-title" className="h2">What Our Customers Say</h2>
            {/* <p className="mt-4 text-sm text-text-muted">Preview of our review section. Sample stories below will be replaced with real customer feedback.</p> */}
          </div>
        </Reveal>
        <div className="review-viewport mt-8" role="region" aria-label="Sample testimonials carousel" tabIndex={0}>
          <div className="review-track" aria-live="off">
            <ul className="review-group" aria-label="Sample testimonials"><ReviewCards /></ul>
            <ul className="review-group review-duplicate" aria-hidden="true"><ReviewCards /></ul>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-xs text-text-muted">Swipe to browse · scroll down to continue</p>
        </div>
      </div>
    </section>
  )
}

