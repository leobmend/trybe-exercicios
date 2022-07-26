import Evaluation from "./Evaluation";

export default class EvaluationResult {
  constructor(private _evaluation: Evaluation, private _score: number) {
    this.score = _score;
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(newEvaluation: Evaluation) {
    this._evaluation = newEvaluation;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) throw new Error('Score must be positive');
    if (newScore > this._evaluation.score) throw new Error('Score can\'t be greater than evaluation max score');
    this._score = newScore;
  }
}