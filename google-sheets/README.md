# Connect pickup bookings to Google Sheets

1. Create a Google Sheet for pickup requests. In it, open **Extensions → Apps Script**.
2. Replace the editor contents with [Code.gs](Code.gs).
3. In Apps Script, open **Project Settings → Script properties**. Add `BOOKING_SECRET` with a long random value.
4. Choose **Deploy → New deployment → Web app**. Set **Execute as: Me** and **Who has access: Anyone**. Authorize the script.
5. The website now uses your deployed URL: `https://script.google.com/macros/s/AKfycbw5YBchdwFAu-R3B1L1HzmoqCAsfE--cmOdTuAgj0dl_Pm7a7njY2ijHO0611ucBWt7/exec`. In Vercel project settings, add `GOOGLE_SHEETS_SECRET` with the same value as the `BOOKING_SECRET` Script Property. Redeploy the site.

The website checks taken times through `/api/availability` and disables them in the form. `/api/booking` sends the validated booking to Apps Script. While holding a script lock, Apps Script checks the date and time again before adding the row to `Pickup Bookings`. If somebody booked the slot first, the user is asked to choose another. One booking is allowed per date and time across all areas. Keep the secret in Vercel and Apps Script settings; never put it in a `VITE_` variable or browser code.

If you already deployed the earlier version of `Code.gs`, paste the updated code and choose **Deploy → Manage deployments → Edit → New version → Deploy**. The old deployment version will not check availability or prevent duplicate slots.

For local development, copy `.env.example` to `.env.local`, set `GOOGLE_SHEETS_SECRET` to the same value as the Apps Script `BOOKING_SECRET` property, and restart `npm run dev`. Vite serves the booking and availability API routes locally. `.env.local` is ignored by Git. Without the matching secret, the form shows a setup error and does not claim that a booking was saved.
