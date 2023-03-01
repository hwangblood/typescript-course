let myName = "hwangblood"; // Implicit string
let myEmail: string = "hwangblood@gmail.com"; // Explicit string

let school: string = "neusoft";
school = "neusoft university";
// school = 100; // ! can't assign 'int' to  'string'

let meaningOfLife: number;
let isLoading: boolean;

meaningOfLife = 10.9;
isLoading = true;
isLoading = false;
// isLoading = 123; // ! Type 'number' is not assignable to type 'boolean'.

let album: any;
album = 123;
album = "good";
album = true;

// ! Parameter 'a' and 'b' implicitly has an 'any' type.
const sum = (a: number, b: number) => {
  return a + b; // * TS infer to return a 'number' type
};
const concat = (a: number, b: string) => {
  return a + b; // * TS infer to return a 'string' type
};

let firstName: string | number;
firstName = "chengdu";
firstName = 6666;
// firstName = false; // ! Type 'boolean' is not assignable to type 'string | number'.

let lastName: string | number | boolean;
lastName = "sichuan";
lastName = 123;
lastName = true;

// check inference to see re1 should be 'RegExp' type
let re1 = /\w+/g;
let re2: RegExp = /d(b+)d/g;
