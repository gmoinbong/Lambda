const fs = require('fs').promises;

const pathFile = "/vacation-initial.json"
const outPutFile = "/vacation-handled.json";

const processJSON = async () => {
    try {
        const data = await fs.readFile(pathFile, 'utf8');
        const dataJson = JSON.parse(data);
        const userMap = {}

        for (const item of dataJson) {
            const userId = item.user._id
            const name = item.user.name
            const weekendDates = { startDate: item.startDate, endDate: item.endDate }

            if (!userMap[userId]) {
                userMap[userId] = {
                    "userId": userId,
                    "name": name,
                    "weekendDates": [weekendDates]
                };
            } else {
                userMap[userId].weekendDates.push(weekendDates)
            }
        }
        return userMap
    } catch (err) {
        console.error("Error reading or processing file: ", err);
        throw err;
    }
}

const main = async () => {
    try {
        const userMap = await processJSON()
        const data = JSON.stringify(userMap, null, 2)
        console.log(data);
        await fs.writeFile(outPutFile, data)
        console.log("File written successfully");
    } catch (err) {
        console.error("Error writing file: ", err);
    }
}

main()