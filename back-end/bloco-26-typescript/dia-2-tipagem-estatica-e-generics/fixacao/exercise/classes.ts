enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor?: EyeColor;

  constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
    this.name  = name;
    this.birthDate  = birthDate;
    this.eyeColor  = eyeColor;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`)
  }

  walk(): void {
    console.log(`${this.name} está andando.`)
  }
}

interface Dog {
  _name: string;
  _color: string;
  _age: number;
  bark(times: number): void;
}

class Dog {
  constructor(name: string, color: string, age: number)  {
    this._name = name;
    this._color = color;
    this._age = age;
  }

  bark(times: number) {
    for (let i = 1; i <= times; i += 1) {
      console.log('Au\n');
    }
  }
}

const Skye = new Dog('Skye', 'brown and gray', 4);

Skye.bark(5);