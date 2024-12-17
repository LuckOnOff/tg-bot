import { Context } from "telegraf";

const shtirlitzJokes: string[] = [
    'Штирлиц шел по лесу. Вдруг дерево. Еще одно. Еще. "Лес", — догадался Штирлиц.',
    'Штирлиц открыл дверь и зашел в комнату. Комната зашла в Штирлица и закрыла дверь.',
    'Штирлиц вошел в кабинет Мюллера. "Что-то он часто ко мне ходит", — подумал Мюллер. "Что-то я часто к нему хожу", — подумал Штирлиц.',
    'Штирлиц увидел надпись "Штирлиц — дурак". "Кто-то из своих", — подумал Штирлиц.',
    'Штирлиц зашел в кабинет и упал. "Подозрительно", — подумал Мюллер.',
    'Штирлиц долго смотрел на рояль. Рояль тоже смотрел на Штирлица. И оба молчали — Штирлиц, потому что был разведчиком, рояль, потому что был роялем.',
    'Штирлиц шел по улице и увидел стоявший на углу трамвай. "Скорее всего, это трамвайный угол", — подумал Штирлиц.',
    'Штирлиц вошел в квартиру и выключил свет. Свет выключил Штирлица и вышел из квартиры.',
    'Штирлиц смотрел в окно, а Мюллер — на Штирлица. Оба думали. Штирлиц думал, как сбежать, Мюллер — зачем Штирлиц стоит в раме.',
    'Штирлиц достал пистолет и начал стрелять. Выстрелы раздавались из окна. "Интересно, кто стреляет?" — подумал Мюллер.',
    'Штирлиц решил замаскироваться. Он надел шапку-невидимку. "Кто это?" — спросил Мюллер, глядя на шапку.',
    'Штирлиц открыл дверь. Дверь посмотрела на Штирлица и открылась еще шире.',
    'Штирлиц шел по коридору. Вдруг дверь. "Мюллер", — подумал Штирлиц и открыл дверь ногой. "Штирлиц", — подумал Мюллер и закрыл дверь рукой.',
    'Штирлиц перепрыгнул через реку. Река перепрыгнула через Штирлица. И оба оказались на своих местах.',
    'Штирлиц купил билет в кино. На билете было написано "Лодка". "Шпионский фильм", — подумал Штирлиц.',
    'Штирлиц задумался. Мысль была настолько тяжелой, что он сел.',
    'Штирлиц зашел в кафе. Официант подал ему меню. "Я шпион, а не гурман", — сказал Штирлиц и заказал водку.',
    'Штирлиц увидел в лесу следы лыж. "Кто-то идет за мной", — подумал он, глядя на свои следы.',
    'Штирлиц открыл окно и закрыл дверь. Дверь открыла окно и закрыла Штирлица.',
    'Штирлиц сел за стол. Стол сел за Штирлица. Все сели и замолчали.',
    'Штирлиц написал письмо. Письмо посмотрело на Штирлица и стерлось. "Секретное", — догадался Штирлиц.',
    'Штирлиц пришел к Мюллеру. "Почему вы в красной шапке?" — спросил Мюллер. "Камуфляж", — ответил Штирлиц и исчез.',
    'Штирлиц пришел на вокзал. Вокзал посмотрел на Штирлица и ушел. "Поезд ушел", — подумал Штирлиц.',
    'Штирлиц спрятался в кустах. Кусты посмотрели на Штирлица и спрятались в тени.',
    'Штирлиц написал записку и спрятал ее под камень. Мюллер поднял камень. "Бумага под камнем", — подумал Мюллер.',
    'Штирлиц открыл бутылку водки. Бутылка водки открыла Штирлица. Оба напились и легли спать.',
    'Штирлиц вошел в телефонную будку и набрал номер. Номер обиделся и ушел.',
    'Штирлиц залез в окно. Окно залезло в Штирлица. Все остались довольны.',
    'Штирлиц шел по городу. Город шел по Штирлицу. Встретились и разошлись.',
    'Штирлиц открыл холодильник. Холодильник открыл Штирлица. Закрылись оба.',
    'Штирлиц заметил, что лампочка мигает. "Передает сигналы", — подумал он и выключил свет.',
    'Штирлиц попал в лифт. Лифт попал в Штирлица. Поездка удалась.',
    'Штирлиц открыл кран с водой. Вода посмотрела на Штирлица и перестала течь.',
    'Штирлиц писал отчет. Отчет посмотрел на Штирлица и отказался.',
    'Штирлиц закрыл окно и ушел. Окно подумало: "Надо было открыть дверь."',
    'Штирлиц пошел на рыбалку. Рыба посмотрела на Штирлица и решила не клевать.',
    'Штирлиц шел через дорогу. Машина остановилась, посмотрела на Штирлица и тоже пошла пешком.',
    'Штирлиц увидел в небе самолет. "Разведка", — подумал он и спрятался под зонтиком.',
    'Штирлиц читал газету. Газета читала Штирлица. Новости закончились.',
    'Штирлиц подошел к окну и выглянул наружу. "Что-то тихо", — подумал он, глядя на свои тапочки.',
    'Штирлиц пил кофе. Кофе подумал: "Неужели я попался?"'
];

const joke = (ctx: Context): void => {
    console.log(`сработала команда joke от ${ctx.from?.first_name + ' / ' + ctx.from?.username}`);
    ctx.reply(shtirlitzJokes[Math.floor(Math.random() * shtirlitzJokes.length)]);
};

export default joke;