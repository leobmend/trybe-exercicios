import { Character, DbCharacter, IModel } from "./Interfaces";

export const db: DbCharacter[] = [];

export class LocalDbModel implements IModel {
  findIndexById = (id: number) => {
    const index = db.findIndex((character) => character.id === id);
    if (index < 0) throw new Error('Character not found');
    return index;
  };
  
  findAll = async (): Promise<DbCharacter[]> => {
    return db;
  }

  findById = async (id: number): Promise<DbCharacter> => {
    const index = this.findIndexById(id);
    return db[index];
  }

  update = async (id: number, character: Character): Promise<DbCharacter> => {
    const index = this.findIndexById(id);
    db[index] = { ...db[index], ...character };
    return db[index];
  }

  create = async (character: Character): Promise<DbCharacter> => {
    const newId = db.length
    db.push({ id: newId, ...character });
    return db[db.length - 1];
  }

  delete = async (id: number): Promise<boolean> => {
    const index = this.findIndexById(id);
    const deletedItem = db.splice(index, 1);
    if (deletedItem.length > 0) return true;
    return false;
  }
}

export class MockDbModel implements IModel {
  async create(character: Character) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove: 'Toad' };
  }

  async update(id: number, character: Character) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
  }

  async delete(id: number) {
    console.log('character deleted');
    return true;
  }

  async findAll() {
    return [
      { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
      { id: 2, name: 'Kirby', specialMove: 'Inhale' },
    ];
  }

  async findById(id: number) {
    return { id: 1, name: 'Mario', specialMove: 'Fireball' };
  }
}

export class CharacterService {
  constructor(readonly model: IModel) {}

  async findAll() {
    const allCharacter = await this.model.findAll();
    return ({ status: 200, data: allCharacter });
  }

  async findById(id: number) {
    let character;
    try {
      character = await this.model.findById(id);
    } catch (err: any) {
      return ({ status: 404, message: err.message })
    }
    return ({ status: 200, data: character });
  }

  async update(id: number, character: Character) {
    let oldCharacter;
    try {
      oldCharacter = await this.model.findById(id);
    } catch (err: any) {
      return ({ status: 404, message: err.message })
    }
    const updatedCharacter = await this.model.update(id, character);
    return ({ status: 200, data: updatedCharacter });  
  }

  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async delete(id: number) {
    let character;
    try {
      character = await this.model.findById(id);
    } catch (err: any) {
      return ({ status: 404, message: err.message })
    }
    const isDeleted = await this.model.delete(id);
    if (isDeleted) return ({ status: 200 });
    else return ({ status: 500, message: 'Internal error' });
  }
}