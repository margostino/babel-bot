import { VercelRequest, VercelResponse } from '@vercel/node'
import { Update } from 'telegraf/typings/core/types/typegram'
import { logger } from '../logger'
import { bot } from './newBot'

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
  // if (req.method === 'POST') {
  //   const body = req.body as TelegramRequestBody
  //   const chatId = body.message?.chat?.id
  //   const userMessage = body.message?.text

  //   if (chatId) {
  //     if (userMessage && chatId) {
  //       logger.info(`Received message: ${userMessage} from chat ID: ${chatId}`)
  //       const response = await reply(userMessage)
  //       await sendMessage(chatId, response)
  //     } else {
  //       logger.info('No message found in the request')
  //     }
  //     //setWebHook()
  //   } else {
  //     logger.error('Bad Request: Chat ID not found')
  //   }
  //   //bot.handleUpdate(req.body as unknown as Update, res)
  // } else {
  //   logger.info('not a POST request')
  // }
  if (req.method === 'POST') {
    logger.info('handling message...')
    await bot.handleUpdate(req.body as unknown as Update, res)
  } else {
    logger.info('not a POST request')
  }
}
