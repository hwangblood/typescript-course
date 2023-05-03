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
console.log(todaysNet(todaysTransactions));
// * readonly modifier
// * Non-existing properties
// * Required properties combined with an index signature
// * Optional properties
// * keyof Assertions
// * Record utility type vs index signatures
