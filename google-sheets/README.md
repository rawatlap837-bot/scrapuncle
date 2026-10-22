# Send pickup requests to Google Sheets

1. In [Code.gs](Code.gs), confirm `SPREADSHEET_ID` matches the ID between `/d/` and `/edit` in your **scrap page** Google Sheet URL. The script currently targets the sheet shown in your latest screenshot.
2. Paste `Code.gs` into that sheet's Apps Script project and save it.
3. Choose **Deploy → Manage deployments → Edit → New version → Deploy**. Select **Execute as: Me** and **Who has access: Anyone**. Authorize access to the sheet if prompted.
4. Open the deployment's `/exec` URL in a browser. It should show `{"status":"ready","sheet":"Pickup Bookings"}`. Refresh the spreadsheet to see the new `Pickup Bookings` tab and headers.
5. The form uses the web app URL directly in `src/components/Contact.jsx`; no `.env` setting is needed. If you create a different Apps Script deployment, update `bookingScriptUrl` in that file and reload the website.
6. Submit the pickup form, then refresh the `Pickup Bookings` tab to see the row.

The form sends directly to Apps Script, without a separate website API. Date and time are preferences; the form does not check whether another person selected the same slot. Because browsers cannot read the response to this cross-origin request, the form can only confirm that the request was sent. Check the sheet or Apps Script **Executions** to confirm it was saved.
