import { Telegraf } from 'telegraf'
import { TELEGRAM_BOT_TOKEN } from '../constants'
import { about } from './about'
import { reply } from './reply'

export const newBot = () => {
  if (!TELEGRAM_BOT_TOKEN) {
    throw new Error('BOT_TOKEN must be provided!')
  }
  const bot = new Telegraf(TELEGRAM_BOT_TOKEN)
  bot.start((ctx) => ctx.reply('Welcome!'))
  bot.command('about', about())
  bot.on('message', reply())
  bot.launch()
  return bot
}