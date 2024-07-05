import { VercelRequest, VercelResponse } from '@vercel/node'
import { Update } from 'telegraf/typings/core/types/typegram'
import { handleError, handleRequest, logger, shouldHandleRequest } from '../src'

const handleBot = async (req: VercelRequest, res: VercelResponse) => {
  let updateRequest: Update.MessageUpdate | null = null
  try {
    updateRequest = req.body as unknown as Update.MessageUpdate
    logger.info(`new request: ${JSON.stringify(req.body)}`)
    if (!shouldHandleRequest(updateRequest, req)) {
      logger.info('unauthorized')
      res.status(401).json({
        error: 'unauthorized',
      })
      return
    }
    logger.info('request authorized, now handling request...')
    await handleRequest(updateRequest, res)
  } catch (error) {
    const err = error as Error
    logger.error(err.message)
    await handleError(updateRequest, err)
    res.status(500).json('Internal server error')
  }
}

export default handleBot
