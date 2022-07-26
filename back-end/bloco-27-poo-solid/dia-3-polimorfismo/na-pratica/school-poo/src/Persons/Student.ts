import Evaluation from "../Evaluations/Evaluation";
import EvaluationResult from "../Evaluations/EvaluationResult";
import IEnrollable from "./IEnrollable";
import Person from "./Person";

export default class Student extends Person implements IEnrollable {
  constructor(
    name: string,
    birthDate: Date,
    private _enrollment: string = '',
    private _evaluationsResults: EvaluationResult[] = [],
  ) {
    super(name, birthDate);

    this.evaluationsResults = _evaluationsResults;
    this.enrollment = _enrollment.length ? _enrollment : this.generateEnrollment();
  }

  private getMaxScore(evaluationsResults: EvaluationResult[]) {
    if (evaluationsResults.length) {
      return evaluationsResults
        .map((evaluationRes) => evaluationRes.evaluation.score)
        .reduce((sum, score) => sum + score)
    }
    return 0;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('The student enrrolment must have at least 16 characters')
    this._enrollment = value;
  }

  get evaluationsResults(): EvaluationResult[] {
    return this._evaluationsResults;
  }

  set evaluationsResults(newEvaluationResults: EvaluationResult[]) {
    if (newEvaluationResults.length) {
      if (this.getMaxScore(newEvaluationResults) > 200) {
        throw new Error('The sum of evaluations max scores can\'t be greater than 200.');
      }
      if (newEvaluationResults.length > 8){
        throw new Error('The total number of evaluantions can\'t be greater than 8.');
      }
    }
    this._evaluationsResults = newEvaluationResults;
  }
  
  private gradesSum() {
    return this._evaluationsResults
      .map((evaluationRes: EvaluationResult) => evaluationRes.score)
      .reduce((sum, score) => sum + score);
    }

  public gradesAverage() {
    if (this.getMaxScore(this.evaluationsResults) != 200) {
      throw new Error('The sum of evaluations max scores are not 200 yet.');
    }
    return this.gradesSum() / 2;
  }

  public addEvaluationResult(evaluationResult: EvaluationResult): void {
    const newEvaluationResults = [...this.evaluationsResults, evaluationResult];

    this.evaluationsResults = newEvaluationResults;
  }

  public generateEnrollment(): string {
    return String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
  }
}