import { assertEquals } from  "assert"

import { types, empty, fromIterableTo } from "@bluetao"

Deno.test("pojoType - empty returns empty object", () => {
  const result = empty(types.pojo)
  assertEquals(typeof result, 'object')
  assertEquals(result !== null, true)
  assertEquals(Object.keys(result).length, 0)
})

Deno.test("pojoType - fromIterableTo creates object from entries", () => {
  const entries = [['a', 1], ['b', 2], ['c', 3]]
  const result = fromIterableTo(types.pojo)(entries)
  
  assertEquals(typeof result, 'object')
  assertEquals(result.a, 1)
  assertEquals(result.b, 2)
  assertEquals(result.c, 3)
})

Deno.test("pojoType - fromIterableTo with empty iterable", () => {
  const result = fromIterableTo(types.pojo)([])
  assertEquals(typeof result, 'object')
  assertEquals(Object.keys(result).length, 0)
})
