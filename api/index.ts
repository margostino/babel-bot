import { VercelRequest, VercelResponse } from '@vercel/node'
// import winston from 'winston'
import { handleRequest, shouldHandleRequest } from '../src'

// const logger = winston.createLogger({
//   transports: [new winston.transports.Console()],
// })

const handleBot = async (req: VercelRequest, res: VercelResponse) => {
  try {
    console.log(JSON.stringify(req.body))
    console.log(JSON.stringify(req.headers))
    // logger.info(JSON.stringify(req.body))
    // logger.info(JSON.stringify(req.headers))

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
