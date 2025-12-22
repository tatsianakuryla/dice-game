import type { RoundInput, RoundOutcome } from '@/src/dice/dice.types';

import { DICE_GAME_CONFIG } from '@/src/dice/dice.config';
import { ComparisonDirection, RoundResultStatus } from '@/src/dice/dice.types';
import {
  DefaultRandomIntegerGenerator,
  type RandomIntegerGenerator,
} from '@/src/shared/random/randomIntegerGenerator';

export class DiceGameService {
  constructor(
    private readonly randomIntegerGenerator: RandomIntegerGenerator = new DefaultRandomIntegerGenerator(),
  ) {}

  private evaluateRoundStatus(roundInput: RoundInput, rolledValue: number): RoundResultStatus {
    const isWin =
      roundInput.condition === ComparisonDirection.Under
        ? rolledValue < roundInput.threshold
        : rolledValue > roundInput.threshold;

    return isWin ? RoundResultStatus.Win : RoundResultStatus.Lose;
  }

  public playRound(roundInput: RoundInput): RoundOutcome {
    const rolledValue = this.randomIntegerGenerator.generateInclusive(
      DICE_GAME_CONFIG.minimumRollValue,
      DICE_GAME_CONFIG.maximumRollValue,
    );

    return {
      roundInput,
      rolledValue,
      result: this.evaluateRoundStatus(roundInput, rolledValue),
      timestampIso: new Date().toISOString(),
    };
  }
}
