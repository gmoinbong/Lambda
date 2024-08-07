const fs = require('fs').promises;
const path = require('path');
const folderPath = './2kk_words_400x400';
const dataSplitter = (filesData) => {
    return filesData.split(/\s+/).filter(Boolean)
}


function count(userNames, accumulator) {
    for (let i = 0; i < userNames.length; ++i) {
        if (!accumulator.hasOwnProperty(userNames[i])) {
            accumulator[userNames[i]] = 1;
        } else {
            ++accumulator[userNames[i]];
        }
    }
}

async function processFiles(folderPath, callback) {
    try {
        const files = await fs.readdir(folderPath);
        for (const fileName of files) {
            const filePath = path.join(folderPath, fileName);
            const fileContent = await fs.readFile(filePath, 'utf8');
            callback(fileContent, fileName)
        }
    } catch (error) {
        console.error('Error reading files:', error);
    }

}

function uniqueUserNamesCount(filesData) {
    const userNamesCount = {};
    const userNames = dataSplitter(filesData)
    count(userNames, userNamesCount)

    const uniqueUserNames = Object.keys(userNamesCount).filter(userName => userNamesCount[userName] === 1);
    console.log(`Count unique user names: ${uniqueUserNames.length}`);
}

function uniqueUserNamesCountForOneTime(filesData) {
    const userNames = dataSplitter(filesData)
    const uniqueUserNames = new Set(userNames);

    console.log(`Number of unique user names existing in all specified files: ${uniqueUserNames.size}`);
}

async function countUserNamesInAtLeast10Files() {
    const userNamesCount = {};
    const fileCount = {};
    await processFiles(folderPath, (fileContent, fileName) => {
        const userNames = new Set(dataSplitter(fileContent));
        for (const userName of userNames) {
            if (!fileCount[userName]) {
                fileCount[userName] = new Set();
            }
            fileCount[userName].add(fileName);
        }
    });
    for (let userName in fileCount) {
        userNamesCount[userName] = fileCount[userName].size;
    }

    const userNamesInAtLeast10Files = Object.keys(userNamesCount).filter(userName => userNamesCount[userName] >= 10)
    console.log(`Number of unique user names existing in at least 10 files: ${userNamesInAtLeast10Files.length}`);
}





const main = async () => {
    const start = performance.now();

    let allContentFromFiles = "";
    await processFiles(folderPath, fileContent => {
        allContentFromFiles += fileContent + " ";
    })

    uniqueUserNamesCountForOneTime(allContentFromFiles)
    uniqueUserNamesCount(allContentFromFiles)
    await countUserNamesInAtLeast10Files()

    const end = performance.now();
    const time = (end - start) / 1000;
    console.log("Execution time:", time, "seconds");

}

main();
