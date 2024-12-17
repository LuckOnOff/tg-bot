import { Context } from "telegraf";

const start = (ctx: Context): void => {
    console.log(`сработала команда start от ${ctx.from?.first_name + ' / ' + ctx.from?.username}`);
    ctx.reply(`Добро пожаловать! Это бот, сделанный на коленке 🤖
        \nВот что он умеет:\n    • /start\n    • /help\n    • /joke\n    • /cat\n    • /news
    `);
};

export default start;