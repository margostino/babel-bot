import { TELEGRAM_API_HOST, TELEGRAM_BOT_TOKEN } from '../constants'
import { callPostTelegram } from './callPostTelegram'

export const sendChatAction = async (chatId: number, reply: string): Promise<any> => {
  const apiUrl = `${TELEGRAM_API_HOST}/bot${TELEGRAM_BOT_TOKEN}/sendChatAction`
  await callPostTelegram(apiUrl, {
    chat_id: chatId,
    action: reply,
  })
}
