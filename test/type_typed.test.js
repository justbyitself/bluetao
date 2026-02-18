import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts"

import { types, getType } from "../src/index.js"

Deno.test("getType - returns type.type for type items", () => {
  assertEquals(getType(types.array), types.type)
  assertEquals(getType(types.string), types.type)
  assertEquals(getType(types.map), types.type)
  assertEquals(getType(types.set), types.type)
  assertEquals(getType(types.pojo), types.type)
  assertEquals(getType(types.type), types.type)
})
