import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts"
import { find } from "../src/index.js"

Deno.test("find - finds first matching element in array", () => {
  const result = find(x => x > 2)([1, 2, 3, 4])
  assertEquals(result, 3)
})

Deno.test("find - returns undefined when no match", () => {
  const result = find(x => x > 10)([1, 2, 3, 4])
  assertEquals(result, undefined)
})

Deno.test("find - works with strings", () => {
  const result = find(c => c === 'l')("hello")
  assertEquals(result, "l")
})

Deno.test("find - works with sets", () => {
  const result = find(x => x > 2)(new Set([1, 2, 3, 4]))
  assertEquals(result, 3)
})

Deno.test("find - returns first match, not all matches", () => {
  const result = find(x => x > 2)([1, 2, 3, 4, 5])
  assertEquals(result, 3)
})

Deno.test("find - returns undefined for empty array", () => {
  const result = find(x => x > 0)([])
  assertEquals(result, undefined)
})
