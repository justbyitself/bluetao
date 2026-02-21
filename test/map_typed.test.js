import { assertEquals } from  "assert"

import { types, getType, match } from "@bluetao"

Deno.test("getType - returns map type for Maps", () => {
  assertEquals(getType(new Map([['a', 1], ['b', 2]])), types.map)
})

Deno.test("getType - returns map type for empty Map", () => {
  assertEquals(getType(new Map()), types.map)
})

Deno.test("is - validates Maps using getType", () => {
  assertEquals(match(types.map)(new Map([['a', 1]])), true)
  assertEquals(match(types.map)("hello"), false)
  assertEquals(match(types.map)([1, 2, 3]), false)
  assertEquals(match(types.map)(new Set()), false)
  assertEquals(match(types.map)({a: 1}), false)
})
