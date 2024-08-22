export class Player {
  private pins: number[] = [];

  roll(pins: number): void {
    this.pins.push(pins);
  }

  score(): number {
    if (this.pins.length <= 1) {
      return 0;
    }

    if (this.pinsFromFrame(1) === 10) {
      return 0;
    }

    return this.pins.reduce((acc, curr) => acc + curr);
  }

  private pinsFromFrame(frame: number) {
    return this.pins[frame * 2 - 2] + this.pins[frame * 2 - 1];
  }
}
