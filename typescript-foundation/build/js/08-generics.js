"use strict";
// * What are Generics?
// https://blog.logrocket.com/using-typescript-generics-create-reusable-components/
// * Basic Example and Syntax
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
// * isObject example
const isObject = (arg) => {
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
const isTrue = (arg) => {
    // we say an empty array is false
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    // if an object have no keys, we say it is false
    if (isObject(arg) && !Object.keys(arg).length) {
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
const checkBoolValue = (arg) => {
    // we say an empty array is false
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    // if an object have no keys, we say it is false
    if (isObject(arg) && !Object.keys(arg).length) {
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
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: "Dave" }));
// console.log(processUser({ name: "Dave" })); // ! user param isn't match HasID interface
// * Multiple Type Variables & Extends with keyof
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
// * Class with Generics
