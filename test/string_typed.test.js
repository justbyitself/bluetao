import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts"

import { types, getType, match } from "../src/index.js"

Deno.test("getType - returns string type for strings", () => {
  assertEquals(getType("hello world"), types.string)
})

Deno.test("getType - returns string type for empty string", () => {
  assertEquals(getType(""), types.string)
})

Deno.test("is - validates strings using getType", () => {
  assertEquals(match(types.string)("hello"), true)
  assertEquals(match(types.string)(""), true)
  assertEquals(match(types.string)(123), false)
  assertEquals(match(types.string)([1, 2, 3]), false)
  assertEquals(match(types.string)(new Map()), false)
  assertEquals(match(types.string)(new Set()), false)
  assertEquals(match(types.string)({a: 1}), false)
})
