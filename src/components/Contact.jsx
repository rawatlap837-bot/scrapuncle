import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check, Truck, X } from 'lucide-react'
import Field from './ui/Input.jsx'
import Button from './ui/Button.jsx'

const types = [
  { value: 'Paper & Raddi', image: '/images/booking/paper.png', detail: 'Newspapers, books & cartons' },
  { value: 'Electronic Scrap', image: '/images/collect/computer.jpg', detail: 'Computers & old electronics' },
  { value: 'Home Appliances', image: '/images/booking/electrical.png', detail: 'Fans, fridges & household items' },
  { value: 'Metal Scrap', image: '/images/collect/iron-steel.svg', detail: 'Iron, steel, copper & aluminium' },
  { value: 'Plastic Scrap', image: '/images/collect/plastic.svg', detail: 'Bottles, containers & plastic items' },
  { value: 'Batteries & Cables', image: '/images/collect/battery.jpg', detail: 'Used batteries, wires & cables' },
]

const pickupSlots = ['8 AM – 10 AM', '10 AM – 12 PM', '12 PM – 2 PM', '2 PM – 4 PM', '4 PM – 6 PM', '6 PM – 7 PM']
const bookingScriptUrl = 'https://script.google.com/macros/s/AKfycbyLCp17jn017Fkua_K7tj_iaKB5GnTUyWvSggXyLNFW_Bn8xM13FT8E4qlhjhKNLoU3/exec'
const todayInIndia = () => {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date())
  const value = type => parts.find(part => part.type === type).value
  return `${value('year')}-${value('month')}-${value('day')}`
}

