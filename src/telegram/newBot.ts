import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { TELEGRAM_BOT_TOKEN } from '../constants'
import { about } from './about'

export const newBot = () => {
  if (!TELEGRAM_BOT_TOKEN) {
    throw new Error('BOT_TOKEN must be provided!')
  }
  const bot = new Telegraf(TELEGRAM_BOT_TOKEN)
  bot.start((ctx) => ctx.reply('Welcome!'))
  bot.command('about', about())
  //bot.on('message', reply())
  bot.hears('hi', (ctx) => ctx.reply('Hey there'))
  bot.on(message('text'), async (ctx) => {
    // Explicit usage
    await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)

    // Using context shortcut
    await ctx.reply(`Hello ${ctx.state.role}`)
  })
  bot.launch().catch((e) => console.error(`Bot failed when launching: ${e.message}`))
  return bot
}
