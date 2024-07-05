import { TELEGRAM_API_HOST, TELEGRAM_BOT_TOKEN } from '../constants'
import { callGetTelegram } from './callGetTelegram'

export const sendMessage = async (chatId: number, reply: string): Promise<any> => {
  const apiUrl = `${TELEGRAM_API_HOST}/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${chatId}&text=${reply}`
  await callGetTelegram(apiUrl)
}
