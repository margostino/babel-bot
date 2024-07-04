import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../logger'
import { reply } from './reply'
import { sendMessage } from './sendMessage'

type TelegramRequestBody = {
  update_id: number
  message?: {
    message_id: number
    from: {
      id: number
      is_bot: boolean
      first_name: string
      username: string
      language_code: string
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

export const handleMessage = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'POST') {
    const body = req.body as TelegramRequestBody
    const chatId = body.message?.chat?.id
    const userMessage = body.message?.text

    if (chatId) {
      if (userMessage && chatId) {
        logger.info(`Received message: ${userMessage} from chat ID: ${chatId}`)
        const response = await reply(userMessage)
        await sendMessage(chatId, response)
      } else {
        logger.info('No message found in the request')
      }
      //setWebHook()
    } else {
      logger.error('Bad Request: Chat ID not found')
    }
    //bot.handleUpdate(req.body as unknown as Update, res)
  } else {
    logger.info('not a POST request')
  }
}
