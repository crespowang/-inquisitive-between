
const charsFactory = "!0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~";
export const lowest = charsFactory[0];
export const highest = charsFactory[charsFactory.length - 1];

export const between = (low: string, high: string): string => {
    if (typeof low !== "string" || typeof high !== "string") {
        throw new Error("High and low must be string");
    }
    if (high.localeCompare(low) === 0) {
        throw new Error("Equal high and low");

    }
    let correctedHigh;
    let correctedLow;
    if (low == lowest || high == highest) {
        correctedLow = low;
        correctedHigh = high;
    } else {
        correctedHigh = high.localeCompare(low) < 0 ? low : high;
        correctedLow = high.localeCompare(low) < 0 ? high : low;
    }
    let newSortValue = "";
    let i = 0;

    while (true) {
        let lowIndex = charsFactory.indexOf(correctedLow[i]);
        let highIndex = charsFactory.indexOf(correctedHigh[i]);

        if (lowIndex == -1) lowIndex = 0;
        if (highIndex == -1) highIndex = charsFactory.length - 1;

        i++;
        const newSortCharIndex = lowIndex + 1 < highIndex
            ? Math.round((lowIndex + highIndex) / 2)
            : lowIndex;

        const c = charsFactory[newSortCharIndex];
        newSortValue += c;
        if (correctedLow < newSortValue && newSortValue < correctedHigh && c != lowest)
            return newSortValue;
    }
}
export default { lowest, highest, between };