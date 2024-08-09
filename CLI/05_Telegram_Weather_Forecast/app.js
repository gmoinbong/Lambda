const TelegramBot = require("node-telegram-bot-api");
const moment = require("moment");
const TG_TOKEN = "7233780229:AAF6Tiu1JQfGE5q2HfKBk27Mr8e4q_Pzlzc"
const API_KEY = "186bd86d8ce1b477fbb716010c6199a2"

const bot = new TelegramBot(TG_TOKEN, { polling: true });

const getWeather = async (q) => {
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

bot.onText(/\weather/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Choose time delay:", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "3 hours", callback_data: "3" }, { text: "6 hours", callback_data: "6" }]
            ]
        }
    });
});

bot.on("callback_query", async (callbackQuery) => {
    const message = callbackQuery.message;
    const interval = parseInt(callbackQuery.data);

    bot.sendMessage(message.chat.id, "Please enter the city name:");
    bot.once("message", async (msg) => {
        const city = msg.text;
        const weatherData = await getWeather(city);
        if (weatherData) {
            const responseMessage = formatWeatherData(weatherData, interval);
            bot.sendMessage(message.chat.id, responseMessage);
        } else {
            bot.sendMessage(message.chat.id, "Sorry, there was an error fetching the weather data.");
        }
    });
});
