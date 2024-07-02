import { VercelRequest } from '@vercel/node'
import { isAllowedUserId } from './isAllowedUserId'
import { isAuthorized } from './isAuthorized'
import { isValidRequest } from './isValidRequest'

export const shouldHandleRequest = (request: VercelRequest) => {
  return isAllowedUserId(request) && isAuthorized(request) && isValidRequest(request)
}
