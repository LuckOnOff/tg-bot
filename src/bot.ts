'use strict';

import { Telegraf } from 'telegraf';
import apiKey from './apiKeys/botApiKey.js';
import logFunction from './logs/logFunction.js';
import help from './commands/help.js';
import start from './commands/start.js';
import joke from './commands/joke.js';
import cat from './commands/services/cat.js';
import news from './commands/services/news.js';
import readLogs from './logs/readLogs.js';

// создание бота
const bot = new Telegraf(apiKey);

// запуск бота
bot.launch();

// команды
bot.command('start', start);
bot.command('help', help);
bot.command('joke', joke);
bot.command('cat', cat);
bot.command('news', news);

// middleware для логирования всех текстов
bot.use((ctx, next) => {
    if (ctx.message && 'text' in ctx.message) {
        logFunction(ctx);
    }
    return next();
});

// ответ на приветствия
bot.hears(['ку', 'привет', 'прив', 'хай', 'hi', 'privet'], (ctx) => {
    if (ctx.from) {
        ctx.reply(`Привет, ${ctx.from.username || ctx.from.first_name}!`);
    }
});

// ответ на запрос логов
bot.hears('adminLogs', async (ctx) => {
    try {
        const logs = await readLogs(); // функция асинхронная, поэтому возвращается промис
        await ctx.reply(logs); // отправка логов
    } catch (error: unknown) {
        await ctx.reply('Произошла ошибка при получении логов.');
    }
});

// ответ на прощания
bot.hears(['пока', 'поки', 'бай', 'bye', 'до свидания', 'увидимся', 'до связи'], (ctx) => {
    if (ctx.from) {
        ctx.reply(`Всего хорошего, ${ctx.from.username || ctx.from.first_name}!`);
    }
});

// глобальная обработка ошибок
bot.catch((err, ctx) => {
    console.error(`Ошибка: ${err}`);
    ctx.reply('Произошла ошибка. Попробуйте позже.');
});

// корректная остановка бота при получении системных сигналов SIGINT и SIGTERM
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));