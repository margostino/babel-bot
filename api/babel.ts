import { VercelRequest, VercelResponse } from '@vercel/node'
import { Telegraf } from 'telegraf'
import { TELEGRAM_BOT_TOKEN } from '../src/constants'

const bot = new Telegraf(TELEGRAM_BOT_TOKEN)

export const HandleGateway = async (request: VercelRequest, response: VercelResponse) => {
  bot.start((ctx) => ctx.reply('Welcome!'))
  bot.help((ctx) => ctx.reply('Send me a sticker'))
  bot.on('sticker', (ctx) => ctx.reply('👍'))
  bot.hears('hi', (ctx) => ctx.reply('Hey there!'))
  bot.launch()
  response.status(200).send('Bot is running!')
}

export default HandleGateway
