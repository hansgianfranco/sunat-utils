import test from "node:test";
import assert from "node:assert";

import { getRUCType, calculateRUCDigit } from "../dist/index.js";

test("RUC type empresa", () => {
  assert.equal(getRUCType("20123456789"), "empresa");
});

test("RUC type persona natural", () => {
  assert.equal(getRUCType("10123456789"), "persona_natural");
});

test("calculate RUC digit", () => {
  const digit = calculateRUCDigit("2012345678");
  assert.equal(typeof digit, "number");
});