import { VercelRequest, VercelResponse } from '@vercel/node'
import { Telegraf } from 'telegraf'
import { TELEGRAM_BOT_TOKEN } from '../src/constants'

const bot = new Telegraf(TELEGRAM_BOT_TOKEN)

export const HandleGateway = async (request: VercelRequest, response: VercelResponse) => {
  // response.status(200).send('no implemented')
  bot.start((ctx) => ctx.reply('Welcome!'))
  bot.help((ctx) => ctx.reply('Send me a sticker'))
  bot.on('sticker', (ctx) => ctx.reply('👍'))
  bot.hears('hi', (ctx) => ctx.reply('Hey there!'))
  bot.launch()
}

export default HandleGateway
