import { assertEquals } from  "assert"

import { types, empty, fromIterableTo } from "@bluetao"

Deno.test("arrayType - empty returns empty array", () => {
  const result = empty(types.array)
  assertEquals(Array.isArray(result), true)
  assertEquals(result.length, 0)
})

Deno.test("arrayType - fromIterableTo creates array from iterable", () => {
  const set = new Set([1, 2, 3])
  const result = fromIterableTo(types.array)(set)
  
  assertEquals(Array.isArray(result), true)
  assertEquals(result, [1, 2, 3])
})

Deno.test("arrayType - fromIterableTo with string", () => {
  const result = fromIterableTo(types.array)("abc")
  assertEquals(result, ['a', 'b', 'c'])
})
