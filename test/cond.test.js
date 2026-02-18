import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts"
import { cond, types } from "../src/index.js"

Deno.test("cond - matches first pattern", () => {
  const classify = cond([
    [x => x < 0, "negative"],
    [x => x === 0, "zero"],
    [x => x > 0, "positive"]
  ])
  
  assertEquals(classify(-5), "negative")
  assertEquals(classify(0), "zero")
  assertEquals(classify(5), "positive")
})

Deno.test("cond - works with exact values", () => {
  const describe = cond([
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [x => true, "other"]
  ])
  
  assertEquals(describe(1), "one")
  assertEquals(describe(2), "two")
  assertEquals(describe(99), "other")
})

Deno.test("cond - works with regex", () => {
  const classify = cond([
    [/^hello/, "greeting"],
    [/^bye/, "farewell"],
    [x => true, "other"]
  ])
  
  assertEquals(classify("hello world"), "greeting")
  assertEquals(classify("bye bye"), "farewell")
  assertEquals(classify("what"), "other")
})

Deno.test("cond - works with types from types.js", () => {
  const typeOf = cond([
    [types.array, "array"],
    [types.string, "string"],
    [types.map, "map"],
    [types.set, "set"],
    [types.pojo, "pojo"]
  ])
  
  assertEquals(typeOf([1, 2, 3]), "array")
  assertEquals(typeOf("hello"), "string")
  assertEquals(typeOf(new Map()), "map")
  assertEquals(typeOf(new Set()), "set")
  assertEquals(typeOf({a: 1}), "pojo")
})

Deno.test("cond - result can be a function", () => {
  const process = cond([
    [x => x < 0, x => x * -1],
    [x => x === 0, x => 0],
    [x => x > 0, x => x * 2]
  ])
  
  assertEquals(process(-5), 5)
  assertEquals(process(0), 0)
  assertEquals(process(5), 10)
})

Deno.test("cond - returns undefined if no match", () => {
  const onlyPositive = cond([
    [x => x > 0, "positive"]
  ])
  
  assertEquals(onlyPositive(-5), undefined)
})
