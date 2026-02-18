import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts"

import { types, getType, match } from "../src/index.js"

Deno.test("getType - returns array type for arrays", () => {
  assertEquals(getType([1, 2, 3]), types.array)
})

Deno.test("getType - returns array type for empty array", () => {
  assertEquals(getType([]), types.array)
})

Deno.test("is - validates arrays using getType", () => {
  assertEquals(match(types.array)([1, 2, 3]), true)
  assertEquals(match(types.array)("hello"), false)
  assertEquals(match(types.array)(new Set()), false)
})