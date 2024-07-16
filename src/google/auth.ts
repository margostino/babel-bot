import { JWT } from 'google-auth-library'
import { google } from 'googleapis'

const credentials = require('/Users/martin.dagostino/Downloads/babel-429321-0ac65578e200.json')

export async function authorize() {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const authClient = await auth.getClient()
  return google.sheets({ version: 'v4', auth: authClient as JWT })
}
