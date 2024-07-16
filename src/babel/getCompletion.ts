import axios from 'axios'
import { BABEL_API_HOST, BABEL_API_TOKEN, IS_BABEL_ECHO } from '../constants'
import { logger } from '../logger'

export const getCompletion = async (query: string): Promise<any> => {
  logger.info('getting response from Babel API...')
  const apiUrl = `${BABEL_API_HOST}/api/completion?query=${query}&isEcho=${IS_BABEL_ECHO}`
  try {
    const response = await axios.get(apiUrl, {
      timeout: 60000,
      headers: {
        Authorization: `Bearer ${BABEL_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 200 && response.data && response.data.message) {
      logger.info('got successful response from Babel API')
      return response.data.message.response
    } else if (response.status === 200) {
      logger.info('got unexpected response from Babel API')
      throw new Error(`Error: Unexpected response ${response.data}`)
    } else {
      logger.info('got non-success from Babel API')
      throw new Error(`Error: Received status code ${response.status}`)
    }
  } catch (error) {
    logger.info('unexpected failure calling Babel API')
    throw new Error(`Failed calling Babel API: ${(error as Error).message}`)
  }
}
