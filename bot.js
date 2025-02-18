require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const app = express();
const PORT = process.env.PORT || 3000;

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Привет! Добро пожаловать в POLE!", {
    reply_markup: { remove_keyboard: true }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
