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
