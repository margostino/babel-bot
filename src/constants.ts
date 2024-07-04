// TODO: validate

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
