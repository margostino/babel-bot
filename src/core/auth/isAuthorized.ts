import { VercelRequest } from '@vercel/node'
import { HEADERS, TELEGRAM_BOT_API_SECRET_TOKEN } from '../../constants'

export const isAuthorized = (request: VercelRequest) => {
  return request.headers[HEADERS.X_TELEGRAM_BOT_API_SECRET_TOKEN] === TELEGRAM_BOT_API_SECRET_TOKEN
}
