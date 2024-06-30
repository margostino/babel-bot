import { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handle(req: VercelRequest, res: VercelResponse) {
  res.status(200).send('pong')
}
