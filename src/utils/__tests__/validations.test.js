import { isOnlyNumeric, isWithinRange } from '../validations';
import bigInt from 'big-integer';

describe("isOnlyNumeric validations tests:", () => {
it("returns true for positive numbers", () => {
    expect(isOnlyNumeric('12345')).toBeTruthy();
    expect(isOnlyNumeric('1')).toBeTruthy();
    expect(isOnlyNumeric('4837783938')).toBeTruthy();
});

it("returns true for negative numbers", () => {
    expect(isOnlyNumeric('-12345')).toBeTruthy();
    expect(isOnlyNumeric('-1')).toBeTruthy();
    expect(isOnlyNumeric('-847378293873')).toBeTruthy();
});

it("returns false for alpha numeric", () => {
    expect(isOnlyNumeric('123abc')).toBeFalsy();
    expect(isOnlyNumeric('fhj43')).toBeFalsy();
    expect(isOnlyNumeric('1234n')).toBeFalsy();
    expect(isOnlyNumeric('123$')).toBeFalsy();
});
});

describe("isWithinRange validations tests:", () => {
    it("returns true for numbers within range", () => {
        expect(isWithinRange(12345, bigInt(0), bigInt(20000))).toBeTruthy();
        expect(isWithinRange(1, bigInt(0), bigInt(10))).toBeTruthy();
    });
    
    it("returns true for minimum value", () => {
        expect(isWithinRange(1, bigInt(1), bigInt(5))).toBeTruthy();
        expect(isWithinRange(-1, bigInt(-1), bigInt(15))).toBeTruthy();
    });
    
    it("returns false for max value", () => {
        expect(isWithinRange(15, bigInt(1), bigInt(15))).toBeFalsy();
        expect(isWithinRange(100, bigInt(0), bigInt(100))).toBeFalsy();
    });

    it("returns false for value outside range", () => {
        expect(isWithinRange(-10, bigInt(1), bigInt(15))).toBeFalsy();
        expect(isWithinRange(5, bigInt(10), bigInt(100))).toBeFalsy();
    });
});