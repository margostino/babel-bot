import { Context } from 'telegraf'

const replyToMessage = (ctx: Context, messageId: number, string: string) =>
  ctx.reply(string, {
    reply_parameters: { message_id: messageId },
  })

const reply = () => async (ctx: Context) => {
  // const messageId = ctx.message?.message_id
  // const userName = `${ctx.message?.from.first_name} ${ctx.message?.from.last_name}`

  // if (messageId) {
  //   // await replyToMessage(ctx, messageId, `Hello, ${userName}!`)
  //   //await ctx.telegram.sendMessage(messageId, 'Hello')
  //   await ctx.reply(`good`)
  // }
  await ctx.reply(`good`)
}

export { reply }
