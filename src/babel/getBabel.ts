import axios from 'axios'
import { BABEL_API_HOST, BABEL_API_TOKEN } from '../constants'

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
      console.log('got successful response from Babel API')
      return response.data.message.response
    } else if (response.status === 200) {
      console.log('got unexpected response from Babel API')
      throw new Error(`Error: Unexpected response ${response.data}`)
    } else {
      console.log('got non-success from Babel API')
      throw new Error(`Error: Received status code ${response.status}`)
    }
  } catch (error) {
    console.log('unexpected failure calling Babel API')
    throw new Error(`Failed calling Babel API: ${(error as Error).message}`)
  }
}
