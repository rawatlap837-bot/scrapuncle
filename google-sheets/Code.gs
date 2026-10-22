// Paste this into the Apps Script project for your Google Sheet.
// Deploy it as a web app: Execute as Me, access Anyone.
const SPREADSHEET_ID = "1je20CQXgb13_13pRSRzaeXwEjq6UmV6XI5b6JP6E-bE";
const SHEET_NAME = "Pickup Bookings";
const HEADERS = [
  "Submitted at (IST)", "Name", "Contact number", "Scrap types",
  "Area or PIN code", "Preferred date", "Preferred time (IST)", "Message",
];

function bookingSheet() {
  const book = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = book.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = book.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  return sheet;
}

function reply(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  try {
    bookingSheet();
    return reply({ status: "ready", sheet: SHEET_NAME });
  } catch (error) {
    console.error(error);
    return reply({ status: "error", message: String(error) });
  }
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (!data.name || !data.phone || !Array.isArray(data.types) ||
        !data.types.length || !data.area || !data.date || !data.slot) {
      return reply({ status: "error", message: "Missing booking details" });
    }

    // Keep entered text as text so a leading '=' cannot create a sheet formula.
    const safe = value => "'" + String(value || "").replace(/[\r\n]+/g, " ").trim();
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      bookingSheet().appendRow([
        Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss"),
        safe(data.name), safe(data.phone), safe(data.types.join(", ")),
        safe(data.area), safe(data.date), safe(data.slot), safe(data.message),
      ]);
    } finally {
      lock.releaseLock();
    }
    return reply({ status: "ok" });
  } catch (error) {
    console.error(error);
    return reply({ status: "error", message: String(error) });
  }
}
