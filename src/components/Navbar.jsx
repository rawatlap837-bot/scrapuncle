import { useEffect, useState } from 'react'
import { Menu, X, Recycle, Phone } from 'lucide-react'
import Button from './ui/Button.jsx'

const links = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#why-us', label: 'Why us' },
  { href: '#services', label: 'What we collect' },
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
        <a href="#top" className="flex min-h-[44px] items-center gap-2 text-lg font-bold">
          <Recycle aria-hidden="true" size={24} className="text-success" />
          <span>[Brand name]</span>
        </a>
        <ul className="hidden items-center gap-10 nav:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link inline-flex min-h-[44px] items-center text-sm font-medium">{l.label}</a>
            </li>
          ))}
        </ul>
        <Button variant="dark" href="tel:+919876543210" className="hidden !h-10 !px-5 !text-sm nav:inline-flex">
          Call now
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
            <Button variant="dark" href="tel:+919876543210" className="mt-2 w-full">
              <Phone aria-hidden="true" size={20} /> Call now
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
