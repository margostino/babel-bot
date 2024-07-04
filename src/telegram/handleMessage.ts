import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from 'logger'
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
    res.status(200).json('handling events...')

    const body = req.body as TelegramRequestBody
    const chatId = body.message?.chat?.id
    const userMessage = body.message?.text

    if (chatId) {
      try {
        if (userMessage && chatId) {
          logger.info(`Received message: ${userMessage} from chat ID: ${chatId}`)
          const response = await reply(userMessage)
          await sendMessage(chatId, response)
        } else {
          logger.info('No message found in the request')
        }
        //setWebHook()
        res.status(200).json('done')
      } catch (error) {
        console.error('Error handling update:', error)
        res.status(500).json('Internal server error')
      }
    } else {
      res.status(400).json('Bad Request: Chat ID not found')
    }

    //bot.handleUpdate(req.body as unknown as Update, res)
  } else {
    res.status(200).json('listening to bot events...')
  }
}
