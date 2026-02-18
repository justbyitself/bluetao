import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts"
// Import from index.js to ensure traits are registered
import "../src/index.js"
import * as slots from "../src/slots.js"

const arr = [1, 2, 3, 4]

Deno.test("slots.map works on array", () => {
  const result = slots.map(arr)(x => x * 2)
  assertEquals([...result], [2, 4, 6, 8])
})

Deno.test("slots.filter works on array", () => {
  const result = slots.filter(arr)(x => x > 2)
  assertEquals([...result], [3, 4])
})

Deno.test("slots.reduce works on same array", () => {
  const fn = acc => x => acc + x
  const result = slots.reduce(arr)(fn)(0)
  assertEquals(result, 10)
})
