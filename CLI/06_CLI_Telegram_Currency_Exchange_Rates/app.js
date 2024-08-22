const TelegramBot = require("node-telegram-bot-api");
const http = require('http');
const moment = require("moment");

const TG_TOKEN = "7373535808:AAHEYwAh2hu7yy3-odMpwO3Aq9xPTswmNM8";
const WEATHER_API_KEY = "6aeafd140474fff84a89594be45f8497";
const bot = new TelegramBot(TG_TOKEN, { polling: true });

let requestTimes = [];
let lastWeatherData = {};
let lastExchangeData = {};
let userCities = {};

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
    try {
        if (!canMakeRequest()) {
            return lastExchangeData;
        }
        const url = "https://api.monobank.ua/bank/currency";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            lastExchangeData = data;
            return data;
        } else {
            return lastExchangeData;
        }
    } catch (error) {
        return lastExchangeData;
    }
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
    try {
        if (!canMakeRequest()) {
            return lastWeatherData[city];
        }
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            lastWeatherData[city] = data;
            return data;
        } else {
            return lastWeatherData[city];
        }
    } catch (error) {
        return lastWeatherData[city];
    }
};

const formatWeatherData = (data, interval) => {
    if (!data || !data.city || !data.list) {
        return "No weather data available.";
    }

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
        bot.sendMessage(chatId, "Sorry, there was an error fetching the exchange rate.");
    }
});

bot.onText(/Weather/, (msg) => {
    const chatId = msg.chat.id;
    const userCity = userCities[chatId];

    if (userCity) {
        bot.sendMessage(chatId, `Your current city is ${userCity}. Do you want to keep it or change it?`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Keep current city", callback_data: "keep_city" }],
                    [{ text: "Change city", callback_data: "change_city" }]
                ]
            }
        });
    } else {
        bot.sendMessage(chatId, "Please enter your city name:");
        bot.once("message", async (msg) => {
            const city = msg.text;
            userCities[chatId] = city;
            bot.sendMessage(chatId, `City ${city} saved. Choose time delay:`, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "3 hours", callback_data: "3" }, { text: "6 hours", callback_data: "6" }]
                    ]
                }
            });
        });
    }
});

bot.on("callback_query", async (callbackQuery) => {
    const message = callbackQuery.message;
    const chatId = message.chat.id;

    if (callbackQuery.data === "change_city") {
        bot.sendMessage(chatId, "Please enter your new city name:");
        bot.once("message", async (msg) => {
            const city = msg.text;
            userCities[chatId] = city;
            bot.sendMessage(chatId, `City ${city} saved. Choose time delay:`, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "3 hours", callback_data: "3" }, { text: "6 hours", callback_data: "6" }]
                    ]
                }
            });
        });
    } else if (callbackQuery.data === "keep_city") {
        bot.sendMessage(chatId, "Choose time delay:", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "3 hours", callback_data: "3" }, { text: "6 hours", callback_data: "6" }]
                ]
            }
        });
    } else {
        const interval = parseInt(callbackQuery.data);
        const city = userCities[chatId];

        if (city) {
            try {
                const weatherData = await getWeather(city);
                const responseMessage = formatWeatherData(weatherData, interval);
                await bot.sendMessage(chatId, responseMessage);
                bot.sendMessage(chatId, "Choose time delay:", {
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "3 hours", callback_data: "3" }, { text: "6 hours", callback_data: "6" }]
                        ]
                    }
                });
            } catch (error) {
                bot.sendMessage(chatId, error.message);
            }
        } else {
            bot.sendMessage(chatId, "City is not set. Please enter your city name.");
        }
    }
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
