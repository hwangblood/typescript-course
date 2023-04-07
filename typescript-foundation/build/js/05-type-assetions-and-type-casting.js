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
const img = document.querySelector("img"); // HTMLImageElement | null
const img2 = document.querySelector("#imgId"); // Element | null
const img3 = document.getElementById("#imgId"); // HTMLElement | null
// * Non-Null Assertions
img === null || img === void 0 ? void 0 : img.src; // notes: img is nullable
img2 === null || img2 === void 0 ? void 0 : img2.src; // Element hasn't src property
img3 === null || img3 === void 0 ? void 0 : img3.src; // HTMLElement hasn't src property
// * Angle Brackets and the DOM
// notes: this will not work in tsx file for react
const nextImg = document.getElementById("#imgId");
nextImg === null || nextImg === void 0 ? void 0 : nextImg.src;
// * Student Challenge
// Original JS Code - refactor it with ts type assetion
/*
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear); // ! year could be null. thisYear is a number, but the function actually want a string
year.textContent = thisYear; // ! year could be null
 */
// * Solution 1: Beginners
let year = document.getElementById("year");
let thisYear;
thisYear = new Date().getFullYear().toString();
// when year is nul, the sentences in if-condition won't be called
if (year) {
    year.setAttribute("datetime", thisYear);
    year.textContent = thisYear;
}
// * Solution 2: Type Assertion
