// TODO: validate

import { splitVariable } from './utils'

export const HEADERS = {
  AUTHORIZATION: 'authorization',
  X_BABEL_ADMIN_TOKEN: 'x-babel-admin-token',
  X_TELEGRAM_BOT_API_SECRET_TOKEN: 'x-telegram-bot-api-secret-token',
}

export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ''

export const TELEGRAM_BOT_API_SECRET_TOKEN = process.env.TELEGRAM_BOT_API_SECRET_TOKEN || ''

export const BABEL_API_TOKEN = process.env.BABEL_API_TOKEN || ''

export const BABEL_API_HOST = process.env.BABEL_API_HOST || ''

export const TELEGRAM_BOT_WEBHOOK_URL = process.env.TELEGRAM_BOT_WEBHOOK_URL || ''

export const VERCEL_ENV = process.env.VERCEL_ENV || ''

export const TELEGRAM_API_HOST = 'https://api.telegram.org'

export const TELEGRAM_CHAT_ID = Number(process.env.TELEGRAM_CHAT_ID) || 0

export const IS_BABEL_ECHO = process.env.IS_BABEL_ECHO || 'true'

export const ALLOWED_TELEGRAM_USERNAMES = splitVariable(process.env.ALLOWED_TELEGRAM_USERNAMES)

export const ALLOWED_TELEGRAM_USER_IDS = splitVariable(process.env.ALLOWED_TELEGRAM_USER_IDS)

export const MINIMAL_HEADERS = splitVariable(process.env.MINIMAL_HEADERS)

export const REQUIRED_HEADERS = splitVariable(process.env.REQUIRED_HEADERS)

export const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || ''

export const GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY =
  process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || ''

export const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || ''

export const GOOGLE_SHEET_RANGE = process.env.GOOGLE_SHEET_RANGE || ''

export const GOOGLE_SERVICE_ACCOUNT_CREDENTIALS =
  process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS || ''
