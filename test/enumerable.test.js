import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts"
import { map, filter } from "../src/index.js"

Deno.test("map - transforms array elements", () => {
  const result = map(x => x * 2)([1, 2, 3])
  assertEquals([...result], [2, 4, 6])
})

Deno.test("map - returns restartable iterable", () => {
  const result = map(x => x * 2)([1, 2, 3])
  assertEquals([...result], [2, 4, 6])
  assertEquals([...result], [2, 4, 6])
})

Deno.test("filter - keeps matching elements", () => {
  const result = filter(x => x > 1)([1, 2, 3])
  assertEquals([...result], [2, 3])
})

Deno.test("filter - returns restartable iterable", () => {
  const result = filter(x => x > 1)([1, 2, 3])
  assertEquals([...result], [2, 3])
  assertEquals([...result], [2, 3])
})

Deno.test("map - works with strings", () => {
  const result = map(c => c.toUpperCase())("abc")
  assertEquals([...result], ['A', 'B', 'C'])
})

Deno.test("filter - works with sets", () => {
  const result = filter(x => x > 1)(new Set([1, 2, 3]))
  assertEquals([...result], [2, 3])
})

Deno.test("map and filter can be composed", () => {
  const result = filter(x => x > 4)(map(x => x * 2)([1, 2, 3]))
  assertEquals([...result], [6])
})