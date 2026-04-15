import test from "node:test";
import assert from "node:assert";

import { normalizeRUC, normalizeDNI } from "../dist/index.js";

test("normalize RUC", () => {
  assert.equal(normalizeRUC("20-12345678-9"), "20123456789");
});

test("normalize DNI", () => {
  assert.equal(normalizeDNI("1234 5678"), "12345678");
});