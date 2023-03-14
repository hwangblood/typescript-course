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

// * Functions with no return value
const logMsg = (message: any): void => {
  console.log(message);
};
logMsg("Hello @hwangblood");
logMsg(`2 + 3 = ${add(2, 3)}`);
logMsg(`3.1 + 5.2 = ${add(3.1, 5.2)}`);

// * The function  keyword
let substract = function (c: number, d: number): number {
  return c - d;
};

// * Function Type ALiases
// type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

// * Function Interface
interface mathFunction {
  (a: number, b: number): number;
}

// * Optional Parameters
const addAll = (a: number, b: number, c?: number) => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// * Default Parameters
const sumAll = (a: number = 10, b: number, c: number = 0) => {
  return a + b + c;
};

logMsg(sumAll(undefined, 3));

// * Function with rest params
// rest param should always at the end of function params
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));

// * The never type
const createError = (errString: string): never => {
  throw new Error(errString);
};
// infer return never type
const infinite1 = () => {
  let i: number = 1;
  while (true) {
    i++;
  }
};
// infer return void type
const infinite2 = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (1 > 100) break;
  }
};

// * Using the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("This should never happen!");
};
