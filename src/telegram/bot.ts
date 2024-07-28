import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { getCompletion, saveMessage } from '../babel'
import { TELEGRAM_BOT_TOKEN } from '../constants'
import { appendMessage, getMessages } from '../google'
import { logger } from '../logger'
import { sendChatAction } from './sendChatAction'

export const bot = () => {
  if (!TELEGRAM_BOT_TOKEN) {
    throw new Error('BOT_TOKEN must be provided!')
  }
  const bot = new Telegraf(TELEGRAM_BOT_TOKEN)
  
  bot.start((ctx) => ctx.reply('Welcome!'))
  
  bot.command('parking', async (ctx) => {
    const reply = 'Share you quick note and I will store in parking for you!'
    await appendMessage(JSON.stringify({ sender: 'user', content: '/parking' }))
    await appendMessage(JSON.stringify({ sender: 'assistant', content: reply }))
    ctx.reply(reply)
  })
  bot.command('clean', async (ctx) => {
    const reply = '🧹 Cache cleaned!'
    await appendMessage(JSON.stringify({ sender: 'user', content: '/parking' }))
    await appendMessage(JSON.stringify({ sender: 'assistant', content: reply }))
    ctx.reply(reply)
  })

  bot.on(message('text'), async (ctx) => {
    try {
      //ctx.telegram.sendChatAction(ctx.message.chat.id, 'typing') ==> this does not work as expected
      sendChatAction(ctx.message.chat.id, 'typing')
      await appendMessage(JSON.stringify({ sender: 'user', content: ctx.message.text }))
      const messages = await getMessages()
      const penultimateMessage =
        messages && messages.length > 2 ? JSON.parse(messages[messages.length - 3][1]) : null
      if (penultimateMessage && penultimateMessage['content'] === '/parking') {
        const reply = '✅ Message added in Parking!'
        Promise.all([
          saveMessage(ctx.message.text),
          appendMessage(JSON.stringify({ sender: 'assistant', content: reply })),
        ])
        // await saveMessage(ctx.message.text)
        // await appendMessage(JSON.stringify({ sender: 'assistant', content: reply }))
        return ctx.reply('✅ Message added in Parking!')
      }
      const babelResponse = await getCompletion(ctx.message.text)
      await appendMessage(JSON.stringify({ sender: 'assistant', content: babelResponse }))
      await ctx.telegram.sendMessage(ctx.message.chat.id, babelResponse)
    } catch (error) {
      logger.error(`Failed to handle message: ${(error as Error).message}`)
      ctx.reply('An error occurred. Please try again later.')
    }
  })
  return bot
}
