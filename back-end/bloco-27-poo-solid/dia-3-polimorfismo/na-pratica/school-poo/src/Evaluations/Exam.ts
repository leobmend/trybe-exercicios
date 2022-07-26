import Teacher from "../Persons/Teacher";
import Evaluation from "./Evaluation";

export default class Exam extends Evaluation {
  constructor(_score: number, _teacher: Teacher) {
    super(_score, _teacher);
    this.score = _score;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) throw new Error('Exam score must be positive')
    if (newScore > 25) throw new Error('Exam score can\'t be greater than 25'); 

    this._score = newScore;
  }
}