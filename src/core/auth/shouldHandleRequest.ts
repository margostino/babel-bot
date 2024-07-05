import { VercelRequest } from '@vercel/node'
import { Update } from 'telegraf/typings/core/types/typegram'
import { isAllowedUser } from './isAllowedUser'
import { isAuthorized } from './isAuthorized'
import { isValidRequest } from './isValidRequest'

export const shouldHandleRequest = (
  updateRequest: Update.MessageUpdate,
  request: VercelRequest
) => {
  return isAllowedUser(updateRequest) && isAuthorized(request) && isValidRequest(request)
}
