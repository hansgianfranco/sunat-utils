import test from "node:test";
import assert from "node:assert";
import {
  addIGV,
  removeIGV,
  getIGVBreakdown,
  calculateDetraction
} from "../dist/index.js";

test("add IGV", () => {
  assert.strictEqual(addIGV(100), 118);
});

test("remove IGV", () => {
  assert.strictEqual(removeIGV(118), 100);
});

test("IGV breakdown", () => {
  const result = getIGVBreakdown(118);

  assert.strictEqual(Math.round(result.net), 100);
  assert.strictEqual(Math.round(result.igv), 18);
  assert.strictEqual(result.total, 118);
});

test("detraction transporte", () => {
  const result = calculateDetraction(1000, "transporte");

  assert.strictEqual(result.detraction, 40);
  assert.strictEqual(result.net, 960);
});