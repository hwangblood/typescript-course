"use strict";
// * What are Generics?
// https://blog.logrocket.com/using-typescript-generics-create-reusable-components/
// * Basic Example and Syntax
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
// * isObject example
const isObject = (arg) => {
    let obj = typeof arg === "object";
    console.log(typeof arg);
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
// * Interface with Generic example
// * Narrowing Generics with Extends
// * Multiple Type Variables & Extends with keyof
// * Class with Generics
