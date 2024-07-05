import {
  TELEGRAM_API_HOST,
  TELEGRAM_BOT_API_SECRET_TOKEN,
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_BOT_WEBHOOK_URL,
} from '../constants'
import { callGetTelegram } from './callGetTelegram'

export const setWebHook = async (): Promise<any> => {
  const apiUrl = `${TELEGRAM_API_HOST}/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${TELEGRAM_BOT_WEBHOOK_URL}/api/index&allowed_updates=["message"]&secret_token=${TELEGRAM_BOT_API_SECRET_TOKEN}`
  await callGetTelegram(apiUrl)
}
