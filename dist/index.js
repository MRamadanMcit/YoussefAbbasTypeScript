"use strict";
function sum1(number1, number2) {
    const res = number1 + number2;
}
function sum2(number1, number2) {
    const res = number1 + number2;
    return res;
}
const result1 = sum1(1, 2);
console.log({ "Without return type (void): ": result1 });
const result2 = sum2(1, 2);
console.log({ "With return type: ": result2 });
