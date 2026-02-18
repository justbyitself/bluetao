import { defineTrait } from 'morphity'
import container from '@container'
import * as slots from '@slots'
import { map, filter, reduce, find, compose } from '@functions'

const withIterable = fn => compose(fn)(slots.toIterable)

export default defineTrait({
  requires: [slots.toIterable],
  provides: [
    [slots.map, withIterable(map)],
    [slots.filter, withIterable(filter)],
    [slots.reduce, withIterable(reduce)],
    [slots.find, withIterable(find)]
  ]
})(container)
