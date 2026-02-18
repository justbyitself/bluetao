export default (value) => 
  value !== null && 
  typeof value === 'object' && 
  value.constructor === Object
