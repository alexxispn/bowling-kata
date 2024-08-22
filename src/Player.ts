export class Player {
  private pins: number[] = [];

  roll(pins: number): void {
    this.pins.push(pins);
  }

  score(): number {
    if (this.pins.length <= 1) {
      return 0;
    }

    return this.pins.reduce((previousValue, currentValue) => previousValue + currentValue);
  }
}
