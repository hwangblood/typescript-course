"use strict";
// * Converting Types with Assertions
let aa = "hello";
let bb = aa; // less specific
let cc = aa; // more specific
// * Angle Bracket Syntax instead of "as"
let dd = "world";
let ee = "world";
// * Narrowing Return Values with Assertions
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 3, "concat");
// * Caution: Assertions allow mistakes!
// Be careful! TS sees no error - but a string is returned, becase the returned value
// could be a string or number
let myVal2 = addOrConcat(2, 3, "concat");
console.log({ myVal2 }, typeof myVal2); // {myVal2: '23'}
// * Double Casting and the unknown type
// 10 as string; // ! can't do this
let val3 = 10; // in fact, it's a value of number
console.log({ val3 }, typeof val3);
// * DOM Selection Types
// * Non-Null Assertions
// * Angle Brackets and the DOM
// * Student Challenge
// * Solution 1: Beginners
// * Solution 2: Type Assertion
