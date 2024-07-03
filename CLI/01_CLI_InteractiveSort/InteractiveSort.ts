function InteractiveSort(inputString: string, action: string): void {
    const dataList: string[] = inputString.split(' ');
    if (dataList.includes("exit")) return

    switch (action) {
        case "a":
            console.log(dataList.filter(item => isNaN(Number(item))).sort().join(" "));
            break

        case "b":
            const numbersAsc = inputString.match(/[\d\.]+/g);
            if (numbersAsc) console.log(numbersAsc.sort((a, b) => Number(a) - Number(b)).join(" "));
            else console.log("No numbers found");
            break

        case "c":
            const numbersDesc = inputString.match(/[\d\.]+/g);
            if (numbersDesc) console.log(numbersDesc.sort((a, b) => Number(b) - Number(a)).join(" "));
            else console.log("No numbers found"); break

        case "d":
            console.log(dataList.filter(item => isNaN(Number(item))).sort((a, b) => a.length - b.length).join(" "));
            break

        case "e":
            let uniqueWords: string[] = []
            dataList.forEach(el => {
                if (!uniqueWords.includes(el)) {
                    uniqueWords.push(el)
                }
            });
            console.log(uniqueWords.filter(item => isNaN(Number(item))).join(" "));
            break

        case "f":
            let uniqueWordsAndNumbers: string[] = []
            uniqueWordsAndNumbers
            dataList.forEach(el => {
                if (!uniqueWordsAndNumbers.includes(el)) {
                    uniqueWordsAndNumbers.push(el)
                }
            });
            console.log(uniqueWordsAndNumbers.join(" "));

            break
        default:
            console.log("- application works");
    }
    return
}

const userInput: string = "auniqe  12 auniqe 12  auniqe auniqe ctexsdsdst 4 dtext ddbtext 7  etext  6 5 2 3 ftext gtext htext 8 itext 9 0 jtext";
InteractiveSort(userInput, "b")

