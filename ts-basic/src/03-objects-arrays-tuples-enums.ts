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
let bands: string[] = []; // * explicit 'string[]' type

testAny = ["well", 12, 44.44, true, null, -100];

bands.push("halen");
// bands.push(true); // ! Argument of type 'boolean' is not assignable to parameter of type 'string'.

// * Tuple
let myTuple: [string, number, boolean] = ["blood", 2023, true];
let mixed = ["john", 10, false]; // * Impicit '(string | number | boolean)[]' union array

// ! Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'.
// ! Target requires 3 element(s) but source may have fewer.(mixed may have only one or two elements)
// myTuple = mixed;

// ! Type '"word"' is not assignable to type 'undefined'.
// ! Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.
// myTuple[3] = "word";

// myTuple[1] = false; // ! Type 'boolean' is not assignable to type 'number'.

myTuple[1] = 20200301;

// * Objects
let myObj: object;
myObj = [];
console.log(typeof myObj); // output: object

myObj = bands;
myObj = {};
console.log(typeof myObj); // output: object

const exampleObj = {
  prop1: "blood",
  prop2: 21,
}; // * Inference '{ prop1: string; prop2: number; }' object type

// exampleObj.prop2 = true; // ! Type 'boolean' is not assignable to type 'number'.

exampleObj.prop2 = 22;

type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

// let evh: Guitarist = {
//   name: "Eddie",
//   active: true,
// }; // !Property 'albums' is missing in type '{ name: string; active: true; }' but required in type 'Guitarist'.

let evh2: Guitarist = {
  name: "Eddie",
  active: true,
  albums: [1984, 1999, "OU812"],
};

let jim = {
  name: "Jimmy",
  albums: ["I", "II", "IV"],
};

let jim2: Guitarist = {
  name: "Jimmy",
  active: false,
  albums: ["I", "II", "IV"],
};

// evh2 = jim; // ! Property 'active' is missing in type '{ name: string; albums: string[]; }' but required in type 'Guitarist'.

evh2 = jim2;

// evh2.years = 22; // ! roperty 'years' does not exist on type 'Guitarist'.
