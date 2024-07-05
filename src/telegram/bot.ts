import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { getBabel } from '../babel'
import { TELEGRAM_BOT_TOKEN } from '../constants'
import { logger } from '../logger'
import { sendChatAction } from './sendChatAction'

export const bot = () => {
  if (!TELEGRAM_BOT_TOKEN) {
    throw new Error('BOT_TOKEN must be provided!')
  }
  const bot = new Telegraf(TELEGRAM_BOT_TOKEN)
  bot.start((ctx) => ctx.reply('Welcome!'))
  bot.on(message('text'), async (ctx) => {
    try {
      //ctx.telegram.sendChatAction(ctx.message.chat.id, 'typing') ==> this does not work as expected
      sendChatAction(ctx.message.chat.id, 'typing')
      const babelResponse = await getBabel(ctx.message.text)
      await ctx.telegram.sendMessage(ctx.message.chat.id, babelResponse)
    } catch (error) {
      logger.error(`Failed to handle message: ${(error as Error).message}`)
      ctx.reply('An error occurred. Please try again later.')
    }
  })
  return bot
}
