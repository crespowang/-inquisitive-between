
import { between as oldBetween, hi, lo } from "between";
import { expect } from "chai";
import between from "../src/index";

describe("when the high and low are at the boundary", (): void => {
    it("returns the sort value", (): void => {
        const value = between.between(between.lowest, between.highest);
        expect(value).is.equal("V");
    });
});

describe("when the high and low are provided", (): void => {
    it("returns the sort value", (): void => {
        const value = between.between("a", "b");
        expect(value.length).is.equal(2);
    });
});

describe("when the high and low are the same", (): void => {
    it("throws exception", (): void => {
        expect(() => { between.between("a", "a") }).to.throw("Equal high and low");
    });
});

describe("when the high and low are reversed", (): void => {
    it("returns the sort value", (): void => {
        const value = between.between("b", "a");
        expect(value.length).is.equal(2);
    });

});

describe("when the low is undefined", (): void => {
    it("throws exception", (): void => {
        expect(() => { between.between(null, "a") }).to.throw("High and low must be string");
    });
});

describe("when the high is undefined", (): void => {
    it("throws exception", (): void => {
        expect(() => { between.between("a", null) }).to.throw("High and low must be string");
    });
});

describe("when it's between A and AA", (): void => {
    it("returns AAB", (): void => {
        const value = between.between("A", "AA");
        expect(value).to.eq("A5");
    });
});
describe("when the high and low are reversed", (): void => {
    it("returns the same value", (): void => {
        const value = between.between("AA", "A");
        const reversedValue = between.between("A", "AA");
        expect(value).to.equal(reversedValue);
    });
});


describe("compare with the old between", (): void => {
    it("returns the same value", (): void => {
        let low = "A";
        for (let i = 0; i < 1000; i++) {
            const oldValue = oldBetween(low, hi);
            const newLow = between.between(low, between.highest);
            expect(newLow).to.equal(oldValue);
            low = newLow;
        }

    });

    it("returns the same value", (): void => {
        let high = "k";
        for (let i = 0; i < 1000; i++) {
            const oldValue = oldBetween(lo, high);
            const newHigh = between.between(between.lowest, high);
            expect(newHigh).to.equal(oldValue);
            high = newHigh;
        }

    });
});
