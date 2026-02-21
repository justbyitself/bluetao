import { assertEquals } from  "assert"

import { type, types, getType } from "@bluetao"

Deno.test("getType - returns type.type for type items", () => {
  assertEquals(getType(types.array), type)
  assertEquals(getType(types.string), type)
  assertEquals(getType(types.map), type)
  assertEquals(getType(types.set), type)
  assertEquals(getType(types.pojo), type)
  assertEquals(getType(type), type)
})
