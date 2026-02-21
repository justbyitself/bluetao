export default iterable => fn => initialValue => {
  let acc = initialValue
  for (const value of iterable) {
    acc = fn(acc)(value)
  }
  return acc
}
