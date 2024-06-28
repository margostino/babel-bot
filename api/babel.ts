import { VercelRequest, VercelResponse } from '@vercel/node'

export const HandleGateway = async (request: VercelRequest, response: VercelResponse) => {
  response.status(200).json({
    error: 'no implemented',
  })
}

export default HandleGateway
