import axios from 'axios'
import {
  TELEGRAM_API_HOST,
  TELEGRAM_BOT_API_SECRET_TOKEN,
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_BOT_WEBHOOK_URL,
} from '../constants'
import { logger } from '../logger'

export const setWebHook = async (): Promise<any> => {
  const apiUrl = `${TELEGRAM_API_HOST}/bot${TELEGRAM_BOT_TOKEN}/setWebhook?url=${TELEGRAM_BOT_WEBHOOK_URL}/api/index&allowed_updates=["message"]&secret_token=${TELEGRAM_BOT_API_SECRET_TOKEN}`

  try {
    const response = await axios.get(apiUrl)

    if (response.status === 200 && response.data && response.data.ok === 'true') {
      logger.info('webhook successfully set')
      return response.data.message.response
    } else if (response.status === 200) {
      logger.info(`got unexpected response setting up the Webhook: ${response.data}`)
      throw new Error(`Error: unexpected response from Telegram ${response.data}`)
    } else {
      logger.info('telegram webhook call failed')
      throw new Error(`Error: received status code from Telegram (setWebHook): ${response.status}`)
    }
  } catch (error) {
    logger.info('unexpected failure setting up the Webhook')
    throw new Error(`Failed calling Babel API: ${(error as Error).message}`)
  }
}
