import { Person } from "./classes";

export interface IEmployee extends Person {
  _registration?: number;
  _salary: number;
  _admission: Date;
  generateRegistration(): number;
}