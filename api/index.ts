import { VercelRequest, VercelResponse } from '@vercel/node'
import { handleRequest, shouldHandleRequest } from '../src'

const handleBot = async (req: VercelRequest, res: VercelResponse) => {
  try {
    console.log(`new request: ${JSON.stringify(req.body)}`)
    if (!shouldHandleRequest(req)) {
      console.log('unauthorized')
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
