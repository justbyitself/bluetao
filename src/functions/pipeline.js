import pipe from './pipe.js'

// pipeline :: value -> transformations -> result
// data-first: value comes first
export default (toIterable, getType, fromIterableTo) => 
  value => transformations => {
    const tipo = getType(value)
    const iterable = toIterable(value)
    const transformado = pipe(...transformations)(iterable)
    return fromIterableTo(tipo)(transformado)
  }
