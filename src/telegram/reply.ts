import { getBabel } from '../babel'

export const reply = async (query: string) => {
  console.log('getting response from Babel API...')
  return await getBabel(query)
}
