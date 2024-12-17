import { Context } from "telegraf";

const help = (ctx: Context): void => {
    console.log(`сработала команда help от ${ctx.from?.first_name + ' / ' + ctx.from?.username}`);
    ctx.reply(`
        Список доступных команд:\n• /start\n• /help\n• /joke\n• /cat\n• /news
    `);
};

export default help;