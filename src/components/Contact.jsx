import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Field from './ui/Input.jsx'
import Button from './ui/Button.jsx'

const services = ['Iron And Steel', 'Copper', 'Aluminium And Brass', 'Paper And Cardboard', 'Plastic', 'E-waste And Old Appliances']

const validators = {
  name: (v) => (v.trim().length < 2 ? 'Enter Your Name.' : ''),
  phone: (v) => (/^(\+91)?[\s-]?[6-9]\d{4}[\s-]?\d{5}$/.test(v.trim()) ? '' : 'Enter A Valid 10-digit Phone Number.'),
  service: (v) => (v ? '' : 'Choose What You Want To Sell.'),
  area: (v) => (v.trim().length < 3 ? 'Enter Your Area Or Pincode.' : ''),
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
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-hover">Pickup Booking</p>
          <h2 id="contact-title" className="h2">Book Your Free Pickup</h2>
          <p className="mt-4 text-text-muted">Tell Us What You Have. We Will Call You To Confirm A Pickup Time.</p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3"><Phone aria-hidden="true" size={20} className="text-accent-hover" /><a className="font-semibold underline" href="tel:+918882343340">+91 88823 43340</a></li>
            <li className="flex items-center gap-3"><Mail aria-hidden="true" size={20} className="text-accent-hover" /><span>[USER TO PROVIDE: EMAIL ADDRESS]</span></li>
            <li className="flex items-center gap-3"><MapPin aria-hidden="true" size={20} className="text-accent-hover" /><span>[USER TO PROVIDE: ADDRESS]</span></li>
            <li className="flex items-center gap-3"><Clock aria-hidden="true" size={20} className="text-accent-hover" /><span>Open Monday To Saturday, 8 AM To 7 PM.</span></li>
            <li className="flex items-center gap-3"><MapPin aria-hidden="true" size={20} className="text-accent-hover" /><span>Service Available Across Delhi NCR.</span></li>
          </ul>
        </Reveal>
        <Reveal delay={100} className="order-1 lg:order-2">
          <div className="rounded-card bg-white p-6 shadow-md2 sm:p-8">
            {done ? (
              <div role="status" className="py-10 text-center">
                <CheckCircle2 aria-hidden="true" size={48} className="mx-auto text-success" />
                <h3 className="mt-4 text-xl font-semibold">Thank You, {values.name.split(' ')[0]}.</h3>
                <p className="mt-2 text-text-muted">We Have Your Request. We Will Call You On {values.phone} To Confirm Your Pickup.</p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <Field id="name" label="Name" autoComplete="name" value={values.name} onChange={set('name')} onBlur={blur('name')} error={errors.name} placeholder="Your Name" />
                <Field id="phone" label="Phone" type="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} onBlur={blur('phone')} error={errors.phone} placeholder="88823 43340" />
                <Field id="service" label="Scrap Type" as="select" value={values.service} onChange={set('service')} onBlur={blur('service')} error={errors.service}>
                  <option value="">Select</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </Field>
                <Field id="area" label="Area Or Pincode" value={values.area} onChange={set('area')} onBlur={blur('area')} error={errors.area} placeholder="E.g. Saket, Delhi" />
                <Field id="message" label="Message" as="textarea" rows={3} value={values.message} onChange={set('message')} placeholder="Approximate Quantity (Optional)" />
                <Button as="button" type="submit" variant="cta" className="w-full">Book Free Pickup</Button>
                <p className="mt-3 text-[13px] text-text-muted">We Use Your Details Only To Arrange Your Pickup.</p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
