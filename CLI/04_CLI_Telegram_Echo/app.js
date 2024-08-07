const TelegramBot = require("node-telegram-bot-api");
const TG_TOKEN = process.env.TG_TOKEN

const bot = new TelegramBot(TG_TOKEN, { polling: true })



bot.on('message', (msg) => {
    const chatId = msg.chat.id
    let message = msg.text
    const firstName = msg.from.first_name;
    const lastName = msg.from.last_name;
    const userLog = `User ${firstName !== undefined ? firstName : ""} ${lastName !== undefined ? lastName : ""} text: ${message === "photo" ? "requested a picture" : message}`


    if (message === "photo") {
        const randomUrl = `https://picsum.photos/200/300?random=${Date.now()}`;
        bot.sendPhoto(chatId, randomUrl).
            catch(() => console.log("error sent img"))
    }
    console.log(userLog);
    message !== "photo" && bot.sendMessage(chatId, `You sent a message: ${message} `);
});