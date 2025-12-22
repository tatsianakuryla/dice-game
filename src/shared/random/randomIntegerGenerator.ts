export interface RandomIntegerGenerator {
  generateInclusive(minimumValue: number, maximumValue: number): number;
}

export class DefaultRandomIntegerGenerator implements RandomIntegerGenerator {
  public generateInclusive(minimumValue: number, maximumValue: number): number {
    const rangeSize = maximumValue - minimumValue + 1;
    return Math.floor(Math.random() * rangeSize) + minimumValue;
  }
}
