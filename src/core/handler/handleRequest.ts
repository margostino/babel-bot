import { Update } from '@telegraf/types'
import { VercelResponse } from '@vercel/node'
import { logger } from '../../logger'
import { handleMessage } from '../../telegram'

export const handleRequest = async (updateRequest: Update, res: VercelResponse) => {
  try {
    await handleMessage(updateRequest, res)
    //res.status(200).json({ status: 'sent' })
  } catch (error) {
    logger.error('Error handling message:', error)
    res.status(500).json('Internal server error')
  }
}
