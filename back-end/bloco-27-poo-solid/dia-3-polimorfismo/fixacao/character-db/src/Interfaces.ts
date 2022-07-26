export interface Character {
  name: string;
  specialMove: string;
}

export interface DbCharacter extends Character {
  id: number;
}

export interface IModel {
  findAll(): Promise<DbCharacter[]>;
  findById(id: number): Promise<DbCharacter>;
  update(id:number, character: Character): Promise<DbCharacter>;
  create(character: Character): Promise<DbCharacter>;
  delete(id: number): Promise<boolean>;
}