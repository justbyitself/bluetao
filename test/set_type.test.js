import { assertEquals } from  "assert"

import { types, empty, fromIterableTo } from "@bluetao"

Deno.test("setType - empty returns empty set", () => {
  const result = empty(types.set)
  assertEquals(result instanceof Set, true)
  assertEquals(result.size, 0)
})

Deno.test("setType - fromIterableTo creates set from iterable", () => {
  const arr = [1, 2, 3, 2, 1]
  const result = fromIterableTo(types.set)(arr)
  
  assertEquals(result instanceof Set, true)
  assertEquals(result.size, 3)
  assertEquals(result.has(1), true)
  assertEquals(result.has(2), true)
  assertEquals(result.has(3), true)
})

Deno.test("setType - fromIterableTo deduplicates", () => {
  const result = fromIterableTo(types.set)(['a', 'b', 'a', 'c', 'b'])
  assertEquals(result.size, 3)
})
