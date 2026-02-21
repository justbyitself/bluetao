// Single source of truth for slots.
// Each entry: [name, defer, description?]
// - defer: number of args before data (0 = no defer)
// - description: optional Symbol description for debugging

export const slots = [
  ['map',            1],
  ['filter',         1],
  ['reduce',         2],
  ['find',           1],
  ['pipeline',       1],
  ['match'],
  ['toIterable'],
  ['getType'],
  ['empty'],
  ['fromIterableTo'],
  ['add'],
  ['sub'],
  ['mult'],
  ['div'],
  ['isEven'],
  ['isOdd'],
  ['isZero'],
  ['isPositive'],
  ['isNegative'],
  ['max'],
  ['min'],
  ['mod'],
  ['quotient'],
  ['abs'],
  ['isEqualTo'],
  ['isGreaterThan'],
  ['isLesserThan'],
  ['isGreaterThanOrEqualTo'],
  ['isLesserThanOrEqualTo'],
  ['camelToKebab'],
  ['toUpper'],
  ['isUpper'],
  ['trim']
]