import { describe, expect, it } from "vitest";
import { Player } from "./Player.js";

// roll(11) -> error
// roll(5) score() -> 0 (frame incomplete)
// roll(5) roll(1) score() -> 6 (frame complete)
// roll (10) -> score 0 (strike need 1 more roll to calculate frame)

describe("Player", () => {
  describe("scores the sum of the rolls when the frame is complete", () => {
    it.each([
      [5, 0, 5],
      [6, 1, 5]
    ])("scores %i when rolls are %i and %i", (score, roll1, roll2) => {
      const player = new Player();

      player.roll(roll1);
      player.roll(roll2);

      expect(player.score()).toBe(score);
    });
  });

  describe("scores the sum of the rolls when the frame is incomplete", () => {
    it("scores 0 when only 1 roll is made", () => {
      const player = new Player();

      player.roll(5);

      expect(player.score()).toBe(0);
    });

    it("scores 0 when the first roll is a strike", () => {
      const player = new Player();

      player.roll(10);

      expect(player.score()).toBe(0);
    });

    it("scores 0 when the second roll is a spare", () => {
      const player = new Player();

      player.roll(5);
      player.roll(5);

      expect(player.score()).toBe(0);
    });
  });
});
