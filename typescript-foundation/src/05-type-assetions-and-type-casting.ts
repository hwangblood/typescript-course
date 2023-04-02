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
// Be careful! TS sees no error - but a string is returned
let myVal2: number = addOrConcat(2, 3, "concat") as number;
console.log({ myVal2 }); // {myVal2: '23'}

// * Double Casting and the unknown type
// * DOM Selection Types
// * Non-Null Assertions
// * Angle Brackets and the DOM
// * Student Challenge
// * Solution 1: Beginners
// * Solution 2: Type Assertion
