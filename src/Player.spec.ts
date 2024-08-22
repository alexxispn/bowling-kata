import { describe, expect, it } from "vitest";
import { Player } from "./Player.js";

// roll(11) -> error
// roll(5) score() -> 0 (frame incomplete)
// roll(5) roll(1) score() -> 6 (frame complete)
// roll (10) -> score 0 (strike need 1 more roll to calculate frame)

describe("Player", () => {
  it("scores 5 points", () => {
    const player = new Player();

    player.roll(5);
    player.roll(0);

    expect(player.score()).toBe(5);
  });
});
