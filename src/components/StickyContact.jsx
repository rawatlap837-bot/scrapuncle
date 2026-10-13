import { Phone, MessageCircle } from 'lucide-react'

export default function StickyContact() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-white p-3 md:hidden">
      <a href="tel:+919876543210" className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-cta font-semibold text-text-main">
        <Phone aria-hidden="true" size={20} /> Call
      </a>
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (opens in a new tab)" className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-secondary-accent font-semibold text-white">
        <MessageCircle aria-hidden="true" size={20} /> WhatsApp
      </a>
    </div>
  )
}
