import { promises } from "fs";


const readLogs = async (): Promise<string> => {
    try {
        const data: string = await promises.readFile('bot_logs.txt', 'utf-8');
        return data;
    } catch (err: unknown) {
        console.error('Ошибка при чтении файла:', err);
        
        return 'Произошла ошибка при чтении файла';
    }
}

export default readLogs;