import { it, expect } from "bun:test";
import { sleepSync } from "bun";

it("sleepSync uses milliseconds", async () => {
  const start = Date.now();
  sleepSync(5);
  const end = Date.now();
  expect(end - start).toBeGreaterThanOrEqual(5);
  expect(end - start).toBeLessThan(10);
});

it("sleepSync with no arguments throws", async () => {
  expect(() => sleepSync()).toThrow();
});

it("sleepSync with non-numbers throws", async () => {
  expect(() => sleepSync(true)).toThrow();
  expect(() => sleepSync(false)).toThrow();
  expect(() => sleepSync("hi")).toThrow();
  expect(() => sleepSync({})).toThrow();
  expect(() => sleepSync([])).toThrow();
  expect(() => sleepSync(undefined)).toThrow();
  expect(() => sleepSync(null)).toThrow();
});

it("sleepSync with negative number throws", async () => {
  expect(() => sleepSync(-10)).toThrow();
});

it("can map with sleepSync", async () => {
  [1, 2, 3].map(sleepSync);
});