const categories = new Set([
  'Paper & Raddi', 'Electronic Scrap', 'Home Appliances',
  'Metal Scrap', 'Plastic Scrap', 'Batteries & Cables',
])
const slots = new Set([
  '8 AM – 10 AM', '10 AM – 12 PM', '12 PM – 2 PM',
  '2 PM – 4 PM', '4 PM – 6 PM', '6 PM – 7 PM',
])
const validDate = value => {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const parsed = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed.' })
  }

  const { name, phone, types, area, date, slot, message = '' } = request.body || {}
  const dateParts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date())
  const part = type => dateParts.find(item => item.type === type).value
  const today = `${part('year')}-${part('month')}-${part('day')}`
  if (
    typeof name !== 'string' || name.trim().length < 2 || name.length > 80 ||
    typeof phone !== 'string' || !/^(?:\+91|91)?[6-9]\d{9}$/.test(phone.replace(/[\s()-]/g, '')) ||
    !Array.isArray(types) || !types.length || types.length > categories.size ||
    types.some(type => !categories.has(type)) || new Set(types).size !== types.length ||
    typeof area !== 'string' || area.trim().length < 3 || area.length > 120 ||
    !validDate(date) || date < today ||
    !slots.has(slot) || typeof message !== 'string' || message.length > 1000
  ) {
    return response.status(400).json({ error: 'Please check your booking details.' })
  }

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbw5YBchdwFAu-R3B1L1HzmoqCAsfE--cmOdTuAgj0dl_Pm7a7njY2ijHO0611ucBWt7/exec'
  const secret = process.env.GOOGLE_SHEETS_SECRET
  if (!scriptUrl || !secret) {
    return response.status(503).json({ error: 'Booking storage is not configured yet.' })
  }

  try {
    const result = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      body: JSON.stringify({
        secret,
        name: name.trim(),
        phone: phone.replace(/[\s()-]/g, ''),
        types,
        area: area.trim(),
        date,
        slot,
        message: message.trim(),
      }),
      signal: AbortSignal.timeout(12000),
    })
    if (!result.ok) throw new Error('Google Sheets request failed')
    const data = await result.json()
    if (data.status === 'taken') {
      return response.status(409).json({ error: 'That pickup slot was just booked. Please choose another time.', code: 'SLOT_TAKEN' })
    }
    if (data.status !== 'ok') throw new Error('Google Sheets did not save the booking')
    return response.status(200).json({ saved: true })
  } catch (error) {
    console.error('Booking storage error:', error)
    return response.status(502).json({ error: 'Could not save the booking. Please try again.' })
  }
}
