import Character from './Character';

export default class MeeleCharacter extends Character {
  constructor(name: string, private swordDamage: number) { super(name); }

  talk(): void {
    console.log(`${this.name}> Você não tem a menor chance!`);
  }

  specialMove(): void {
    this.swordDamage *= 2;
  }
}