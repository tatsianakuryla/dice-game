import type { RoundInput, RoundOutcome } from '@/src/logic/logic.types';

import { DICE_GAME_CONFIG } from '@/src/logic/gameConfig';
import { ComparisonDirection, RoundResultStatus } from '@/src/logic/logic.types';
import {
  DefaultRandomIntegerGenerator,
  type RandomIntegerGenerator,
} from '@/src/shared/randomIntegerGenerator';

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
