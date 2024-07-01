import { VercelRequest, VercelResponse } from '@vercel/node'
import { handleRequest } from '../src'

const handleBot = async (req: VercelRequest, res: VercelResponse) => {
  try {
    await handleRequest(req, res)
  } catch (e: any) {
    console.error(e.message)
    res.statusCode = 500
  }
}

export default handleBot
