// find :: iterable -> predicate -> result | undefined
// data-first: iterable comes first
export default iterable => predicate => {
  for (const value of iterable) {
    if (predicate(value)) {
      return value
    }
  }
  return undefined
}
