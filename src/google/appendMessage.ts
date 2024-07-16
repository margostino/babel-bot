import { google } from 'googleapis'
import {
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
  GOOGLE_SHEET_ID,
  GOOGLE_SHEET_RANGE,
} from '../constants'

export const appendMessage = async (message: string) => {
  const auth = new google.auth.JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  const sheet = google.sheets('v4')

  try {
    await sheet.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      auth: auth,
      range: GOOGLE_SHEET_RANGE,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[new Date().toISOString(), message]],
      },
    })
  } catch (error) {
    console.error('Error appending message:', error)
  }
}
