import { VercelRequest, VercelResponse } from '@vercel/node'
// import { TELEGRAM_CHAT_ID } from '../constants'
import { logger } from '../logger'
// import { getReply } from './getReply'
// import { sendMessage } from './sendMessage'
import { Update } from 'telegraf/typings/core/types/typegram'
import { bot } from './bot'

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
  // let response = null

  // const body = req.body as TelegramRequestBody
  // let chatId = body.message?.chat?.id
  // const userMessage = body.message?.text

  // if (req.method === 'POST') {
  //   if (chatId && userMessage) {
  //     logger.info(`Received message: ${userMessage} from chat ID: ${chatId}`)
  //     response = await getReply(userMessage)
  //   } else {
  //     response = 'Chat ID or user message not found'
  //     logger.error('Bad Request: Chat ID not found')
  //   }
  //   //bot.handleUpdate(req.body as unknown as Update, res)
  // } else {
  //   response = 'Not a POST request'
  //   logger.info('not a POST request')
  // }

  // if (!chatId) {
  //   chatId = TELEGRAM_CHAT_ID
  // }

  // await sendMessage(chatId, response)
  //setWebHook()

  if (req.method === 'POST') {
    logger.info('handling message...')
    await bot().handleUpdate(req.body as unknown as Update, res)
  } else {
    logger.info('not a POST request')
  }
}
