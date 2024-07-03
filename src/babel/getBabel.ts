import axios from 'axios'
import { BABEL_API_HOST, BABEL_API_TOKEN } from '../constants'
import { logger } from '../logger'

export const getBabel = async (query: string): Promise<any> => {
  const apiUrl = `${BABEL_API_HOST}/api/babel?query=${query}`

  try {
    const response = await axios.get(apiUrl, {
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
