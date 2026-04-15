import test from "node:test";
import assert from "node:assert";

import {
  addIGV,
  removeIGV,
  getIGVBreakdown,
  calculateDetraction
} from "../dist/index.js";

test("add IGV", () => {
  assert.equal(addIGV(100), 118);
});

test("remove IGV", () => {
  assert.equal(removeIGV(118), 100);
});

test("IGV breakdown", () => {
  const result = getIGVBreakdown(118);

  assert.equal(result.base, 100);
  assert.equal(result.igv, 18);
  assert.equal(result.total, 118);
});

test("detraction transporte", () => {
  const result = calculateDetraction(1000, "transporte");

  assert.equal(result.detraction, 40);
  assert.equal(result.net, 960);
});