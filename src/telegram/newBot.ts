import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { TELEGRAM_BOT_TOKEN } from '../constants'

const newBot = () => {
  if (!TELEGRAM_BOT_TOKEN) {
    throw new Error('BOT_TOKEN must be provided!')
  }
  const bot = new Telegraf(TELEGRAM_BOT_TOKEN)
  bot.start((ctx) => ctx.reply('Welcome!'))
  bot.on(message('text'), async (ctx) => {
    await ctx.telegram.sendMessage(ctx.message.chat.id, 'echo')
  })
  bot.launch().catch((e) => console.error(`bot failed when launching: ${e.message}`))
  return bot
}

export const bot = newBot()
