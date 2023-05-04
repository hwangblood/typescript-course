// * What are Generics?
// https://blog.logrocket.com/using-typescript-generics-create-reusable-components/

// * Basic Example and Syntax
const stringEcho = (arg: string): string => arg;

const echo = <T>(arg: T): T => arg;

// * isObject example
const isObject = <T>(arg: T): boolean => {
  let obj = typeof arg === "object";

  let notArray = !Array.isArray(arg);
  let notNull = arg !== null;
  return obj && notArray && notNull;
};

console.log(isObject(true)); // boolean, sfalse
console.log(isObject("John")); // string, false
console.log(isObject([1, 2, 3])); // object but array, false
console.log(isObject({ name: "John" })); // object, true
console.log(isObject(null)); // object but null, false

// * isTrue with keyof Assertion
const isTrue = <T>(
  arg: T
): {
  arg: T;
  is: boolean;
} => {
  // we say an empty array is false
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  // if an object have no keys, we say it is false
  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

// * Interface with Generic example
interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  // we say an empty array is false
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  // if an object have no keys, we say it is false
  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

console.log(checkBoolValue(false));
console.log(checkBoolValue(0));
console.log(checkBoolValue(true));
console.log(checkBoolValue(1));
console.log(checkBoolValue("Dave"));
console.log(checkBoolValue(""));
console.log(checkBoolValue(null));
console.log(checkBoolValue(undefined));
console.log(checkBoolValue({})); // modified
console.log(checkBoolValue({ name: "Dave" }));
console.log(checkBoolValue([])); // modified
console.log(checkBoolValue([1, 2, 3]));
console.log(checkBoolValue(NaN));
console.log(checkBoolValue(-0));

// * Narrowing Generics with Extends
// * Multiple Type Variables & Extends with keyof
// * Class with Generics
