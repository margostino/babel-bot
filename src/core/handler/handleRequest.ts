import { VercelRequest, VercelResponse } from '@vercel/node'
import { Update } from 'telegraf/typings/core/types/typegram'
import { bot } from '../../telegram'

export const handleRequest = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'POST') {
    await bot.handleUpdate(req.body as unknown as Update, res)
  } else {
    res.status(200).json('listening to bot events...')
  }
}
