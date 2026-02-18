export default generator => ({
  [Symbol.iterator]: () => generator()
})