import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts"
// Import index.js to register all traits
import "../src/index.js"
import * as slots from "../src/slots.js"

Deno.test("slots.reduce - called directly on array", () => {
  const fn = acc => x => acc + x
  const result = slots.reduce([1, 2, 3, 4])(fn)(0)
  assertEquals(result, 10)
})

Deno.test("slots.reduce - returns a function after first call", () => {
  const afterFirstCall = slots.reduce([1, 2, 3, 4])
  assertEquals(typeof afterFirstCall, "function")
  
  const fn = acc => x => acc + x
  const afterSecondCall = afterFirstCall(fn)
  assertEquals(typeof afterSecondCall, "function")
  
  const result = afterSecondCall(0)
  assertEquals(result, 10)
})

Deno.test("slots.reduce - signature is data => fn => initialValue => result", () => {
  // This is what withArity(3) expects
  const fn = acc => x => acc + x
  const step1 = slots.reduce([1, 2, 3, 4])
  const step2 = step1(fn)
  const step3 = step2(0)
  assertEquals(step3, 10)
})
