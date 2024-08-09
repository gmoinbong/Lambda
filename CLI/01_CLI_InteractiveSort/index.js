const inquirer = require('inquirer');

function InteractiveSort(inputString, action) {
    const dataList = inputString.split(' ');
    if (dataList.includes("exit")) return;

    switch (action) {
        case "a":
            console.log(dataList.filter(item => isNaN(Number(item))).sort().join(" "));
            break;

        case "b":
            const numbersAsc = inputString.match(/[\d\.]+/g);
            if (numbersAsc) console.log(numbersAsc.sort((a, b) => Number(a) - Number(b)).join(" "));
            else console.log("No numbers found");
            break;

        case "c":
            const numbersDesc = inputString.match(/[\d\.]+/g);
            if (numbersDesc) console.log(numbersDesc.sort((a, b) => Number(b) - Number(a)).join(" "));
            else console.log("No numbers found");
            break;

        case "d":
            console.log(dataList.filter(item => isNaN(Number(item))).sort((a, b) => a.length - b.length).join(" "));
            break;

        case "e":
            let uniqueWords = [];
            dataList.forEach(el => {
                if (!uniqueWords.includes(el)) {
                    uniqueWords.push(el);
                }
            });
            console.log(uniqueWords.filter(item => isNaN(Number(item))).join(" "));
            break;

        case "f":
            let uniqueWordsAndNumbers = [];
            dataList.forEach(el => {
                if (!uniqueWordsAndNumbers.includes(el)) {
                    uniqueWordsAndNumbers.push(el);
                }
            });
            console.log(uniqueWordsAndNumbers.join(" "));
            break;

        default:
            console.log("- application works");
    }
    return;
}

async function main() {
    const { inputString } = await inquirer.prompt([
        {
            type: 'input',
            name: 'inputString',
            message: 'Enter a string of words and numbers:',
            default: 'auniqe 12 auniqe 12 auniqe auniqe ctexsdsdst 4 dtext ddbtext 7 etext 6 5 2 3 ftext gtext htext 8 itext 9 0 jtext'
        }
    ]);

    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Select an action:',
            choices: [
                { name: 'Sort words alphabetically', value: 'a' },
                { name: 'Sort numbers in ascending order', value: 'b' },
                { name: 'Sort numbers in descending order', value: 'c' },
                { name: 'Sort words by length', value: 'd' },
                { name: 'Display unique words', value: 'e' },
                { name: 'Display unique words and numbers', value: 'f' },
                { name: 'Exit', value: 'exit' }
            ]
        }
    ]);

    if (action !== 'exit') {
        InteractiveSort(inputString, action);
    } else {
        console.log('Exiting the application.');
    }
}

main();
