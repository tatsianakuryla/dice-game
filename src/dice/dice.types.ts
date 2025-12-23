export enum ComparisonDirection {
  Under = 'Under',
  Over = 'Over',
}

export interface RoundInput {
  threshold: number;
  condition: ComparisonDirection;
}

export interface RoundOutcome {
  roundInput: RoundInput;
  rolledValue: number;
  result: boolean;
  timestamp: Date;
}
