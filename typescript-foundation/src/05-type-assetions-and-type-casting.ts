type One = string;
type Two = string | number;
type Three = "hello";

// * Converting Types with Assertions
let aa: One = "hello";
let bb = aa as Two; // less specific
let cc = aa as Three; // more specific

// * Angle Bracket Syntax instead of "as"
let dd = <One>"world";
let ee = <string | number>"world";

// * Narrowing Return Values with Assertions
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 3, "concat") as string;

// * Caution: Assertions allow mistakes!
// Be careful! TS sees no error - but a string is returned, becase the returned value
// could be a string or number
let myVal2: number = addOrConcat(2, 3, "concat") as number;
console.log({ myVal2 }, typeof myVal2); // {myVal2: '23'}

// * Double Casting and the unknown type
// 10 as string; // ! can't do this
let val3 = 10 as unknown as string; // in fact, it's a value of number
console.log({ val3 }, typeof val3);

// * DOM Selection Types
const img = document.querySelector("img"); // HTMLImageElement | null
const img2 = document.querySelector("#imgId"); // Element | null
const img3 = document.getElementById("#imgId"); // HTMLElement | null

// * Non-Null Assertions
img?.src; // notes: img is nullable
(img2 as HTMLImageElement)?.src; // Element hasn't src property
(img3 as HTMLImageElement)?.src; // HTMLElement hasn't src property

// * Angle Brackets and the DOM
// notes: this will not work in tsx file for react
const nextImg = <HTMLImageElement>document.getElementById("#imgId");
nextImg?.src;

// * Student Challenge
// Original JS Code - refactor it with ts type assetion
/* 
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear); // ! year could be null. thisYear is a number, but the function actually want a string
year.textContent = thisYear; // ! year could be null
 */

// * Solution 1: Beginners
let year: HTMLElement | null = document.getElementById("year");
let thisYear: string;
thisYear = new Date().getFullYear().toString();
// when year is nul, the sentences in if-condition won't be called
if (year) {
  year.setAttribute("datetime", thisYear);
  year.textContent = thisYear;
}

// * Solution 2: Type Assertion
