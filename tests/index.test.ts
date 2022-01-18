
import { expect } from "chai";
import between from "../src/index";

describe("when the high and low are at the boundary", (): void => {
    it("returns the sort value", (): void => {
        const value = between.between(between.lo, between.hi);
        expect(value.length).is.equal(1);
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
        expect(() => { between.between("a", "a") }).to.throw("Reversed or equal high and low");
    });
});

describe("when the high and low are reversed", (): void => {
    it("throws exception", (): void => {
        expect(() => { between.between("b", "a") }).to.throw("Reversed or equal high and low");
    });
});

describe("when the low is undefined", (): void => {
    it("throws exception", (): void => {
        expect(() => { between.between(null, "a") }).to.throw("Low must be defined");
    });
});

describe("when the high is undefined", (): void => {
    it("throws exception", (): void => {
        expect(() => { between.between("a", null) }).to.throw("High must be defined");
    });
});