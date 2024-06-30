import { VercelRequest, VercelResponse } from '@vercel/node'
import { handleBot } from '../src/handler/index'

// export const HandleGateway = async (request: VercelRequest, response: VercelResponse) => {
//   bot.start((ctx) => ctx.reply('Welcome!'))
//   bot.help((ctx) => ctx.reply('Send me a sticker'))
//   bot.on('sticker', (ctx) => ctx.reply('👍'))
//   bot.hears('hi', (ctx) => ctx.reply('Hey there!'))
//   bot.launch()
//   response.status(200).send('Bot is running!')
// }

export default async function handle(req: VercelRequest, res: VercelResponse) {
  try {
    await handleBot(req, res)
  } catch (e: any) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Server Error</h1><p>Sorry, there was a problem</p>')
    console.error(e.message)
  }
}
