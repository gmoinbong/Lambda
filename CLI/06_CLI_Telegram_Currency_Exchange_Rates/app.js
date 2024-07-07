const TelegramBot = require("node-telegram-bot-api");
const moment = require("moment");

const TG_TOKEN = process.env.TG_TOKEN;
const API_KEY = process.env.API_KEY;
const bot = new TelegramBot(TG_TOKEN, { polling: true });

const getExchangeRate = async () => {
    try {
        const url = "https://api.monobank.ua/bank/currency";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Http error! status: ${response.status}`);
        }
        const currencyData = await response.json();
        return currencyData;
    } catch (error) {
        console.error("Error fetching currency exchange:", error);
    }
};

const formatExchangeRate = (currencyExchangeData, currencyCode) => {
    const currency = currencyCode === 840 ? "USD" : "EUR";
    const filteredData = currencyExchangeData.find(
        (el) => el.currencyCodeA === currencyCode && el.currencyCodeB === 980
    );

    if (!filteredData) {
        return `No data available for ${currency} to UAH`;
    }

    const formattedMessage = `${currency} to UAH 
Buy: ${filteredData.rateBuy}
Sell: ${filteredData.rateSell}`;
    return formattedMessage;
};

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

    const currencyExchangeData = await getExchangeRate();
    if (currencyExchangeData) {
        const responseMessage = formatExchangeRate(currencyExchangeData, currencyCode);
        bot.sendMessage(chatId, responseMessage);
    } else {
        bot.sendMessage(chatId, "Sorry, there was an error fetching the currency exchange.");
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
        const weatherData = await getWeather(city);
        if (weatherData) {
            const responseMessage = formatWeatherData(weatherData, interval);
            bot.sendMessage(chatId, responseMessage);
        } else {
            bot.sendMessage(chatId, "Sorry, there was an error fetching the weather data.");
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
