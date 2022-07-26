import Teacher from "../Persons/Teacher";

export default abstract class Evaluation {
  constructor(
    protected _score: number,
    private _teacher: Teacher,
  ) { }

  get score(): number {
    return this._score;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(newTeacher: Teacher) {
    this._teacher = newTeacher;
  }
}

