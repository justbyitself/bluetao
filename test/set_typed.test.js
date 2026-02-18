import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts"

import { types, getType, match } from "../src/index.js"

Deno.test("getType - returns set type for Sets", () => {
  assertEquals(getType(new Set([1, 2, 3])), types.set)
})

Deno.test("getType - returns set type for empty Set", () => {
  assertEquals(getType(new Set()), types.set)
})

Deno.test("is - validates Sets using getType", () => {
  assertEquals(match(types.set)(new Set([1, 2, 3])), true)
  assertEquals(match(types.set)("hello"), false)
  assertEquals(match(types.set)([1, 2, 3]), false)
  assertEquals(match(types.set)(new Map()), false)
  assertEquals(match(types.set)({a: 1}), false)
})
