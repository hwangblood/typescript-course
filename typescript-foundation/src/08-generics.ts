// * What are Generics?
// https://blog.logrocket.com/using-typescript-generics-create-reusable-components/

// * Basic Example and Syntax
const stringEcho = (arg: string): string => arg;

const echo = <T>(arg: T): T => arg;

// * isObject example
// * isTrue with keyof Assertion
// * Interface with Generic example
// * Narrowing Generics with Extends
// * Multiple Type Variables & Extends with keyof
// * Class with Generics
