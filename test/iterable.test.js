import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts"
import { toIterable } from "../src/index.js"

Deno.test("iterable - works with arrays", () => {
  assertEquals([...toIterable([1, 2, 3])], [1, 2, 3])
})

Deno.test("iterable - works with strings", () => {
  assertEquals([...toIterable("abc")], ['a', 'b', 'c'])
})

Deno.test("iterable - works with sets", () => {
  assertEquals([...toIterable(new Set([1, 2, 3]))], [1, 2, 3])
})

Deno.test("iterable - works with maps", () => {
  assertEquals([...toIterable(new Map([['a', 1], ['b', 2]]))], [['a', 1], ['b', 2]])
})

Deno.test("iterable - is restartable", () => {
  const iter = toIterable([1, 2, 3])
  assertEquals([...iter], [1, 2, 3])
  assertEquals([...iter], [1, 2, 3])
})