import { assertEquals } from "assert"
import {
  abs,
  isEqualTo,
  isGreaterThan,
  isLesserThan,
  isGreaterThanOrEqualTo,
  isLesserThanOrEqualTo,
} from "@bluetao"

Deno.test("number - abs", () => {
  assertEquals(abs(-5), 5)
  assertEquals(abs(5), 5)
  assertEquals(abs(0), 0)
})

Deno.test("number - isEqualTo", () => {
  assertEquals(isEqualTo(5)(5), true)
  assertEquals(isEqualTo(5)(3), false)
  assertEquals(isEqualTo(0)(0), true)
})

Deno.test("number - isGreaterThan", () => {
  assertEquals(isGreaterThan(5)(3), true)
  assertEquals(isGreaterThan(3)(5), false)
  assertEquals(isGreaterThan(5)(5), false)
})

Deno.test("number - isLesserThan", () => {
  assertEquals(isLesserThan(3)(5), true)
  assertEquals(isLesserThan(5)(3), false)
  assertEquals(isLesserThan(5)(5), false)
})

Deno.test("number - isGreaterThanOrEqualTo", () => {
  assertEquals(isGreaterThanOrEqualTo(5)(3), true)
  assertEquals(isGreaterThanOrEqualTo(3)(5), false)
  assertEquals(isGreaterThanOrEqualTo(5)(5), true)
})

Deno.test("number - isLesserThanOrEqualTo", () => {
  assertEquals(isLesserThanOrEqualTo(3)(5), true)
  assertEquals(isLesserThanOrEqualTo(5)(3), false)
  assertEquals(isLesserThanOrEqualTo(5)(5), true)
})
