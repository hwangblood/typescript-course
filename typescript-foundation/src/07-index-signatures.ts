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
// interface Student {
//   [key: string]: string | number | number[] | undefined;
//   name: string;
//   GPA: number;
//   classes?: number[];
// }

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  // classes: [1, 2, 3],  // * this is optional, you don't have to set it
};

// console.log(student.test); // undefined

// * keyof Assertions
interface Student {
  name: string;
  GPA: number;
  classes?: number[];
}
for (let key in student) {
  // keyof Student is a enum of the keys of Student, such as 'name' | 'GPA' | 'classes'
  console.log(`${key}: ${student[key as keyof Student]}`);
}
Object.keys(student).map((key) => {
  console.log(student[key as keyof Student]);
});

// * Record utility type vs index signatures
const logStudentByKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};
logStudentByKey(student, "GPA");

// interface Incomes {
//   [key: string]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>;

const mothlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (let key in mothlyIncomes) {
  console.log(`${key}: ${mothlyIncomes[key as /* keyof Incomes */ Streams]}`);
}
