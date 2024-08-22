import { describe, expect, it } from "vitest";
import { Player } from "./Player.js";

// roll(11) -> error
// roll(5) score() -> 0 (frame incomplete)
// roll(5) roll(1) score() -> 6 (frame complete)
// roll (10) -> score 0 (strike need 1 more roll to calculate frame)

describe("Player", () => {
  it.each([
    [5, 0, 5],
    [6, 1, 5]
  ])("scores %i points", (score, roll1, roll2) => {
    const player = new Player();

    player.roll(roll1);
    player.roll(roll2);

    expect(player.score()).toBe(score);
  });
});
