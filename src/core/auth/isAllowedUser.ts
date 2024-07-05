import { Update } from 'telegraf/typings/core/types/typegram'
import { ALLOWED_TELEGRAM_USERNAMES, ALLOWED_TELEGRAM_USER_IDS } from '../../constants'

export const isAllowedUser = (updateRequest: Update.MessageUpdate) => {
  const userId = updateRequest.message.from.id
  const username = updateRequest.message.from.username

  return (
    username &&
    ALLOWED_TELEGRAM_USERNAMES.includes(username) &&
    ALLOWED_TELEGRAM_USER_IDS.includes(userId.toString())
  )
}
