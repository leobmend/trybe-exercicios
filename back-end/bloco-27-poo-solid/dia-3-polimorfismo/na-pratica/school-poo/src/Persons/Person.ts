export default abstract class Person {
  constructor(protected _name: string, private _birthDate: Date) { 
    this.name = _name;
    this.birthDate = _birthDate;
  }

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

    if (Person.getAgeFromDate(date) > 120) throw new Error('The person cannot be older than 120 years')
    
    this._birthDate = date;
  }

  static getAgeFromDate(date: Date): number {
    const now = new Date();
    const timeFromBirth = now.getTime() - date.getTime();
    return Math.floor(timeFromBirth / 1000 / 3600 / 24 / 365);
  }
}