// bot.js

// Подключаем dotenv для работы с переменными окружения
require('dotenv').config(); 

// Подключаем TelegramBot и Express
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

// Чтение токена из переменной окружения
const token = process.env.TELEGRAM_BOT_TOKEN;

// Создание экземпляра бота
const bot = new TelegramBot(token, { polling: true });

// Создаем Express приложение
const app = express();

// Указание порта для Render или локально (по умолчанию 3000)
const PORT = process.env.PORT || 3000;

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

// Добавление новой команды /justanincident
bot.onText(/\/justanincident/, (msg) => {
  const chatId = msg.chat.id;
  
  // Ответ на команду
  bot.sendMessage(chatId, "nothing special, just an incident. заходи в polе!");
});

// Настроим Express на прослушивание порта
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
