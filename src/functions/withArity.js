// withArity moves the first argument (data) to the last position
// Example: fn(data)(a)(b) becomes fn(a)(b)(data)
export default arity => fn => {
  const collectArgs = (args = []) => {
    if (args.length === arity - 1) {
      // We have all args except data, now return function that takes data
      return data => {
        // Apply data first, then apply collected args
        let result = fn(data)
        for (const arg of args) {
          result = result(arg)
        }
        return result
      }
    }
    // Still collecting args
    return arg => collectArgs([...args, arg])
  }
  return collectArgs()
}