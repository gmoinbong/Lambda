const TelegramBot = require("node-telegram-bot-api");
const http = require('http');
const moment = require("moment");

const TG_TOKEN = "7233780229:AAF6Tiu1JQfGE5q2HfKBk27Mr8e4q_Pzlzc";
const API_KEY = "186bd86d8ce1b477fbb716010c6199a2";

const bot = new TelegramBot(TG_TOKEN, { polling: true });

let requestTimes = [];
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

const getWeather = async (q) => {
    if (!canMakeRequest()) {
        throw new Error("Request limit exceeded. Try again later.");
    }
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Http error! status: ${response.status}`);
        }
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};

const formatWeatherData = (weatherData, hoursInterval) => {
    let formattedMessage = `Weather in ${weatherData.city.name}:\n\n`;
    let currentDay = "";

    weatherData.list.forEach((element) => {
        const date = element.dt_txt.split(' ')[0];
        const hour = moment(element.dt_txt).hour();
        if (hour % hoursInterval === 0) {
            if (currentDay !== date) {
                currentDay = date;
                formattedMessage += `\n${moment(date).format('dddd, MMMM D')}: \n`;
            }
            formattedMessage += `${moment(element.dt_txt).format('HH:mm')}, ${Math.round(element.main.temp)}°C, feels like: ${Math.round(element.main.feels_like)}°C, ${element.weather[0].description}\n`;
        }
    });
    return formattedMessage.trim();
};

bot.onText(/\/weather/, (msg) => {
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
                bot.sendMessage(chatId, responseMessage);
            } catch (error) {
                bot.sendMessage(chatId, error.message);
            }
        } else {
            bot.sendMessage(chatId, "City is not set. Please enter your city name.");
        }
    }
});

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
