import { VercelRequest, VercelResponse } from '@vercel/node'
import { message } from 'telegraf/filters'
import { logger } from '../../logger'
import { bot, reply } from '../../telegram'

export const handleRequest = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'POST') {
    //bot.handleUpdate(req.body as unknown as Update, res)
    bot.on(message('text'), async (ctx) => {
      const babelResponse = await reply(ctx.message.text)
      ctx.telegram.sendChatAction(ctx.message.chat.id, 'typing')
      await ctx.telegram.sendMessage(ctx.message.chat.id, babelResponse)
    })
    bot.launch().catch((e) => logger.error(`bot failed when launching: ${e.message}`))
    // bot
    //   .launch({
    //     allowedUpdates: ['message'],
    //     webhook: {
    //       domain: TELEGRAM_BOT_WEBHOOK_URL,
    //       secretToken: TELEGRAM_BOT_API_SECRET_TOKEN,
    //       path: '/api/index',
    //       port: 443,
    //     },
    //   })
    //   .catch((e) => logger.error(`bot failed when launching: ${e.message}`))
  } else {
    res.status(200).json('listening to bot events...')
  }
}
