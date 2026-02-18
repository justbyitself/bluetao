import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts"
import { match, types } from "../src/index.js"

Deno.test("match - matches exact value", () => {
  const result = match(5)(5)
  assertEquals(result, true)
})

Deno.test("match - doesn't match different value", () => {
  const result = match(5)(3)
  assertEquals(result, false)
})

Deno.test("match - function acts as predicate", () => {
  const isEven = x => x % 2 === 0
  assertEquals(match(isEven)(4), true)
  assertEquals(match(isEven)(5), false)
})

Deno.test("match - regex test on string", () => {
  assertEquals(match(/^h/)("hello"), true)
  assertEquals(match(/^b/)("hello"), false)
})

Deno.test("match - string on string", () => {
  assertEquals(match("hello")("hello"), true)
  assertEquals(match("hello")("bye"), false)
})

Deno.test("match - type checking with types.js", () => {
  assertEquals(match(types.array)([1, 2, 3]), true)
  assertEquals(match(types.array)("hello"), false)
  assertEquals(match(types.string)("hello"), true)
  assertEquals(match(types.map)(new Map()), true)
  assertEquals(match(types.set)(new Set()), true)
  assertEquals(match(types.pojo)({a: 1}), true)
})

