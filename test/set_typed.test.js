import { assertEquals } from  "assert"

import { types, getType, match } from "@bluetao"

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
