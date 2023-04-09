"use strict";
// * Basic Class
// * Larger Class
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
// * Visibility Modifiers
class Person {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
// * Definite Assignment Assertion Operator
class Player {
    constructor(name) {
        this.name = name;
    }
}
const p = new Player("VCL");
p.lang = "zh-CN";
console.log(p);
// * Private & Protected Examples
class Sport {
    constructor(name, count, numOfPeople) {
        this.name = name;
        this.count = count;
        this.numOfPeople = numOfPeople;
    }
    getNumOfPeople() {
        return `The number of people is ${this.numOfPeople}`;
    }
}
const basket = new Sport('basket', 2, 10);
console.log(basket);
console.log(basket.getNumOfPeople());
// ! Property 'numOfPeople' is private and only accessible within class 'Sport'.
// basket.numOfPeople;
// ! Property 'count' is protected and only accessible within class 'Sport' and its subclasses.
// basket.count;
// * Compiling & Running Code
// * Extends for Subclasses
// * Implements for Interfaces
// * Static Class Members
// * Getters & Setters
