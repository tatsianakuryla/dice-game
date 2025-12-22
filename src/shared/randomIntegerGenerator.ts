export interface RandomIntegerGenerator {
  generate(): number;
}

export class DefaultRandomIntegerGenerator implements RandomIntegerGenerator {
  private static readonly MIN_DICE_VALUE = 1;
  private static readonly MAX_DICE_VALUE = 100;

  public generate(): number {
    const rangeSize =
      DefaultRandomIntegerGenerator.MAX_DICE_VALUE -
      DefaultRandomIntegerGenerator.MIN_DICE_VALUE +
      1;

    return Math.floor(Math.random() * rangeSize) + DefaultRandomIntegerGenerator.MIN_DICE_VALUE;
  }
}
