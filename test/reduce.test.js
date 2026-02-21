import { assertEquals } from  "assert"
import { reduce } from "@bluetao"

Deno.test("reduce - sums array of numbers", () => {
  const result = reduce(acc => x => acc + x)(0)([1, 2, 3, 4])
  assertEquals(result, 10)
})

Deno.test("reduce - concatenates strings", () => {
  const result = reduce(acc => x => acc + x)("")("hello")
  assertEquals(result, "hello")
})

Deno.test("reduce - works with sets", () => {
  const result = reduce(acc => x => acc + x)(0)(new Set([1, 2, 3]))
  assertEquals(result, 6)
})

Deno.test("reduce - builds object from entries", () => {
  const result = reduce(acc => ([k, v]) => ({ ...acc, [k]: v }))({})([
    ["a", 1],
    ["b", 2],
    ["c", 3]
  ])
  assertEquals(result, { a: 1, b: 2, c: 3 })
})

Deno.test("reduce - finds maximum", () => {
  const result = reduce(acc => x => x > acc ? x : acc)(-Infinity)([3, 1, 4, 1, 5, 9, 2])
  assertEquals(result, 9)
})

Deno.test("reduce - empty array returns initial value", () => {
  const result = reduce(acc => x => acc + x)(42)([])
  assertEquals(result, 42)
})
