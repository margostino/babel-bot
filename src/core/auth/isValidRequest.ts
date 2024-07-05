import { VercelRequest } from '@vercel/node'

export const isValidRequest = (req: VercelRequest) => {
  return req.method === 'POST'
}
