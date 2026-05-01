import test from "node:test";
import assert from "node:assert";

import { 
  isValidRUC,
  isValidDNI,
  isValidCE
} from "../dist/index.js";

test("valid RUC", () => {
  assert.strictEqual(isValidRUC("10467793549"), true);
});

test("invalid RUC checksum", () => {
  assert.strictEqual(isValidRUC("10467793540"), false);
});

test("invalid RUC prefix", () => {
  assert.strictEqual(isValidRUC("30467793549"), false);
});

test("RUC with leading zeros edge case", () => {
  assert.strictEqual(isValidRUC("00000000000"), false);
});

test("valid DNI", () => {
  assert.strictEqual(isValidDNI("12345678"), true);
});

test("invalid DNI format", () => {
  assert.strictEqual(isValidDNI("1234"), false);
});

test("invalid DNI repeated digits", () => {
  assert.strictEqual(isValidDNI("11111111"), false);
});

test("valid CE", () => {
  assert.strictEqual(isValidCE("ABC123456"), true);
});

test("valid CE only numbers", () => {
  assert.strictEqual(isValidCE("123456789"), true);
});

test("invalid CE only letters", () => {
  assert.strictEqual(isValidCE("ABCDEFGHI"), false);
});

test("invalid CE repeated", () => {
  assert.strictEqual(isValidCE("AAAAAAAAA"), false);
});

test("invalid CE short", () => {
  assert.strictEqual(isValidCE("123"), false);
});