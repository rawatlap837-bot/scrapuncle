import { Phone } from 'lucide-react'

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M26.3 15.6a10.3 10.3 0 0 1-15.2 9.1L5 26.5l1.8-6.1a10.3 10.3 0 1 1 19.5-4.8Z" />
      <path d="M12 10.9c-.5.3-.8 1-.8 1.8 0 3.7 4.2 7.9 7.9 7.9.8 0 1.5-.3 1.8-.8l.6-1.2-2.6-1.3-1.1 1.1a8.8 8.8 0 0 1-4.2-4.2l1.1-1.1-1.3-2.6-1.4.4Z" strokeWidth="1.8" />
    </svg>
  )
}

export default function StickyContact() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-white p-3 md:hidden">
      <a href="tel:+918882343340" className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-cta font-semibold text-text-main">
        <Phone aria-hidden="true" size={20} /> Call
      </a>
      <a href="https://wa.me/918882343340" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (Opens In A New Tab)" className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white transition-colors hover:bg-[#20bd5b]">
        <WhatsAppIcon /> WhatsApp
      </a>
    </div>
  )
}
