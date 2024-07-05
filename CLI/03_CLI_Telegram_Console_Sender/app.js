const TelegramBot = require('node-telegram-bot-api');
const { Command } = require('commander');

const TG_TOKEN = process.env.TG_TOKEN
const bot = new TelegramBot(TG_TOKEN, { polling: true });

const chatId = 374522414;

const program = new Command();
program
    .description("Send message or photo to telegram bot")


program
    .command("m <message>")
    .description("Send message to telegram Bot")
    .action((message) => {
        bot.sendMessage(chatId, message)
            .then(() => console.log("Message sent successfully"))
            .catch((error) => {
                console.error("Error sending message", error);
                if (error.response && error.response.body) {
                    console.error("Error details:", error.response.body);
                }
            });
    })

program
    .command("p <imgPath>")
    .description("Send photo to telegram Bot. Just drag and drop it console after p-flag")
    .action((imgPath) => {
        bot.sendPhoto(chatId, imgPath)
            .then(() => console.log("Image upload successfully"))
            .catch((error) => {
                console.error("Error upload photo", error);
                if (error.respnse && error.response.body) {
                    console.error("Error details:", error.respnse.body)
                }
            });
    })

program.parse();
