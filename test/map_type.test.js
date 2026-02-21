import { assertEquals } from  "assert"

import { types, empty, fromIterableTo } from "@bluetao"

Deno.test("mapType - empty returns empty map", () => {
  const result = empty(types.map)
  assertEquals(result instanceof Map, true)
  assertEquals(result.size, 0)
})

Deno.test("mapType - fromIterableTo creates map from entries", () => {
  const entries = [['a', 1], ['b', 2], ['c', 3]]
  const result = fromIterableTo(types.map)(entries)
  
  assertEquals(result instanceof Map, true)
  assertEquals(result.get('a'), 1)
  assertEquals(result.get('b'), 2)
  assertEquals(result.get('c'), 3)
})

Deno.test("mapType - fromIterableTo with empty iterable", () => {
  const result = fromIterableTo(types.map)([])
  assertEquals(result instanceof Map, true)
  assertEquals(result.size, 0)
})
