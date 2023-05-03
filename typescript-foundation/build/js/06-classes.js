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
const basket = new Sport("basket", 2, 10);
console.log(basket);
console.log(basket.getNumOfPeople());
// ! Property 'numOfPeople' is private and only accessible within class 'Sport'.
// basket.numOfPeople;
// ! Property 'count' is protected and only accessible within class 'Sport' and its subclasses.
// basket.count;
// * Compiling & Running Code
// ! Typescript doesn't like this, but the compiled JavaScript (with --noEmitOnError flag) code also can work well.
// but it's not recommanded, don't do this
// HACK console.log(basket.count);
// * Extends for Subclasses
class SportSecond extends Sport {
    constructor(place, name, count, numOfPeople) {
        // super function must be called at the top constructor
        super(name, count, numOfPeople);
        this.place = place;
        this.place = `${place} - NeoSoft`;
    }
    getCount() {
        // access protected property in subclass
        return `count: ${this.count}`;
    }
}
const sportsecond = new SportSecond("Square", "sportsecond", 3, 100);
console.log(sportsecond);
console.log(sportsecond.getCount());
class ClassicPlayer {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is playing ${this.instrument} with ${action}`;
    }
}
const classicplayer = new ClassicPlayer("VCL", "guitar");
const message = classicplayer.play("rock");
console.log(message);
// * Static Class Members
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
console.log(`Peeps' count: ${Peeps.count}`);
const peeps = new Peeps("VCL");
console.log(peeps);
const peeps2 = new Peeps("VCL2");
console.log(peeps2);
const peeps3 = new Peeps("VCL3");
console.log(peeps3);
console.log(`Peeps' count: ${Peeps.count}`);
// * Getters & Setters
