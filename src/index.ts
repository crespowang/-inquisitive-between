const charsFactory = "!0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~";
export const lo = charsFactory[0];
export const hi = charsFactory[charsFactory.length - 1];

export const between = (low: string, high: string): string => {
    if (typeof low !== "string" || typeof high !== "string") {
        throw new Error("High and low must be string");
    }
    if (high.localeCompare(low) <= 0) {
        throw new Error("Reversed or equal high and low");
    }


    let newSortValue = "";
    let i = 0;

    while (true) {
        let lowIndex = charsFactory.indexOf(low[i]);
        let highIndex = charsFactory.indexOf(high[i]);

        if (lowIndex === -1) lowIndex = 0;
        if (highIndex === -1) highIndex = charsFactory.length - 1;

        i++;
        const newSortCharIndex = lowIndex + 1 < highIndex
            ? Math.round((lowIndex + highIndex) / 2)
            : lowIndex;
        const c = charsFactory[newSortCharIndex];

        newSortValue = `${newSortValue}${c}`;

        if (low.localeCompare(newSortValue) < 0 && newSortValue.localeCompare(high) && c != lo)
            return newSortValue;
    }
}
export default { lo, hi, between };