import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Button from './ui/Button.jsx'

const links = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#services', label: 'What We Collect' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition duration-200 ${scrolled ? 'bg-white shadow-sm2' : 'bg-transparent'}`}>
      <nav aria-label="Main" className="gutter relative mx-auto flex h-16 max-w-[1200px] items-center justify-between md:h-[72px]">
        <a href="#top" aria-label="Kabadi Wale Uncle home" className="flex min-h-[44px] items-center">
          <img src="/logo.png" alt="Kabadi Wale Uncle" width="1254" height="996" className="h-12 w-auto object-contain sm:h-14" />
        </a>
        <ul className="hidden items-center gap-10 nav:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link inline-flex min-h-[44px] items-center text-sm font-medium">{l.label}</a>
            </li>
          ))}
        </ul>
        <Button variant="dark" href="tel:+918882343340" className="hidden !h-10 !px-5 !text-sm nav:inline-flex">
          Call Now
        </Button>
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full nav:hidden"
        >
          {open ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </button>
        {open && (
          <div id="mobile-menu" className="fade-up absolute left-5 right-5 top-full rounded-card bg-white p-4 shadow-lg2 sm:left-8 sm:right-8 nav:hidden">
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="flex min-h-[48px] items-center px-3 font-medium">{l.label}</a>
                </li>
              ))}
            </ul>
            <Button variant="dark" href="tel:+918882343340" className="mt-2 w-full">
              <Phone aria-hidden="true" size={20} /> Call Now
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
