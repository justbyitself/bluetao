export { default as types } from '@types'

// Import traits for auto-registration
import './traits/builtins/array.js'
import './traits/builtins/map.js'
import './traits/builtins/number.js'
import './traits/builtins/pojo.js'
import './traits/builtins/set.js'
import './traits/builtins/string.js'
import './traits/builtins/function.js'
import './traits/builtins/regex.js'

import './traits/iterable.js'
import './traits/enumerable.js'
import './traits/pipeline.js'


import * as slots from '@slots'
import { defer, defer2, cond } from '@functions'

// Data-last versions
export const map = defer(slots.map)
export const filter = defer(slots.filter)
export const reduce = defer2(slots.reduce)
export const find = defer(slots.find)
export const match = slots.match
export const pipeline = defer(slots.pipeline)

// Functions that don't need withArity
export { cond }

// Re-export slots
export const toIterable = slots.toIterable
export const getType = slots.getType
export const empty = slots.empty
export const fromIterableTo = slots.fromIterableTo
