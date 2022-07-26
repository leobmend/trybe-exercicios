import Character from "./Character";

export default class LongRangeCharacter extends Character {
  constructor(name: string, private bowDamage: number) { super(name); }

  talk(): void {
    console.log(`${this.name}> Tente me alcançar!`);
  }

  specialMove(): void {
    this.bowDamage *= 2;
  }
}