import type { RoundOutcome } from '@/src/dice/dice.types';

import { DICE_GAME_CONFIG } from '@/src/dice/dice.config';

export class DiceGameState {
  private _gameHistory: RoundOutcome[] = [];

  public get gameHistory(): RoundOutcome[] {
    return [...this._gameHistory];
  }

  public addRound(roundOutcome: RoundOutcome): void {
    this._gameHistory = [roundOutcome, ...this._gameHistory].slice(
      0,
      DICE_GAME_CONFIG.maximumHistoryLength,
    );
  }
}
