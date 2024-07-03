import { getBabel } from '../babel'

export const reply = async (query: string) => {
  return await getBabel(query)
}
