"use strict";
let stringArr = ["one", "two", "three"]; // * infer 'string[]'
let guitars = ["start", "les", 5250]; // * infer '(string | number)[]'
let mixeData = ["ehv", 2001, true]; // * infer '(string | number | boolean)[]'
// stringArr[0] = 1234; // ! Type 'number' is not assignable to type 'string'.
// stringArr.push(66); // ! Argument of type 'number' is not assignable to parameter of type 'string'.
guitars[0] = 12;
guitars.unshift("hello");
// guitars.unshift(true); // ! Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// ! Type 'string | number' is not assignable to type 'string'.
// ! Type 'number' is not assignable to type 'string'.
// stringArr = guitars;
// ! Type 'string | number | boolean' is not assignable to type 'string | number'.
// ! Type 'boolean' is not assignable to type 'string | number'.
// guitars = mixeData;
guitars = stringArr;
mixeData = guitars;
let testAny = []; // * Implicit 'any[]' type
let bands = []; // * explicit 'string[]' type
testAny = ["well", 12, 44.44, true, null, -100];
bands.push("halen");
// bands.push(true); // ! Argument of type 'boolean' is not assignable to parameter of type 'string'.
