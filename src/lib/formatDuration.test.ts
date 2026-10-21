import assert from "node:assert/strict";
import { test } from "node:test";
import { formatDuration } from "./formatDuration.ts";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

test("formats zero", () => {
  assert.equal(formatDuration(0), "0d 00:00:00");
});

test("pads hours, minutes and seconds to two digits", () => {
  assert.equal(formatDuration(3 * DAY + 7 * HOUR + 5 * MINUTE + 9 * SECOND), "3d 07:05:09");
});

test("ignores partial seconds", () => {
  assert.equal(formatDuration(59 * SECOND + 999), "0d 00:00:59");
});
