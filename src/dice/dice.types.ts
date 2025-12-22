export enum ComparisonDirection {
  Under = 'UNDER',
  Over = 'OVER',
}

export enum RoundResultStatus {
  Win = 'WIN',
  Lose = 'LOSE',
}

export interface RoundInput {
  threshold: number;
  condition: ComparisonDirection;
}

export interface RoundOutcome {
  roundInput: RoundInput;
  rolledValue: number;
  result: RoundResultStatus;
  timestampIso: string;
}
