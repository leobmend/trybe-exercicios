export class Student {
  private _name: string;
  private _registration: string;
  private _testGrades: number[];
  private _workGrades: number[];

  constructor(name: string, registration: string, testGrades: number[], workGrades: number[]) {
    this._name = name;
    this._registration = registration;
    this._testGrades = testGrades;
    this._workGrades = workGrades;
  }

  private gradesSum() {
    return this._testGrades.concat(this._workGrades).reduce((sum, grade) => sum + grade, 0);
  }

  public gradesAverage() {
    return this.gradesSum() / (this._testGrades.length + this._workGrades.length);
  }
}
