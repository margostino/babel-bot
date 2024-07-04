import axios from 'axios'
import { TELEGRAM_API_HOST, TELEGRAM_BOT_TOKEN } from '../constants'
import { logger } from '../logger'

export const sendMessage = async (chatId: number, reply: string): Promise<any> => {
  const apiUrl = `${TELEGRAM_API_HOST}/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${chatId}&text=${reply}`
  try {
    const response = await axios.get(apiUrl)

    if (response.status === 200 && response.data && response.data.ok === 'true') {
      logger.info('reply sent successfully set')
      return response.data.message.response
    } else if (response.status === 200) {
      logger.info(`got unexpected response sending message: ${response.data}`)
      throw new Error(`Error: unexpected response from Telegram ${response.data}`)
    } else {
      logger.info('telegram sendMessage failed')
      throw new Error(`Error: received status code from Telegram (setMessage): ${response.status}`)
    }
  } catch (error) {
    logger.info('unexpected failure setting up the Webhook')
    throw new Error(`Failed calling Babel API: ${(error as Error).message}`)
  }
}
