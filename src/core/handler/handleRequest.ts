import { VercelRequest, VercelResponse } from '@vercel/node'
import { logger } from '../../logger'
import { handleMessage } from '../../telegram'

export const handleRequest = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'POST') {
    try {
      await handleMessage(req, res)
      res.status(200).json({ status: 'sent' })
    } catch (error) {
      logger.error('Error handling message:', error)
      res.status(500).json('Internal server error')
    }
  } else {
    res.status(200).json('listening to bot events...')
  }
}
