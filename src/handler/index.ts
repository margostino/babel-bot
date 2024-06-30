import { VercelRequest, VercelResponse } from '@vercel/node'
import { Telegraf } from 'telegraf'
import { Update } from 'telegraf/typings/core/types/typegram'
import { TELEGRAM_BOT_TOKEN } from '../constants'
import { about } from '../telegram/about'
import { greeting } from '../telegram/greeting'

const bot = new Telegraf(TELEGRAM_BOT_TOKEN)

bot.command('about', about())
bot.on('message', greeting())
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))

export const handleBot = async (req: VercelRequest, res: VercelResponse) => {
  const getWebhookInfo = await bot.telegram.getWebhookInfo()
  if (req.method === 'POST') {
    await bot.handleUpdate(req.body as unknown as Update, res)
  } else {
    res.status(200).json('Listening to bot events...')
  }
}
