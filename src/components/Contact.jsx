import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Field from './ui/Input.jsx'
import Button from './ui/Button.jsx'

const services = ['Iron and steel', 'Copper', 'Aluminium and brass', 'Paper and cardboard', 'Plastic', 'E-waste and old appliances']

const validators = {
  name: (v) => (v.trim().length < 2 ? 'Enter your name.' : ''),
  phone: (v) => (/^(\+91)?[\s-]?[6-9]\d{4}[\s-]?\d{5}$/.test(v.trim()) ? '' : 'Enter a valid 10-digit phone number.'),
  service: (v) => (v ? '' : 'Choose what you want to sell.'),
  area: (v) => (v.trim().length < 3 ? 'Enter your area or pincode.' : ''),
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', phone: '', service: '', area: '', message: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  const set = (k) => (e) => setValues({ ...values, [k]: e.target.value })
  const blur = (k) => () => validators[k] && setErrors((er) => ({ ...er, [k]: validators[k](values[k]) }))

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    Object.keys(validators).forEach((k) => { next[k] = validators[k](values[k]) })
    setErrors(next)
    if (Object.values(next).some(Boolean)) return
    // TODO: send `values` to your backend, WhatsApp API or form service here.
    setDone(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad bg-surface-alt">
      <div className="gutter mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[45fr_55fr] lg:gap-14">
        <Reveal className="order-2 lg:order-1">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-hover">Pickup booking</p>
          <h2 id="contact-title" className="h2">Book your free pickup</h2>
          <p className="mt-4 text-text-muted">Tell us what you have. We will call you to confirm a pickup time.</p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3"><Phone aria-hidden="true" size={20} className="text-accent-hover" /><a className="font-semibold underline" href="tel:+919876543210">+91 98765 43210</a></li>
            <li className="flex items-center gap-3"><Mail aria-hidden="true" size={20} className="text-accent-hover" /><span>[USER TO PROVIDE: email address]</span></li>
            <li className="flex items-center gap-3"><MapPin aria-hidden="true" size={20} className="text-accent-hover" /><span>[USER TO PROVIDE: address]</span></li>
            <li className="flex items-center gap-3"><Clock aria-hidden="true" size={20} className="text-accent-hover" /><span>Open Monday to Saturday, 8 AM to 7 PM.</span></li>
            <li className="flex items-center gap-3"><MapPin aria-hidden="true" size={20} className="text-accent-hover" /><span>Service available across Delhi NCR.</span></li>
          </ul>
        </Reveal>
        <Reveal delay={100} className="order-1 lg:order-2">
          <div className="rounded-card bg-white p-6 shadow-md2 sm:p-8">
            {done ? (
              <div role="status" className="py-10 text-center">
                <CheckCircle2 aria-hidden="true" size={48} className="mx-auto text-success" />
                <h3 className="mt-4 text-xl font-semibold">Thank you, {values.name.split(' ')[0]}.</h3>
                <p className="mt-2 text-text-muted">We have your request. We will call you on {values.phone} to confirm your pickup.</p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <Field id="name" label="Name" autoComplete="name" value={values.name} onChange={set('name')} onBlur={blur('name')} error={errors.name} placeholder="Your name" />
                <Field id="phone" label="Phone" type="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} onBlur={blur('phone')} error={errors.phone} placeholder="98765 43210" />
                <Field id="service" label="Scrap type" as="select" value={values.service} onChange={set('service')} onBlur={blur('service')} error={errors.service}>
                  <option value="">Select</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </Field>
                <Field id="area" label="Area or pincode" value={values.area} onChange={set('area')} onBlur={blur('area')} error={errors.area} placeholder="e.g. Saket, Delhi" />
                <Field id="message" label="Message" as="textarea" rows={3} value={values.message} onChange={set('message')} placeholder="Approximate quantity (optional)" />
                <Button as="button" type="submit" variant="cta" className="w-full">Book free pickup</Button>
                <p className="mt-3 text-[13px] text-text-muted">We use your details only to arrange your pickup.</p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
