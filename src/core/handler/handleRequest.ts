import { Update } from '@telegraf/types'
import { VercelResponse } from '@vercel/node'
import { bot } from '../../telegram'

export const handleRequest = async (updateRequest: Update.MessageUpdate, res: VercelResponse) => {
  await bot().handleUpdate(updateRequest, res)
}
