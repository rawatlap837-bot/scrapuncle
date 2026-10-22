import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import booking from './api/booking.js'
import availability from './api/availability.js'

function localBookingApi() {
  return {
    name: 'local-booking-api',
    configureServer(server) {
      server.middlewares.use('/api', async (request, response, next) => {
        const url = new URL(request.url, 'http://localhost')
        const handler = url.pathname === '/booking' ? booking
          : url.pathname === '/availability' ? availability : null
        if (!handler) return next()

        response.status = code => { response.statusCode = code; return response }
        response.json = data => {
          response.setHeader('Content-Type', 'application/json; charset=utf-8')
          response.end(JSON.stringify(data))
          return response
        }
        request.query = Object.fromEntries(url.searchParams)
        try {
          if (request.method === 'POST') {
            let body = ''
            for await (const chunk of request) {
              body += chunk
              if (body.length > 12000) {
                return response.status(413).json({ error: 'Booking request is too large.' })
              }
            }
            try { request.body = JSON.parse(body) }
            catch { return response.status(400).json({ error: 'Invalid booking request.' }) }
          }
          await handler(request, response)
        } catch (error) {
          console.error('Local booking API error:', error)
          if (!response.writableEnded) response.status(500).json({ error: 'Booking service error.' })
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'GOOGLE_SHEETS_')
  if (env.GOOGLE_SHEETS_SECRET) process.env.GOOGLE_SHEETS_SECRET = env.GOOGLE_SHEETS_SECRET
  return { plugins: [react(), localBookingApi()] }
})