export default function Contact() {
  const dialog = useRef(null)
  const [values, setValues] = useState({ name: '', phone: '', types: [], area: '', date: '', slot: '', message: '' })
  const [errors, setErrors] = useState({})
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState('')
  const [whatsAppUrl, setWhatsAppUrl] = useState('')
  const [whatsAppFallbackUrl, setWhatsAppFallbackUrl] = useState('')
  const set = (key, value) => {
    setValues(previous => key === 'date'
      ? { ...previous, date: value, slot: '' }
      : { ...previous, [key]: value })
    setErrors(previous => ({ ...previous, [key]: '' }))
    setSaveError('')
    setWhatsAppFallbackUrl('')
  }
  const toggleType = type => {
    setValues(previous => ({
      ...previous,
      types: previous.types.includes(type)
        ? previous.types.filter(selected => selected !== type)
        : [...previous.types, type],
    }))
    setErrors(previous => ({ ...previous, types: '' }))
    setSaveError('')
    setWhatsAppFallbackUrl('')
  }
  useEffect(() => {
    const openBooking = event => {
      const link = event.target.closest('a[href="#contact"]')
      if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
      event.preventDefault()
      if (!dialog.current.open) dialog.current.showModal()
    }
    document.addEventListener('click', openBooking)
    return () => document.removeEventListener('click', openBooking)
  }, [])
  const submit = async event => {
    event.preventDefault()
    const phone = values.phone.replace(/[\s()-]/g, '')
    const next = {
      name: values.name.trim().length < 2 ? 'Please enter your name.' : '',
      phone: /^(?:\+91|91)?[6-9]\d{9}$/.test(phone) ? '' : 'Enter a valid Indian mobile number.',
      types: values.types.length ? '' : 'Please select at least one scrap type.',
      area: /^\d+$/.test(values.area.trim())
        ? (/^[1-9]\d{5}$/.test(values.area.trim()) ? '' : 'Enter a valid 6-digit PIN code.')
        : (values.area.trim().length >= 3 ? '' : 'Enter your area or 6-digit PIN code.'),
      date: /^\d{4}-\d{2}-\d{2}$/.test(values.date) && values.date >= todayInIndia() ? '' : 'Choose today or a future pickup date.',
      slot: pickupSlots.includes(values.slot) ? '' : 'Please choose a pickup time slot.',
    }
    setErrors(next)
    if (Object.values(next).some(Boolean)) return
    const message = [
      'Hello! I would like to book a free scrap pickup.',
      '',
      `• Name: ${values.name.trim()}`,
      `• Contact number: ${phone}`,
      `• Scrap types: ${values.types.join(', ')}`,
      `• Area or PIN code: ${values.area.trim()}`,
      `• Preferred pickup date: ${values.date}`,
      `• Preferred time slot (IST): ${values.slot}`,
      ...(values.message.trim() ? [`• Message: ${values.message.trim()}`] : []),
    ].join('\n')
    const whatsAppLink = `https://wa.me/918882343340?text=${encodeURIComponent(message)}`
    setSaving(true)
    setSaveError('')
    setWhatsAppFallbackUrl('')
    try {
      await fetch(bookingScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify({ ...values, name: values.name.trim(), phone, area: values.area.trim(), message: values.message.trim() }),
      })
      setWhatsAppUrl(whatsAppLink)
    } catch (error) {
      setSaveError(error.message || 'Could not send the pickup request. Please try again.')
      setWhatsAppFallbackUrl(whatsAppLink)
    } finally {
      setSaving(false)
    }
  }
  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="section-pad bg-surface-alt">
        <div className="gutter mx-auto max-w-[1200px] text-center">
          <h2 id="contact-title" className="h2">Your Scrap. A Fresh Start.</h2>
          <p className="mx-auto mb-6 mt-3 max-w-md text-text-muted">Choose your scrap types and preferred pickup time to arrange a free doorstep pickup.</p>
          <Button as="button" type="button" onClick={() => dialog.current.showModal()}>Book Free Pickup <ArrowRight size={18} aria-hidden="true" /></Button>
        </div>
      </section>
      <dialog ref={dialog} className="booking-dialog" aria-labelledby="booking-title" onClick={event => { if (event.target === dialog.current) dialog.current.close() }}>
        <div className="booking-panel">
          <button type="button" onClick={() => dialog.current.close()} aria-label="Close pickup form" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-text-main"><X size={21} /></button>
          <div className="booking-header">
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-hover"><Truck size={17} aria-hidden="true" /> Free doorstep pickup</span>
            <h2 id="booking-title" className="text-[28px] font-bold leading-tight tracking-tight">Let’s clear some space.</h2>
            <p className="mt-2 text-sm text-text-muted">A few details and you’re ready to book.</p>
          </div>
          {whatsAppUrl ? (
            <div className="booking-form text-center" role="status">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e6f5e9] text-accent-hover"><Check size={28} aria-hidden="true" /></span>
              <h3 className="text-xl font-bold">Pickup request sent</h3>
              <p className="mb-6 mt-2 text-sm text-text-muted">Please send us a WhatsApp message to confirm that we received your request and arrange your preferred slot.</p>
              <Button href={whatsAppUrl} target="_blank" rel="noopener noreferrer" variant="accent" className="w-full">Continue on WhatsApp <ArrowRight size={18} aria-hidden="true" /></Button>
            </div>
          ) : <form onSubmit={submit} noValidate className="booking-form">
            <Field id="booking-name" label="Name" autoComplete="name" required maxLength={80} value={values.name} onChange={event => set('name', event.target.value)} error={errors.name} placeholder="Your name" />
            <Field id="booking-phone" label="Contact number" type="tel" inputMode="tel" autoComplete="tel" required maxLength={18} value={values.phone} onChange={event => set('phone', event.target.value)} error={errors.phone} placeholder="Your mobile number" />
            <fieldset aria-describedby="scrap-type-help scrap-type-error">
              <legend className="text-sm font-semibold">Scrap types</legend>
              <p id="scrap-type-help" className="mb-3 mt-1 text-xs text-text-muted">Select all that apply.</p>
              <div className="grid grid-cols-2 gap-3">
                {types.map(type => (
                  <label key={type.value} className="booking-option">
                    <input type="checkbox" name="scrap-types" value={type.value} checked={values.types.includes(type.value)} onChange={() => toggleType(type.value)} className="peer sr-only" />
                    <span className="booking-option-content">
                      <img src={type.image} alt="" width="400" height="400" className="aspect-[4/3] w-full object-cover" />
                      <span className="block p-3"><span className="block text-sm font-bold leading-tight">{type.value}</span><span className="mt-1 block text-[11px] leading-snug text-text-muted">{type.detail}</span></span>
                      <span className="booking-check" aria-hidden="true"><Check size={12} /></span>
                    </span>
                  </label>
                ))}
              </div>
              <p id="scrap-type-error" role="status" className="mt-1 min-h-[20px] text-[13px] text-danger">{errors.types}</p>
            </fieldset>
            <Field id="booking-area" label="Area or PIN code" autoComplete="off" required maxLength={120} value={values.area} onChange={event => set('area', event.target.value)} error={errors.area} placeholder="E.g. Saket or 110017" />
            <fieldset>
              <legend className="mb-3 text-sm font-semibold">Preferred pickup slot</legend>
              <div className="grid min-w-0 gap-x-3 sm:grid-cols-2">
                <Field id="booking-date" label="Date" type="date" required min={todayInIndia()} value={values.date} onChange={event => set('date', event.target.value)} error={errors.date} />
                <Field id="booking-slot" label="Time (IST)" as="select" required value={values.slot} onChange={event => set('slot', event.target.value)} error={errors.slot}>
                  <option value="">Choose a time slot</option>
                  {pickupSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                </Field>
              </div>
              <p className="mb-4 text-xs text-text-muted">We’ll confirm your preferred time on WhatsApp.</p>
            </fieldset>
            <Field id="booking-message" label="Message (optional)" as="textarea" rows={3} maxLength={1000} value={values.message} onChange={event => set('message', event.target.value)} placeholder="Describe your scrap, approximate quantity, or pickup instructions…" />
            {saveError && <p role="alert" className="mb-3 rounded-xl bg-red-50 p-3 text-sm text-danger">{saveError}</p>}
            <Button as="button" type="submit" variant="accent" disabled={saving} className="w-full">{saving ? 'Sending your request…' : 'Send pickup request'} <ArrowRight size={18} aria-hidden="true" /></Button>
            {whatsAppFallbackUrl && <a href={whatsAppFallbackUrl} target="_blank" rel="noopener noreferrer" className="mt-3 block text-center text-sm font-semibold text-accent-hover underline">Send via WhatsApp instead</a>}
            <p className="mt-3 text-center text-xs leading-relaxed text-text-muted">We’ll confirm your preferred pickup time on WhatsApp.</p>
          </form>}
        </div>
      </dialog>
    </>
  )
}
