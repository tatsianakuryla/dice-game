import type { RoundInput, RoundOutcome } from '@/src/dice/dice.types';

import { DICE_GAME_CONFIG } from '@/src/dice/dice.config';
import { ComparisonDirection } from '@/src/dice/dice.types';
import {
  DefaultRandomIntegerGenerator,
  type RandomIntegerGenerator,
} from '@/src/shared/random/randomIntegerGenerator';

export class DiceGameService {
  constructor(
    private readonly randomIntegerGenerator: RandomIntegerGenerator = new DefaultRandomIntegerGenerator(),
  ) {}

  private evaluateRoundStatus(roundInput: RoundInput, rolledValue: number): boolean {
    return roundInput.condition === ComparisonDirection.Under
      ? rolledValue < roundInput.threshold
      : rolledValue > roundInput.threshold;
  }

  public playRound(roundInput: RoundInput): RoundOutcome {
    const rolledValue = this.randomIntegerGenerator.generateInclusive(
      DICE_GAME_CONFIG.minimumValue,
      DICE_GAME_CONFIG.maximumValue,
    );

    return {
      roundInput,
      rolledValue,
      result: this.evaluateRoundStatus(roundInput, rolledValue),
      timestamp: new Date(),
    };
  }
}
