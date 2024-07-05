import { Update } from '@telegraf/types'
import { TELEGRAM_CHAT_ID } from '../../constants'
import { sendMessage } from '../../telegram'

export const handleError = async (updateRequest: Update.MessageUpdate | null, error: Error) => {
  if (updateRequest) {
    await sendMessage(
      updateRequest.message.chat.id,
      `there was an error handling the request, try again! (${error.message})`
    )
  } else {
    await sendMessage(TELEGRAM_CHAT_ID, 'there was an error handling the request, try again!')
  }
}
