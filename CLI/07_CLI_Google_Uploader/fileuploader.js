const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');
const fs = require('fs').promises;
const { createReadStream } = require('fs');
const path = require('path');
const process = require('process');
const inquirer = require('inquirer');
const https = require('https');

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');


async function loadSavedCredentialsIfExist() {
    try {
        const content = await fs.readFile(TOKEN_PATH);
        const credentials = JSON.parse(content);
        return google.auth.fromJSON(credentials);
    } catch (err) {

        return null;
    }
}

async function saveCredentials(client) {
    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
        type: 'authorized_user',
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(TOKEN_PATH, payload);
}

async function authorize() {
    let client = await loadSavedCredentialsIfExist();
    if (client) {
        return client;
    }
    client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
    });
    if (client.credentials) {
        await saveCredentials(client);
    }
    return client;
}


async function uploadFile(authClient, filePath, newFileName) {
    const drive = google.drive({ version: "v3", auth: authClient });

    const file = await drive.files.create({
        media: {
            body: createReadStream(filePath)
        },
        fields: "id, webViewLink",
        requestBody: {
            name: newFileName || path.basename(filePath)
        },
    });
    const webViewLink = file.data.webViewLink;

    return webViewLink
}

const shortenUrl = (url) => new Promise((resolve, reject) =>
    https.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`, res => {
        let data = "";
        res.on("data", chunk => data += chunk);
        res.on("end", () => resolve(data));
    }).on("error", error => reject(`Error creating short link: ${error.message}`))
);

const promptFilePath = async () => {
    const questions = [{
        type: "input",
        name: "filePath",
        message: "Drag and drop your image to terminal and press Enter for upload",
    },
    ];

    const answers = await inquirer.prompt(questions);
    return answers.filePath.replace(/['"]/g, '');
}

const promptRenameFile = async (filePath) => {
    const file = path.parse(filePath).base
    const renameQuestion = [
        {
            type: "confirm",
            name: "renameFile",
            message: `Your're uploading the file with the name: ${file}\n Would you like to change it`,
            default: false
        }
    ];
    const fileNameQuestion = [
        {
            type: "input",
            name: "filename",
            message: "Enter new file name (WITHOUT extension aka .jpg, .png., etc.)"
        }
    ]

    const answersRename = await inquirer.prompt(renameQuestion)
    if (answersRename.renameFile === true) {
        const answers = await inquirer.prompt(fileNameQuestion)
        const ext = path.parse(filePath).ext
        console.log(filePath, "\n", answers.filename + ext, "\n Succesfully Upload!");
        return answers.filename + ext
    }

    return null
}

const promptShortLink = async (webViewLink) => {
    const questions = [{
        type: "confirm",
        name: "shortLink",
        message: "Would you like to shorten your link?",
        default: false
    }]
    const answer = await inquirer.prompt(questions)

    if (answer.shortLink === true) {
        const shortLink = await shortenUrl(webViewLink)
        console.log(`Shortened Link: ${shortLink}`);
    }

}

async function main() {
    try {
        const authClient = await authorize();
        const filePath = await promptFilePath();

        console.log(`Path to file: ${filePath}
File name: ${path.parse(filePath).name}
File extension: ${path.parse(filePath).ext}`)

        const newFileName = await promptRenameFile(filePath)
        const webViewLink = await uploadFile(authClient, filePath, newFileName);
        await promptShortLink(webViewLink)
    } catch (error) {
        console.error(error);
    }
}

main();
