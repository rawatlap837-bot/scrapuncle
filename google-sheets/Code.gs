// Add this code to Apps Script opened from your destination Google Sheet.
// Set a Script Property named BOOKING_SECRET to the same value as
// GOOGLE_SHEETS_SECRET in your website's Vercel environment settings.
const SHEET_NAME = 'Pickup Bookings';
const HEADERS = [
  'Submitted at (IST)', 'Name', 'Contact number', 'Scrap types',
  'Area or PIN code', 'Preferred date', 'Preferred time (IST)', 'Message',
];
const CATEGORIES = [
  'Paper & Raddi', 'Electronic Scrap', 'Home Appliances',
  'Metal Scrap', 'Plastic Scrap', 'Batteries & Cables',
];
const SLOTS = [
  '8 AM – 10 AM', '10 AM – 12 PM', '12 PM – 2 PM',
  '2 PM – 4 PM', '4 PM – 6 PM', '6 PM – 7 PM',
];

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function validDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parts = value.split('-').map(Number);
  const parsed = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
  return parsed.toISOString().slice(0, 10) === value;
}

function todayInIndia() {
  return Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd');
}

function bookedSlotsForDate(sheet, date) {
  if (!sheet || sheet.getLastRow() < 2) return [];
  // Columns F and G hold the preferred date and time. Displayed values also
  // handle bookings entered manually in the sheet.
  const rows = sheet.getRange(2, 6, sheet.getLastRow() - 1, 2).getDisplayValues();
  return rows
    .filter(row => row[0].replace(/^'/, '').trim() === date)
    .map(row => row[1].replace(/^'/, '').trim())
    .filter(slot => SLOTS.indexOf(slot) !== -1);
}

function doGet(e) {
  try {
    const secret = PropertiesService.getScriptProperties().getProperty('BOOKING_SECRET');
    if (!secret || e.parameter.secret !== secret) throw new Error('Unauthorized');
    const date = e.parameter.date;
    if (!validDate(date)) throw new Error('Invalid date');
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    return jsonResponse({ status: 'ok', bookedSlots: bookedSlotsForDate(sheet, date) });
  } catch (error) {
    console.error(error);
    return jsonResponse({ status: 'error' });
  }
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const secret = PropertiesService.getScriptProperties().getProperty('BOOKING_SECRET');
    if (!secret || data.secret !== secret) throw new Error('Unauthorized');
    if (
      typeof data.name !== 'string' || data.name.trim().length < 2 || data.name.length > 80 ||
      typeof data.phone !== 'string' || !/^(?:\+91|91)?[6-9]\d{9}$/.test(data.phone) ||
      !Array.isArray(data.types) || !data.types.length || data.types.length > CATEGORIES.length ||
      data.types.some(type => CATEGORIES.indexOf(type) === -1) ||
      typeof data.area !== 'string' || data.area.trim().length < 3 || data.area.length > 120 ||
      !validDate(data.date) || data.date < todayInIndia() ||
      SLOTS.indexOf(data.slot) === -1 || typeof data.message !== 'string' || data.message.length > 1000
    ) throw new Error('Invalid booking');

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const book = SpreadsheetApp.getActiveSpreadsheet();
      let sheet = book.getSheetByName(SHEET_NAME);
      if (!sheet) sheet = book.insertSheet(SHEET_NAME);
      if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
      if (bookedSlotsForDate(sheet, data.date).indexOf(data.slot) !== -1) {
        return jsonResponse({ status: 'taken' });
      }
      // Prefix user text with an apostrophe so Sheets never evaluates it as a formula.
      const safe = value => "'" + String(value).replace(/[\r\n]+/g, ' ').trim();
      sheet.appendRow([
        Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss'),
        safe(data.name), safe(data.phone), safe(data.types.join(', ')),
        safe(data.area), safe(data.date), safe(data.slot), safe(data.message),
      ]);
    } finally {
      lock.releaseLock();
    }
    return jsonResponse({ status: 'ok' });
  } catch (error) {
    console.error(error);
    return jsonResponse({ status: 'error' });
  }
}
