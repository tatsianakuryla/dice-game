import type {
  RoundResultStatus,
  RoundInput,
  ComparisonDirection,
  RoundOutcome,
} from '@/src/logic/logic.types';

import {
  DefaultRandomIntegerGenerator,
  type RandomIntegerGenerator,
} from '@/src/shared/randomIntegerGenerator';

export class DiceGameService {
  private readonly randomIntegerGenerator: RandomIntegerGenerator;

  constructor(
    randomIntegerGenerator: RandomIntegerGenerator = new DefaultRandomIntegerGenerator(),
  ) {
    this.randomIntegerGenerator = randomIntegerGenerator;
  }

  private getRandomValue(): number {
    return this.randomIntegerGenerator.generate();
  }

  private evaluateRoundStatus(roundInput: RoundInput, rolledValue: number): RoundResultStatus {
    const isWin =
      roundInput.condition === ComparisonDirection.Under
        ? rolledValue < roundInput.threshold
        : rolledValue > roundInput.threshold;

    return isWin ? RoundResultStatus.Win : RoundResultStatus.Lose;
  }

  public playTheGame(roundInput: RoundInput): RoundOutcome {
    const rolledValue = this.getRandomValue();

    return {
      roundInput,
      rolledValue,
      result: this.evaluateRoundStatus(roundInput, rolledValue),
      timestampIso: new Date().toISOString(),
    };
  }
}
