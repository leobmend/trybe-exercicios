import IEnrollable from "./IEnrollable";
import Person from "./Person";

export class Employee extends Person implements IEnrollable {
  private _enrollment: string;
  private _salary: number;
  private _admissionDate: Date = new Date();

  constructor(
    name: string,
    bithDate: Date,
    salary: number,
  ) {
    super(name, bithDate);
    this._salary = salary;
    this._enrollment = this.generateEnrollment()
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get salary(): number {
    return this.salary;
  }

  set salary(newSalary: number) {
    if (newSalary < 0) throw new Error('Salary must be positive');

    this._salary = newSalary;
  }
  

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(date: Date) {
    const diff = Date.now() - date.getTime();
    if (diff < 0) throw new Error('The admission date cannot be in the future')

    this._admissionDate = date;
  }

  public generateEnrollment(): string {
    return String(Math.floor(Math.random() * 1000));
  }
}