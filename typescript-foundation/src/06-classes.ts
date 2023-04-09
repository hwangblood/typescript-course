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
class Player {
  lang!: string;
  constructor(public name: string) {}
}
const p = new Player("VCL");
p.lang = "zh-CN";
console.log(p);

// * Private & Protected Examples
class Sport {
  constructor(
    public name: string,
    protected count: number,
    private numOfPeople: number
  ) {}

  public getNumOfPeople (){
    return `The number of people is ${this.numOfPeople}`;
  }
}
const basket = new Sport('basket',2, 10);
console.log(basket);

console.log(basket.getNumOfPeople());
// ! Property 'numOfPeople' is private and only accessible within class 'Sport'.
// basket.numOfPeople;
// ! Property 'count' is protected and only accessible within class 'Sport' and its subclasses.
// basket.count;

// * Compiling & Running Code
// ! Typescript doesn't like this, but the compiled JavaScript (with --noEmitOnError flag) code also can work well.
// but don't do this,  it's not recommanded.
console.log(basket.count);


// * Extends for Subclasses
// * Implements for Interfaces
// * Static Class Members
// * Getters & Setters
