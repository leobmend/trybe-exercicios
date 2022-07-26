import { Employee } from "./Employee";

export default class Teacher extends Employee {
  private _subject: string;
  
  constructor(
    name: string,
    bithDate: Date,
    salary: number,
    subject: string,
  ) {
    super(name, bithDate, salary);
    this._subject = subject;
  }

  get subject(): string {
    return this._subject;
  }

  set subject(newSubject: string) {
    this._subject = newSubject;
  }

}