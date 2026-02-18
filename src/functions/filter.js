import toRestartable from './toRestartable.js'

export default iterable => pred => toRestartable(function* () {
  for (const value of iterable) {
    if (pred(value)) {
      yield value
    }
  }
})