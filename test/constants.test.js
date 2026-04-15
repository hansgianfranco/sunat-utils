import test from "node:test";
import assert from "node:assert";

import { DOCUMENT_TYPES, getDocumentName } from "../dist/index.js";

test("document types exist", () => {
  assert.equal(DOCUMENT_TYPES["01"], "Factura");
});

test("get document name", () => {
  assert.equal(getDocumentName("01"), "Factura");
});