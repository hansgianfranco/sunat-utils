import test from "node:test";
import assert from "node:assert";

import { isValidRUC, isValidDNI, isValidCE } from "../dist/index.js";

test("valid RUC", () => {
  assert.equal(isValidRUC("20100070970"), true);
});

test("invalid RUC", () => {
  assert.equal(isValidRUC("12345678901"), false);
});

test("valid DNI", () => {
  assert.equal(isValidDNI("12345678"), true);
});

test("invalid DNI", () => {
  assert.equal(isValidDNI("1234"), false);
});

test("valid CE", () => {
  assert.equal(isValidCE("ABC123456"), true);
});

test("invalid CE", () => {
  assert.equal(isValidCE("123"), false);
});