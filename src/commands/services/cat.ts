import { Context } from "telegraf";

interface CatItem {
    tags: string[];
    createdAt: string;
    updatedAt: string;
    mimetype: string;
    size: number;
    _id: string;
}

const cat = async (ctx: Context): Promise<void> => {
    console.log(`сработала команда cat от ${ctx.from?.first_name + ' / ' + ctx.from?.username}`);
    try {
        const response: Response = await fetch('https://cataas.com/cat?json=true');

        if (response.ok) {
            const data: CatItem = await response.json();
            const imageUrl: string = `https://cataas.com/cat/${data._id}`;

            ctx.replyWithPhoto(imageUrl);
        } else {
            ctx.reply('Не удалось получить котика 😿');
        }
    } catch (error: unknown) {
        console.error(error);
        ctx.reply('Произошла ошибка при получении данных');
    }
};

export default cat;