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
