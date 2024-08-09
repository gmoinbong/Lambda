const fs = require('fs').promises;
const path = require('path');
const folderPath = './2kk_words_400x400';

const dataSplitter = (filesData) => {
    return filesData.toLowerCase().split(/\s+/).filter(Boolean);
}

async function processFiles(folderPath, callback) {
    try {
        const files = await fs.readdir(folderPath);
        for (const fileName of files) {
            const filePath = path.join(folderPath, fileName);
            const fileContent = await fs.readFile(filePath, 'utf8');
            callback(fileContent, fileName);
        }
    } catch (error) {
        console.error('Error reading files:', error);
    }
}

function uniqueUserNamesCountForOneTime(filesData) {
    const userNames = dataSplitter(filesData);
    const uniqueUserNames = new Set(userNames);

    console.log(`Number of unique user names existing in all specified files: ${uniqueUserNames.size}`);
}

async function countUniqueUserNames() {
    const globalUserNamesCount = {};

    await processFiles(folderPath, (fileContent) => {
        const userNames = dataSplitter(fileContent);
        const localUserNamesSet = new Set(userNames);

        localUserNamesSet.forEach(userName => {
            if (!globalUserNamesCount[userName]) {
                globalUserNamesCount[userName] = 0;
            }
            globalUserNamesCount[userName]++;
        });
    });


    const uniqueUserNames = Object.keys(globalUserNamesCount).filter(userName => globalUserNamesCount[userName] === 1);
    console.log(`Count unique user names: ${uniqueUserNames.length}`);
}

async function countUserNamesInAtLeast10Files() {
    const fileCount = {};

    await processFiles(folderPath, (fileContent, fileName) => {
        const userNames = new Set(dataSplitter(fileContent));
        userNames.forEach(userName => {
            if (!fileCount[userName]) {
                fileCount[userName] = new Set();
            }
            fileCount[userName].add(fileName);
        });
    });


    const userNamesInAtLeast10Files = Object.keys(fileCount).filter(userName => fileCount[userName].size >= 10);
    console.log(`Number of unique user names existing in at least 10 files: ${userNamesInAtLeast10Files.length}`);
}

const main = async () => {
    const start = performance.now();

    let allContentFromFiles = "";
    await processFiles(folderPath, fileContent => {
        allContentFromFiles += fileContent + " ";
    });

    uniqueUserNamesCountForOneTime(allContentFromFiles); 
    await countUniqueUserNames(); 
    await countUserNamesInAtLeast10Files(); 

    const end = performance.now();
    const time = (end - start) / 1000;
    console.log("Execution time:", time, "seconds");
}

main();
