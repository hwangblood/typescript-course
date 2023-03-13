// * Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Teacher = {
  name?: string;
  active: boolean;
  classes: stringOrNumberArray;
};

type UserId = string | number;

// * Literal Types

let mName: "Dave";
// mName = 'wow'; // ! Type '"wow"' is not assignable to type '"Dave"'.

let uname: "Dave" | "John" | "Amy";
uname = "Dave";
uname = "Amy";

// * Basic Functions
const add = (a: number, b: number) => {
  return a + b;
};

const add2 = (a: number, b: number) => a + b;
