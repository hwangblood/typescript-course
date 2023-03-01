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
