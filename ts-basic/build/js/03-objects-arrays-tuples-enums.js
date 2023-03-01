"use strict";
let stringArr = ["one", "two", "three"]; // * infer '(string)[]'
let guitars = ["start", "les", 5250]; // * infer '(string | number)[]'
let mixeData = ["ehv", 2001, true]; // * infer '(string | number | boolean)[]'
