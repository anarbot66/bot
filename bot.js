require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const app = express();
const PORT = process.env.PORT || 3000;

// Устанавливаем кастомное меню команд
bot.setMyCommands([
  { command: "app", description: "Открыть POLE", web_app: { url: "https://pole-cwd8.onrender.com/" } }
]);

// Обрабатываем команду /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Привет! Добро пожаловать в POLE 🚀\n\nИспользуй меню в Telegram, чтобы открыть Mini App.");
});

// Запускаем сервер Express
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
