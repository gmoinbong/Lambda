function availableDotsBetweenSymbols(str: string) {
    let result: string[] = []
    const dotPositionsLength: number = str.length - 1
    const maxVariations: number = Math.pow(2, dotPositionsLength)

    for (let i = 0; i < maxVariations; i++) {
        let binSequence: string = i.toString(2).padStart(dotPositionsLength, "0")
        let newStrArr: string[] = str.split("").map((el, i) => {
            if (i < dotPositionsLength && binSequence[i] === '1') {
                return el + "."
            }
            return el
        });
        result.push(newStrArr.join(""))
    }
    console.log(result);
    return result
}

availableDotsBetweenSymbols("abcd")