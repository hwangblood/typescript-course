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
const p = new Player('VCL');
p.lang = "zh-CN";
console.log(p);
// * Private & Protected Examples
// * Compiling & Running Code
// * Extends for Subclasses
// * Implements for Interfaces
// * Static Class Members
// * Getters & Setters
