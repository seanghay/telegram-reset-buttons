import 'dotenv/config.js';
import { Telegraf, Markup } from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start(ctx => ctx.reply("Hello!"));

bot.command("remove", ctx => {
	ctx.reply(
		"Removed the keyboard",
		Markup.removeKeyboard(true)
	)
});

bot.launch();


process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
