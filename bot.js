// bot.js

// Подключаем dotenv для работы с переменными окружения
require('dotenv').config(); 

// Подключаем TelegramBot
const TelegramBot = require('node-telegram-bot-api');

// Чтение токена из переменной окружения
const token = process.env.TELEGRAM_BOT_TOKEN;

// Создание экземпляра бота
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Создаем обычную клавиатуру с кнопкой
  const keyboard = {
    keyboard: [
      [
        {
          text: 'Открыть POLE', // Текст кнопки
          web_app: { url: 'https://pole-cwd8.onrender.com/' } // Ссылка на Mini App
        }
      ]
    ],
    resize_keyboard: true,
    one_time_keyboard: false
  };

  bot.sendMessage(chatId, 'Привет! Я POLE, покажу тебе всю интересную статистику Формулы-1!', {
    reply_markup: keyboard
  });
});
