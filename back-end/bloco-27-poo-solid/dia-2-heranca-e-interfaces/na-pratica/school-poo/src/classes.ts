import { IEmployee } from "./interface";

export class Person {
  constructor(protected _name: string, private _birthDate: Date) { }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 3) throw new Error('The new name must be at least 3 characters long')

    this._name = newName;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(date: Date) {
    const now = new Date();
    if (now.getTime() - date.getTime() < 0) throw new Error('The birth date cannot be in the future')

    const timeFromBirth = now.getTime() - date.getTime();
    if (this.getYearsByTime(timeFromBirth) > 120) throw new Error('The person cannot be older than 120 years')
    
    this._birthDate = date;
  }

  public getYearsByTime(msec: number): number {
    return Math.floor(msec / 1000 / 3600 / 24 / 365);
  }
}

export class Student extends Person {
  constructor(
    name: string,
    birthDate: Date,
    private _enrollment: string = '',
    private _examesGrades: number[] = [],
    private _worksGrades: number[] = [],
  ) {
    super(name, birthDate);
  }

  get enrrolment(): string {
    return this._enrollment;
  }

  set enrrolment(value: string) {
    if (value.length < 16) throw new Error('The student enrrolment must have at least 16 characters')
    this._enrollment = value;
  }

  get examesGrades(): number[] {
    return this._examesGrades;
  }

  set examesGrades(grades: number[]) {
    if (grades.length > 4) throw new Error('Cannot exist more than 4 exames grades')
    this._examesGrades = [...grades]
  }
  
  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(grades: number[]) {
    if (grades.length > 2) throw new Error('Cannot exist more than 2 works grades')
    this._worksGrades = [...grades]
  }
  
  private gradesSum() {
    return this._examesGrades.concat(this._worksGrades).reduce((sum, grade) => sum + grade, 0);
  }

  public gradesAverage() {
    return this.gradesSum() / (this._examesGrades.length + this._worksGrades.length);
  }

  public generateEnrollment(): string {
    return String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
  }
}

export class Employee extends Person implements IEmployee {
  constructor(
    name: string,
    bithDate: Date,
    public _salary: number,
    public _admission: Date = new Date(),
    public _registration: number = 0,
  ) {
    super(name, bithDate);
  }

  get registration(): number {
    return this._registration;
  }

  set registration(value: number) {
    this._registration = value;
  }

  public generateRegistration(): number {
    return Math.floor(Math.random() * 1000);
  }
}
