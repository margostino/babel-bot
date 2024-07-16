import { JWT } from 'google-auth-library'
import { google } from 'googleapis'
import { GOOGLE_SERVICE_ACCOUNT_CREDENTIALS } from '../constants'
import { decodeBase64Value } from '../utils'

const credentials = decodeBase64Value(GOOGLE_SERVICE_ACCOUNT_CREDENTIALS)

export async function authorize() {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const authClient = await auth.getClient()
  return google.sheets({ version: 'v4', auth: authClient as JWT })
}
