import { findAverageNumber } from "./findAverageNumber.js";

test("add all negative and positive numbers seperately and divides by their count to return two average numbers: positive and negative", () => {
    expect(findAverageNumber([10,5,-2,-4,6])).toStrictEqual([7, -3]);
    
});
test("add all negative and positive numbers seperately and divides by their count to return two average numbers: positive and negative", () => {
    expect(findAverageNumber([8,-2,-4,6])).toStrictEqual([7, -3]);
    
});
