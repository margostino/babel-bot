import { Telegraf } from 'telegraf'
import { TELEGRAM_BOT_TOKEN } from '../constants'

const newBot = () => {
  if (!TELEGRAM_BOT_TOKEN) {
    throw new Error('BOT_TOKEN must be provided!')
  }
  const bot = new Telegraf(TELEGRAM_BOT_TOKEN)
  bot.start((ctx) => ctx.reply('Welcome!'))
  return bot
}

export const bot = newBot()
