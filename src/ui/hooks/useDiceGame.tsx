'use client';

import { useCallback, useRef, useState } from 'react';

import type { RoundOutcome } from '@/src/dice/dice.types';

import { ComparisonDirection } from '@/src/dice/dice.types';
import { DiceGameService } from '@/src/dice/diceGameService';
import { DiceGameState } from '@/src/ui/diceGameState/diceGameState';

interface UseDiceGameReturn {
  threshold: number;
  setThreshold: (value: number) => void;

  condition: ComparisonDirection;
  setCondition: (value: ComparisonDirection) => void;

  roundOutcome: RoundOutcome | null;
  history: RoundOutcome[];

  play: () => void;
}

export const useDiceGame = (): UseDiceGameReturn => {
  const diceGameService = useRef(new DiceGameService()).current;
  const diceGameState = useRef(new DiceGameState()).current;

  const [threshold, setThreshold] = useState<number>(20);
  const [condition, setCondition] = useState<ComparisonDirection>(ComparisonDirection.Under);
  const [roundOutcome, setRoundOutcome] = useState<RoundOutcome | null>(null);
  const [history, setHistory] = useState<RoundOutcome[]>([]);

  const play = useCallback(() => {
    const outcome = diceGameService.playRound({ threshold, condition });

    diceGameState.addRound(outcome);
    setRoundOutcome(outcome);
    setHistory(diceGameState.gameHistory);
  }, [condition, threshold, diceGameService, diceGameState]);

  return {
    threshold,
    setThreshold,

    condition,
    setCondition,

    roundOutcome,
    history,

    play,
  };
};
