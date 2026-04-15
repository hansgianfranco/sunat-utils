import test from "node:test";
import assert from "node:assert";
import {
  getRUCType,
  calculateRUCDigit,
} from "../dist/index.js";

test("RUC type empresa", () => {
  assert.strictEqual(getRUCType("20123456789"), "empresa");
});

test("RUC type persona natural", () => {
  assert.strictEqual(getRUCType("10123456789"), "persona_natural");
});

test("calculate RUC digit", () => {
  const digit = calculateRUCDigit("2012345678");
  assert.strictEqual(typeof digit, "number");
});

test("calculateRUCDigit throws on invalid input", () => {
  assert.throws(() => calculateRUCDigit("123"), Error);
});