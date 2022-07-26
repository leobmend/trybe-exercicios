import { CharacterService, LocalDbModel, MockDbModel } from "./Classes";

const A = new CharacterService(new LocalDbModel());
A.findAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.findAll().then(console.log);

A.findById(4).then(console.log);
B.findById(4).then(console.log);
