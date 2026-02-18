import * as slot from '../slots.js'

// cond :: [[pattern, result]] -> value -> result
// Tries each [pattern, result] pair until one matches
// If result is a function, calls it with value
// Returns undefined if no match

export default clauses => value => {
  for (const [pattern, result] of clauses) {
    if (slot.match(pattern)(value)) {
      return typeof result === 'function' ? result(value) : result
    }
  }
  return undefined
}
