import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { TELEGRAM_BOT_TOKEN, TELEGRAM_BOT_WEBHOOK_URL } from '../constants'
import { reply } from './reply'

const newBot = async () => {
  if (!TELEGRAM_BOT_TOKEN) {
    throw new Error('BOT_TOKEN must be provided!')
  }
  const bot = new Telegraf(TELEGRAM_BOT_TOKEN)
  bot.start((ctx) => ctx.reply('Welcome!'))
  bot.on(message('text'), async (ctx) => {
    const babelResponse = await reply(ctx.message.text)
    ctx.telegram.sendChatAction(ctx.message.chat.id, 'typing')
    await ctx.telegram.sendMessage(ctx.message.chat.id, babelResponse)
  })
  bot
    .launch({
      allowedUpdates: ['message'],
      webhook: {
        domain: TELEGRAM_BOT_WEBHOOK_URL,
        path: '/api/index',
        port: 443,
      },
    })
    .catch((e) => console.error(`bot failed when launching: ${e.message}`))
  return bot
}

export const bot = newBot()
