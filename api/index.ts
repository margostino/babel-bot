import { VercelRequest, VercelResponse } from '@vercel/node'
import { handleRequest, shouldHandleRequest } from '../src'

const handleBot = async (req: VercelRequest, res: VercelResponse) => {
  try {
    console.log(JSON.stringify(req.body))
    if (!shouldHandleRequest(req)) {
      res.status(401).json({
        error: 'Unauthorized',
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
