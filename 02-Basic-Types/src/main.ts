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
