import { VercelRequest, VercelResponse } from '@vercel/node'
import { handleRequest, logger, shouldHandleRequest } from '../src'

const handleBot = async (req: VercelRequest, res: VercelResponse) => {
  try {
    logger.info(`new request: ${JSON.stringify(req.body)}`)
    if (!shouldHandleRequest(req)) {
      logger.info('unauthorized')
      res.status(401).json({
        error: 'unauthorized',
      })
      return
    }
    await handleRequest(req, res)
  } catch (e: any) {
    console.error(e.message)
    res.statusCode = 500
  }
}

export default handleBot
