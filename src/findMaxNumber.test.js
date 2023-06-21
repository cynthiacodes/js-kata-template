import { findMaxNumber } from "./findMaxNumber.js";

test("from numbersArray get the max number", () => {
    expect(findMaxNumber([10, 14, 9, 23, 18,-2])).toBe(23);
});
