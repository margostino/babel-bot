import { getBabel } from '../babel'
import { logger } from '../logger'

export const getReply = async (query: string) => {
  logger.info('getting response from Babel API...')
  return await getBabel(query)
}
