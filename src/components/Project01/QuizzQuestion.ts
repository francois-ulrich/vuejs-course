export default class QuizzQuestion {
  public operandA: number;
  public operandB: number;
  public result: number;

  constructor() {
    this.operandA = Math.round(Math.random() * 30);
    this.operandB = Math.round(Math.random() * 30);
    this.result = this.operandA + this.operandB;
  }

  getText(): string {
    return `What is ${this.operandA} + ${this.operandB} ?`;
  }

  getIsAnswerCorrect(answer: number | null): boolean {
    if (answer === null) return false;

    return answer === this.operandA + this.operandB;
  }
}
