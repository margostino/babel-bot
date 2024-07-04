import { VercelRequest, VercelResponse } from '@vercel/node'

export const handleRequest = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'POST') {
    res.status(200).json('handling events...')
    //bot.handleUpdate(req.body as unknown as Update, res)
  } else {
    res.status(200).json('listening to bot events...')
  }
}
