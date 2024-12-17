import { Context } from "telegraf";
import apiKey from "../../apiKeys/newsApiKey.js";

interface NewsItem {
    article_id: string;
    title: string;
    link: string;
    keywords: string[] | null;
    creator: string[] | null;
    video_url: null | string;
    description: null | string;
    content: string;
    pubDate: string;
    pubDateTZ: string;
    image_url: null | string;
    source_id: string;
    source_priority: number;
    source_name: string;
    source_url: string;
    source_icon: string;
    language: string;
    country: string[];
    category: string[];
    ai_tag: string;
    sentiment: string;
    sentiment_stats: string;
    ai_region: string;
    ai_org: string;
    duplicate: boolean;
}

interface NewsApiResponse {
    status: string;
    totalResults: number;
    results: NewsItem[];
}

const news = async (ctx: Context): Promise<void> => {
    console.log(`сработала команда news от ${ctx.from?.first_name + ' / ' + ctx.from?.username}`);
    try {
        const response: Response = await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&language=ru&category=top`);
        
        const data: NewsApiResponse = await response.json();

        if (response.ok) {
            data.results.forEach((news: NewsItem) => {
                ctx.reply(`${news.title}\n${news.description !== null ? '\n' + news.description : ''}\n${news.source_name} / ${news.pubDate.split(' ')[0].split('-').reverse().join('.')}`);
            });
        } else {
            ctx.reply('Не удалось найти новости');
        }
    } catch (error: unknown) {
        console.error(error);
        ctx.reply('Произошла ошибка при получении данных');
    }
};

export default news;