import { assertEquals } from "assert"
import {
  camelToKebab,
  isUpper,
  toUpper,
  trim,
  isEqualTo,
} from "@bluetao"

Deno.test("string - equalsTo", () => {
  assertEquals(isEqualTo("hello")("hello"), true)
  assertEquals(isEqualTo("hello")("world"), false)
  assertEquals(isEqualTo("")(""), true)
})

Deno.test("string - camelToKebab", () => {
  assertEquals(camelToKebab("camelCaseString"), "camel-case-string")
  assertEquals(camelToKebab("simpleTest"), "simple-test")
  assertEquals(camelToKebab("already-kebab"), "already-kebab")
  assertEquals(camelToKebab("withNumber123Test"), "with-number123-test")
})

Deno.test("string - toUpper", () => {
  assertEquals(toUpper("hello"), "HELLO")
  assertEquals(toUpper("Hello World"), "HELLO WORLD")
  assertEquals(toUpper("already UPPER"), "ALREADY UPPER")
  assertEquals(toUpper("123abc!"), "123ABC!")
  assertEquals(toUpper(""), "")
})

Deno.test("string - isUpper", () => {
  assertEquals(isUpper("HELLO"), true)
  assertEquals(isUpper("Hello"), false)
  assertEquals(isUpper("123"), true)
  assertEquals(isUpper(""), true)
  assertEquals(isUpper("!@#"), true)
})

Deno.test("string - trim", () => {
  assertEquals(trim("  hello  "), "hello")
  assertEquals(trim("\n\tworld\n"), "world")
  assertEquals(trim("noSpaces"), "noSpaces")
  assertEquals(trim("    "), "")
  assertEquals(trim(""), "")
})
