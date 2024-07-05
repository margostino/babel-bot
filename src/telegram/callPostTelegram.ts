import axios from 'axios'
import { SendMessageResponse } from 'schemas/telegram'
import { logger } from '../logger'

export const callPostTelegram = async (apiUrl: string, body: any): Promise<any> => {
  try {
    const response = await axios.post(apiUrl, body)

    if (response.status === 200 && response.data) {
      const telegramResponse = response.data as SendMessageResponse
      if (telegramResponse.ok) {
        logger.info(`telegram http api called successfully for: ${apiUrl}`)
        return
      }
    }

    if (response.status === 200) {
      logger.info(
        `got unexpected response from Telegram HTTP API call: ${JSON.stringify(response.data)}`
      )
      throw new Error(
        `Error: unexpected response from Telegram HTTP API call (${apiUrl}): ${response.data}`
      )
    } else {
      logger.info('telegram sendMessage failed')
      throw new Error(
        `Error: received status code Telegram HTTP API call (${apiUrl}): ${response.status}`
      )
    }
  } catch (error) {
    const err = error as Error
    logger.info(
      `unexpected failure sending message to Telegram HTTP APIs (${apiUrl}): ${err.message}`
    )
    throw new Error(`failure sending message to Telegram: ${err.message}`)
  }
}
