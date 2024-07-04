import { VercelRequest, VercelResponse } from '@vercel/node'
import { handleMessage } from '../../telegram'

export const handleRequest = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'POST') {
    res.status(200).json('handling events...')
    handleMessage(req, res)
  } else {
    res.status(200).json('listening to bot events...')
  }
}
