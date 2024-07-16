import { GOOGLE_SHEET_ID, GOOGLE_SHEET_RANGE } from '../constants'
import { authorize } from './auth'

export const getMessages = async () => {
  const sheet = await authorize()
  // const auth = new google.auth.JWT({
  //   email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
  //   key: GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
  //   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  // })
  // const sheet = google.sheets('v4')

  try {
    const messages = await sheet.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEET_ID,
      // auth: auth,
      range: GOOGLE_SHEET_RANGE,
    })
    return messages.data.values
  } catch (error) {
    console.error('Error appending message:', error)
  }
}
