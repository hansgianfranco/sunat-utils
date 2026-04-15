import test from "node:test";
import assert from "node:assert";

import { formatCurrency } from "../dist/index.js";

test("format currency PEN", () => {
  const result = formatCurrency(1200);

  assert.ok(result.includes("1,200"));
});