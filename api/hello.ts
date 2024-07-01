import { VercelRequest, VercelResponse } from '@vercel/node'
import { getRandomMessage } from '../src/utils'

export default async function handle(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  const randomMessage = getRandomMessage()
  res.status(200).send(`Hello ${name}!, ${randomMessage}`)
}
