// TODO: validate

export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ''

export const TELEGRAM_BOT_API_SECRET_TOKEN = process.env.TELEGRAM_BOT_API_SECRET_TOKEN || ''

export const BABEL_API_TOKEN = process.env.BABEL_API_TOKEN || ''

export const HEADERS = {
  AUTHORIZATION: 'authorization',
  X_BABEL_ADMIN_TOKEN: 'x-babel-admin-token',
  X_TELEGRAM_BOT_API_SECRET_TOKEN: 'X-Telegram-Bot-Api-Secret-Token',
}
