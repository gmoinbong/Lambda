const TelegramBot = require("node-telegram-bot-api");
const http = require('http');
const moment = require("moment");

const TG_TOKEN = "7373535808:AAHEYwAh2hu7yy3-odMpwO3Aq9xPTswmNM8";
const API_KEY = "6aeafd140474fff84a89594be45f8497";
const bot = new TelegramBot(TG_TOKEN, { polling: true });

let requestTimes = [];

const canMakeRequest = () => {
    const now = Date.now();
    requestTimes = requestTimes.filter(time => now - time < 60000);

    if (requestTimes.length < 5) {
        requestTimes.push(now);
        return true;
    }

    return false;
};

const getExchangeRate = async () => {
    if (!canMakeRequest()) {
        throw new Error("Request limit exceeded. Try again later.");
    }
    const url = "https://api.monobank.ua/bank/currency";
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Http error! status: ${response.status}`);
    }
    return await response.json();
};

const formatExchangeRate = (data, code) => {
    const currency = code === 840 ? "USD" : "EUR";
    const result = data.find(el => el.currencyCodeA === code && el.currencyCodeB === 980);

    if (!result) {
        return `No data available for ${currency} to UAH`;
    }

    return `${currency} to UAH\nBuy: ${result.rateBuy}\nSell: ${result.rateSell}`;
};

const getWeather = async (city) => {
    if (!canMakeRequest()) {
        throw new Error("Request limit exceeded. Try again later.");
    }
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Http error! status: ${response.status}`);
    }
    return await response.json();
};

const formatWeatherData = (data, interval) => {
    let message = `Weather in ${data.city.name}:\n\n`;
    let currentDay = "";

    data.list.forEach(item => {
        const [date, time] = item.dt_txt.split(' ');
        const hour = moment(item.dt_txt).hour();
        if (hour % interval === 0) {
            if (currentDay !== date) {
                currentDay = date;
                message += `\n${moment(date).format('dddd, MMMM D')}:\n`;
            }
            message += `${moment(time, 'HH:mm').format('HH:mm')}, ${Math.round(item.main.temp)}°C, feels like: ${Math.round(item.main.feels_like)}°C, ${item.weather[0].description}\n`;
        }
    });

    return message.trim();
};

bot.setMyCommands([
    { command: "currency_exchange", description: "Currency Exchange" },
    { command: "weather", description: "Weather" }
]);

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Choose an option", {
        reply_markup: {
            keyboard: [
                [{ text: "Currency Exchange" }],
                [{ text: "Weather" }]
            ],
            resize_keyboard: true,
        }
    });
});

bot.onText(/Currency Exchange/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Choose a currency:", {
        reply_markup: {
            keyboard: [
                [{ text: "EUR" }],
                [{ text: "USD" }],
                [{ text: "Previous Menu" }]
            ],
            resize_keyboard: true,
        }
    });
});

bot.onText(/USD|EUR/, async (msg) => {
    const chatId = msg.chat.id;
    const currencyCode = msg.text === "USD" ? 840 : 978;

    try {
        const data = await getExchangeRate();
        const message = formatExchangeRate(data, currencyCode);
        bot.sendMessage(chatId, message);
    } catch (error) {
        bot.sendMessage(chatId, error.message);
    }
});

bot.onText(/Weather/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Choose time delay:", {
        reply_markup: {
            keyboard: [
                [{ text: "3 hours" }],
                [{ text: "6 hours" }],
                [{ text: "Previous Menu" }]
            ],
            resize_keyboard: true,
        }
    });
});

bot.onText(/3 hours|6 hours/, (msg) => {
    const chatId = msg.chat.id;
    const interval = msg.text === "3 hours" ? 3 : 6;
    bot.sendMessage(chatId, "Please enter the city name:");

    bot.once("message", async (msg) => {
        const city = msg.text;
        try {
            const data = await getWeather(city);
            const message = formatWeatherData(data, interval);
            bot.sendMessage(chatId, message);
        } catch (error) {
            bot.sendMessage(chatId, error.message);
        }
    });
});

bot.onText(/Previous Menu/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Choose an option", {
        reply_markup: {
            keyboard: [
                [{ text: "Currency Exchange" }],
                [{ text: "Weather" }]
            ],
            resize_keyboard: true,
        }
    });
});


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
