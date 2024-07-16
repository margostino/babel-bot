import { GOOGLE_SHEET_ID, GOOGLE_SHEET_RANGE } from '../constants'
import { authorize } from './auth'

export const appendMessage = async (message: string) => {
  const sheet = await authorize()
  try {
    await sheet.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
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
