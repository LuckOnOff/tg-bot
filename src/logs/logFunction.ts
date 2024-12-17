import { Context } from 'telegraf';
import path from 'path';
import { fileURLToPath } from 'url';
import { promises } from 'fs';

const logFunction = async (ctx: Context): Promise<void> => {
    const __filename: string = fileURLToPath(import.meta.url);
    const __dirname: string = path.dirname(__filename);
    const logFilePath: string = path.join(__dirname, 'bot_logs.txt');

    const now: Date = new Date();
    const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('ru-RU', {
        timeZone: 'Europe/Moscow',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    const formattedDate: string = formatter.format(now).replace(',', '');

    if(ctx.from && ctx.message && 'text' in ctx.message) {
        const logMessage = `[${formattedDate}] ${ctx.from.username || ctx.from.first_name}: ${ctx.message.text}\n`;

        console.log('Новый лог');

        try {
            await promises.appendFile(logFilePath, logMessage);
        } catch (err) {
            console.error('Ошибка записи в лог-файл:', err);
        }
    }
};

export default logFunction;