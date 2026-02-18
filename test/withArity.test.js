import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts"
import withArity from "../src/functions/withArity.js"

Deno.test("withArity(2) - converts data-first to data-last", () => {
  // data-first: data => fn => result
  const dataFirst = data => fn => `${data}-${fn}`
  
  // data-last: fn => data => result
  const dataLast = withArity(2)(dataFirst)
  
  const result = dataLast("ARG")("DATA")
  assertEquals(result, "DATA-ARG")
})

Deno.test("withArity(3) - converts data-first to data-last with 2 args", () => {
  // data-first: data => a => b => result
  const dataFirst = data => a => b => `${data}-${a}-${b}`
  
  // data-last: a => b => data => result
  const dataLast = withArity(3)(dataFirst)
  
  const result = dataLast("A")("B")("DATA")
  assertEquals(result, "DATA-A-B")
})

Deno.test("withArity(4) - converts data-first to data-last with 3 args", () => {
  // data-first: data => a => b => c => result
  const dataFirst = data => a => b => c => `${data}-${a}-${b}-${c}`
  
  // data-last: a => b => c => data => result
  const dataLast = withArity(4)(dataFirst)
  
  const result = dataLast("A")("B")("C")("DATA")
  assertEquals(result, "DATA-A-B-C")
})

Deno.test("withArity(3) - works with actual reduce-like function", () => {
  // Simulating reduce: iterable => fn => initialValue => result
  const reduceDataFirst = iterable => fn => initialValue => {
    let acc = initialValue
    for (const value of iterable) {
      acc = fn(acc)(value)
    }
    return acc
  }
  
  // Convert to data-last: fn => initialValue => iterable => result
  const reduceDataLast = withArity(3)(reduceDataFirst)
  
  const add = acc => x => acc + x
  const result = reduceDataLast(add)(0)([1, 2, 3, 4])
  assertEquals(result, 10)
})

Deno.test("withArity(2) - works with actual map-like function", () => {
  // Simulating map: iterable => fn => result
  const mapDataFirst = iterable => fn => {
    const result = []
    for (const value of iterable) {
      result.push(fn(value))
    }
    return result
  }
  
  // Convert to data-last: fn => iterable => result
  const mapDataLast = withArity(2)(mapDataFirst)
  
  const double = x => x * 2
  const result = mapDataLast(double)([1, 2, 3])
  assertEquals(result, [2, 4, 6])
})
