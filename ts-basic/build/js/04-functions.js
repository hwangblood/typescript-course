"use strict";
// * Literal Types
let mName;
// mName = 'wow'; // ! Type '"wow"' is not assignable to type '"Dave"'.
let uname;
uname = "Dave";
uname = "Amy";
// * Basic Functions
const add = (a, b) => {
    return a + b;
};
const add2 = (a, b) => a + b;
// * Functions with no return value
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello @hwangblood");
logMsg(`2 + 3 = ${add(2, 3)}`);
logMsg(`3.1 + 5.2 = ${add(3.1, 5.2)}`);
// * The function  keyword
let substract = function (c, d) {
    return c - d;
};
// * Function Type ALiases
// type mathFunction = (a: number, b: number) => number;
let multiply = function (c, d) {
    return c * d;
};
// * Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// * Default Parameters
const sumAll = (a = 10, b, c = 0) => {
    return a + b + c;
};
logMsg(sumAll(undefined, 3));
