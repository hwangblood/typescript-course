// * Basic Class
// * Larger Class
class Coder {
  name: string;
  music: string;
  age: number;
  lang: string;

  constructor(name: string, music: string, age: number, lang: string) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

// * Visibility Modifiers
class Person {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

// * Definite Assignment Assertion Operator
// * Private & Protected Examples
// * Compiling & Running Code
// * Extends for Subclasses
// * Implements for Interfaces
// * Static Class Members
// * Getters & Setters
