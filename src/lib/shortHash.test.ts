import assert from "node:assert/strict";
import { test } from "node:test";
import { shortHash } from "./shortHash.ts";

test("returns a 7-character lowercase hex string", () => {
  assert.match(shortHash("about"), /^[0-9a-f]{7}$/);
});

test("is deterministic, so section hashes never change between builds", () => {
  assert.equal(shortHash("head"), "32694bc");
  assert.equal(shortHash("about"), "b323923");
});

test("gives different inputs different hashes", () => {
  assert.notEqual(shortHash("justeg"), shortHash("whatcanieat"));
});
