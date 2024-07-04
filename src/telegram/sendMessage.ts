import axios from 'axios'
import { TELEGRAM_API_HOST, TELEGRAM_BOT_TOKEN } from '../constants'
import { logger } from '../logger'

type TelegramResponse = {
  ok: boolean
  result: {
    message_id: number
    from: {
      id: number
      is_bot: boolean
      first_name: string
      username: string
    }
    chat: {
      id: number
      first_name: string
      username: string
      type: string
    }
    date: number
    text: string
  }
}

export const sendMessage = async (chatId: number, reply: string): Promise<any> => {
  const apiUrl = `${TELEGRAM_API_HOST}/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${chatId}&text=${reply}`
  try {
    const response = await axios.get(apiUrl)

    if (response.status === 200 && response.data) {
      const telegramResponse = response.data as TelegramResponse
      if (telegramResponse.ok) {
        logger.info('reply sent successfully set')
        return
      }
    }

    if (response.status === 200) {
      logger.info(`got unexpected response sending message: ${JSON.stringify(response.data)}`)
      throw new Error(`Error: unexpected response from Telegram ${response.data}`)
    } else {
      logger.info('telegram sendMessage failed')
      throw new Error(`Error: received status code from Telegram (setMessage): ${response.status}`)
    }
  } catch (error) {
    logger.info('unexpected failure sending message to Telegram')
    throw new Error(`failure sending message to Telegram: ${(error as Error).message}`)
  }
}
