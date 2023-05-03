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

  public getNumOfPeople() {
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
  constructor(
    public place: string,
    name: string,
    count: number,
    numOfPeople: number
  ) {
    // super function must be called at the top constructor
    super(name, count, numOfPeople);
    this.place = `${place} - NeoSoft`;
  }
  public getCount() {
    // access protected property in subclass
    return `count: ${this.count}`;
  }
}
const sportsecond = new SportSecond("Square", "sportsecond", 3, 100);
console.log(sportsecond);
console.log(sportsecond.getCount());

// * Implements for Interfaces
interface Singer {
  name: string;
  instrument: string;
  play(action: string): string;
}

class ClassicPlayer implements Singer {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} is playing ${this.instrument} with ${action}`;
  }
}

const classicplayer = new ClassicPlayer("VCL", "guitar");
const message = classicplayer.play("rock");
console.log(message);

// * Static Class Members
class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}
console.log(`Peeps' count: ${Peeps.count}`);

const peeps = new Peeps("VCL");
console.log(peeps);
const peeps2 = new Peeps("VCL2");
console.log(peeps2);
const peeps3 = new Peeps("VCL3");
console.log(peeps3);

console.log(`Peeps' count: ${Peeps.count}`);

// * Getters & Setters
class Banders {
  private dataState: any[];

  constructor() {
    this.dataState = [];
  }

  public get data(): any[] {
    return this.dataState;
  }

  public set data(value: any[]) {
    // * actually we want an array of strings
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param 'value' is not an array of strings");
  }
}
const banders = new Banders();
banders.data = ["VCL", "VCL2", "VCL3"];
console.log(`banders: ${banders.data}`);

banders.data = [...banders.data, "Led Zep"];
console.log(`banders: ${banders.data}`);

try {
  banders.data = ["Van Halen", 1234];
  console.log(`banders: ${banders.data}`);
} catch (error: Error | any) {
  console.log(`error: ${error.message}`);
}
