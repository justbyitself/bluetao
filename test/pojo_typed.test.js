import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts"

import { types, getType, match } from "../src/index.js"

Deno.test("getType - returns pojo type for plain objects", () => {
  assertEquals(getType({a: 1, b: 2}), types.pojo)
})

Deno.test("getType - returns pojo type for empty object", () => {
  assertEquals(getType({}), types.pojo)
})

Deno.test("is - validates plain objects using getType", () => {
  assertEquals(match(types.pojo)({a: 1, b: 2}), true)
  assertEquals(match(types.pojo)({}), true)
  assertEquals(match(types.pojo)("hello"), false)
  assertEquals(match(types.pojo)([1, 2, 3]), false)
  assertEquals(match(types.pojo)(new Map()), false)
  assertEquals(match(types.pojo)(new Set()), false)
  assertEquals(match(types.pojo)(null), false)
})
