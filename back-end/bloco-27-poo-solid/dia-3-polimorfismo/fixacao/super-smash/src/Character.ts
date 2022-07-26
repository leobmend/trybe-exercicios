export default abstract class Character {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }
  
  abstract talk(): void;
  abstract specialMove(): void;
}