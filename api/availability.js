const validDate = value => {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const parsed = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value
}

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store')
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET')
    return response.status(405).json({ error: 'Method not allowed.' })
  }

  const date = request.query?.date
  if (!validDate(date)) return response.status(400).json({ error: 'Choose a valid pickup date.' })

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbw5YBchdwFAu-R3B1L1HzmoqCAsfE--cmOdTuAgj0dl_Pm7a7njY2ijHO0611ucBWt7/exec'
  const secret = process.env.GOOGLE_SHEETS_SECRET
  if (!scriptUrl || !secret) {
    return response.status(503).json({ error: 'Pickup availability is not configured yet.' })
  }

  try {
    const url = new URL(scriptUrl)
    url.searchParams.set('date', date)
    url.searchParams.set('secret', secret)
    const result = await fetch(url, { signal: AbortSignal.timeout(12000), cache: 'no-store' })
    if (!result.ok) throw new Error('Google Sheets availability request failed')
    const data = await result.json()
    if (data.status !== 'ok' || !Array.isArray(data.bookedSlots)) {
      throw new Error('Invalid availability response')
    }
    return response.status(200).json({ date, bookedSlots: data.bookedSlots })
  } catch (error) {
    console.error('Pickup availability error:', error)
    return response.status(502).json({ error: 'Could not check pickup times. Please try again.' })
  }
}
