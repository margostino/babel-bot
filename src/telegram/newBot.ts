import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { TELEGRAM_BOT_TOKEN } from '../constants'
import { logger } from '../logger'
import { reply } from './reply'
import { setWebHook } from './setWebhook'

const newBot = () => {
  if (!TELEGRAM_BOT_TOKEN) {
    throw new Error('BOT_TOKEN must be provided!')
  }
  const bot = new Telegraf(TELEGRAM_BOT_TOKEN)
  bot.start((ctx) => ctx.reply('Welcome!'))
  bot.on(message('text'), async (ctx) => {
    const babelResponse = await reply(ctx.message.text)
    ctx.telegram.sendChatAction(ctx.message.chat.id, 'typing')
    ctx.telegram.sendMessage(ctx.message.chat.id, babelResponse).then(async () => {
      await setWebHook()
    })
  })
  bot.launch().catch((e) => logger.error(`bot failed when launching: ${e.message}`))
  // bot
  //   .launch({
  //     allowedUpdates: ['message'],
  //     webhook: {
  //       domain: TELEGRAM_BOT_WEBHOOK_URL,
  //       secretToken: TELEGRAM_BOT_API_SECRET_TOKEN,
  //       path: '/api/index',
  //     },
  //   })
  //   .catch((e) => logger.error(`bot failed when launching: ${e.message}`))

  return bot
}

export const bot = newBot()
