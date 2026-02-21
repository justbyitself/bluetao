import { assertEquals } from  "assert"

import { reduce } from "@bluetao"

Deno.test("reduce - called directly on array", () => {
  const fn = acc => x => acc + x
  const result = reduce(fn)(0)([1, 2, 3, 4])
  assertEquals(result, 10)
})

