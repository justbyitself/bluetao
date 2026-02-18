import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts"
import { pipeline, map, filter } from "../src/index.js"

Deno.test("pipeline - transforms array and returns array", () => {
  const result = pipeline([map(x => x * 2)])([1, 2, 3])
  assertEquals(result, [2, 4, 6])
})

Deno.test("pipeline - transforms string and returns string", () => {
  const result = pipeline([map(c => c.toUpperCase())])("abc")
  assertEquals(result, "ABC")
})

Deno.test("pipeline - transforms set and returns set", () => {
  const result = pipeline([map(x => x * 2)])(new Set([1, 2, 3]))
  assertEquals(result, new Set([2, 4, 6]))
})

Deno.test("pipeline - can compose multiple transformations", () => {
  const result = pipeline([
    map(x => x * 2),
    filter(x => x > 4)
  ])([1, 2, 3, 4])
  assertEquals(result, [6, 8])
})

Deno.test("pipeline - preserves original type through transformations", () => {
  const result = pipeline([
    map(x => x * 2),
    filter(x => x > 2)
  ])(new Set([1, 2, 3]))
  assertEquals(result, new Set([4, 6]))
})
