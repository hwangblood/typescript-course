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

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  123: 123,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transctions: TransactionObj): number => {
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

// * Required properties combined with an index signature
interface TransactionObj {
  readonly [key: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions2: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 42,
};

// * Optional properties
// * keyof Assertions
// * Record utility type vs index signatures
