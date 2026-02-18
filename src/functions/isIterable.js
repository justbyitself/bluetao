export default (value) => 
  value != null && typeof value[Symbol.iterator] === 'function'
