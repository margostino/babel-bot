import { Update } from '@telegraf/types'
import { VercelRequest, VercelResponse } from '@vercel/node'
import { handleRequest, logger, shouldHandleRequest } from '../src'

const handleBot = async (req: VercelRequest, res: VercelResponse) => {
  console.log(JSON.stringify(req))
  try {
    const updateRequest = req.body as unknown as Update
    logger.info(`new request: ${JSON.stringify(req.body)}`)
    if (!shouldHandleRequest(req)) {
      logger.info('unauthorized')
      res.status(401).json({
        error: 'unauthorized',
      })
      return
    }
    logger.info('request authorized, now handling request...')
    await handleRequest(updateRequest, res)
  } catch (e: any) {
    logger.error(e.message)
    res.status(500).json('Internal server error')
  }
}

export default handleBot
