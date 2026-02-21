import { assertEquals } from  "assert"

import { types, empty, fromIterableTo } from "@bluetao"

Deno.test("stringType - empty returns empty string", () => {
  const result = empty(types.string)
  assertEquals(typeof result, 'string')
  assertEquals(result, '')
})

Deno.test("stringType - fromIterableTo creates string from iterable", () => {
  const arr = ['h', 'e', 'l', 'l', 'o']
  const result = fromIterableTo(types.string)(arr)
  
  assertEquals(typeof result, 'string')
  assertEquals(result, 'hello')
})

Deno.test("stringType - fromIterableTo with array of chars", () => {
  const result = fromIterableTo(types.string)(['a', 'b', 'c'])
  assertEquals(result, 'abc')
})
