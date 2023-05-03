"use strict";
// * What are index signatures?
// https://dmitripavlutin.com/typescript-index-signatures/
// * Why you need an index signature
/**
 * The key type of this interface is 'any'
 */
// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
//   123: 123;
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    123: 123,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transctions) => {
    let total = 0;
    for (let prop in transctions) {
        total += transctions[prop];
    }
    return total;
};
// * Index signature syntax
/**
 * all of the keys will be strings, and the value will be numbers
 *
 * The key of the index signature can only be a string, number, or symbol.
 * Other types are not allowed, such as : boolean, object, function, array, or any.
 */
// interface TransactionObj {
//   [key: string]: number;
// }
console.log(todaysNet(todaysTransactions));
// * readonly modifier
// interface TransactionObj {
//   readonly [key: string]: number;
// }
// ! can set readonly properties
// todaysTransactions.Pizza = -100;
// * Non-existing properties
console.log(todaysTransactions["Dave"]); // return undefined
const todaysTransactions2 = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 42,
};
// * Optional properties
// interface Student {
//   [key: string]: string | number | number[] | undefined;
//   name: string;
//   GPA: number;
//   classes?: number[];
// }
const student = {
    name: "Doug",
    GPA: 3.5,
    // classes: [1, 2, 3],  // * this is optional, you don't have to set it
};
for (let key in student) {
    // keyof Student is a enum of the keys of Student, such as 'name' | 'GPA' | 'classes'
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
// * Record utility type vs index signatures
