import toRestartable from './toRestartable.js'

export default iterable => fn => toRestartable(function* () {
  for (const value of iterable) {
    yield fn(value)
  }
})