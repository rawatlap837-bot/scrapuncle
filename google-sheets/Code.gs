// Paste this into the Apps Script project for your Google Sheet.
// Deploy it as a web app: Execute as Me, access Anyone.
const SPREADSHEET_ID = "1je20CQXgb13_13pRSRzaeXwEjq6UmV6XI5b6JP6E-bE";
const SHEET_NAME = "Pickup Bookings";
const HEADERS = [
  "Submitted at (IST)", "Name", "Contact number", "Scrap types",
  "Area or PIN code", "Preferred date", "Preferred time (IST)", "Message", "Request ID",
];

function bookingSheet() {
  const book = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = book.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = book.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  else if (!sheet.getRange(1, 9).getValue()) sheet.getRange(1, 9).setValue("Request ID");
  return sheet;
}

function reply(data, callback) {
  const json = JSON.stringify(data);
  if (callback && /^pickupResult_[A-Za-z0-9_]+$/.test(callback)) {
    return ContentService.createTextOutput("window[" + JSON.stringify(callback) + "](" + json + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  const callback = e && e.parameter && e.parameter.callback;
  try {
    const sheet = bookingSheet();
    const id = e && e.parameter && e.parameter.requestId;
    if (id) {
      if (!/^[a-f0-9-]{36}$/.test(id)) return reply({ status: "error", message: "Invalid request ID" }, callback);
      const count = sheet.getLastRow() - 1;
      const rows = count > 0 ? sheet.getRange(2, 9, count, 1).getDisplayValues() : [];
      return reply({ status: "ok", saved: rows.some(row => row[0].replace(/^'/, "") === id) }, callback);
    }
    return reply({ status: "ready", sheet: SHEET_NAME, spreadsheetId: SPREADSHEET_ID }, callback);
  } catch (error) {
    console.error(error);
    return reply({ status: "error", message: String(error) }, callback);
  }
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (!data.name || !data.phone || !Array.isArray(data.types) ||
        !data.types.length || !data.area || !data.date || !data.slot ||
        !/^[a-f0-9-]{36}$/.test(data.requestId || "")) {
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
        safe(data.area), safe(data.date), safe(data.slot), safe(data.message), safe(data.requestId),
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
