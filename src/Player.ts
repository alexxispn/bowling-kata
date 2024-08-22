export class Player {
  private pins: number[] = [];

  roll(pins: number): void {
    this.pins.push(pins);
  }

  score(): number {
    return this.pins.reduce((previousValue, currentValue) => previousValue + currentValue);
  }
}
