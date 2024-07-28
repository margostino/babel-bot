import { GOOGLE_SHEET_ID, GOOGLE_SHEET_RANGE } from '../constants'
import { logger } from '../logger'
import { authorize } from './auth'

export const cleanAll = async () => {
  const sheet = await authorize()
  try {
    await sheet.spreadsheets.values.clear({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: GOOGLE_SHEET_RANGE,
    })
  } catch (error) {
    logger.error(`Error cleaning cache: ${(error as Error).message}`)
  }
}
