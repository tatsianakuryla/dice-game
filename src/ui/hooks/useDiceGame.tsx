'use client';

import { useCallback, useRef, useState, useMemo } from 'react';

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

  isAlertOpen: boolean;
  alertMessage: string;

  play: () => void;
}

export const useDiceGame = (): UseDiceGameReturn => {
  const diceGameService = useRef(new DiceGameService()).current;
  const diceGameState = useRef(new DiceGameState()).current;

  const [threshold, setThreshold] = useState<number>(20);
  const [condition, setCondition] = useState<ComparisonDirection>(ComparisonDirection.Under);
  const [roundOutcome, setRoundOutcome] = useState<RoundOutcome | null>(null);
  const [history, setHistory] = useState<RoundOutcome[]>([]);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  const play = useCallback(() => {
    const outcome = diceGameService.playRound({ threshold, condition });

    diceGameState.addRound(outcome);
    setRoundOutcome(outcome);
    setHistory(diceGameState.gameHistory);
    setIsAlertOpen(true);
  }, [condition, threshold, diceGameService, diceGameState]);

  const alertMessage = useMemo(() => {
    if (!roundOutcome) return '';

    if (roundOutcome.rolledValue > roundOutcome.roundInput.threshold)
      return 'The number was higher';
    if (roundOutcome.rolledValue < roundOutcome.roundInput.threshold) return 'The number was lower';

    return 'The number was equal';
  }, [roundOutcome]);

  return {
    threshold,
    setThreshold,

    condition,
    setCondition,

    roundOutcome,
    history,

    isAlertOpen,
    alertMessage,

    play,
  };
};
