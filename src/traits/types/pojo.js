import { defineTrait } from 'morphity'
import container from '@container'
import * as slots from '@slots'
import type from '@type'
import { always, emptyPojo, pojoFromIterable, isPojo } from '@functions'

export default defineTrait({
  provides: [
    [slots.getType, always(type)],
    [slots.empty, emptyPojo],
    [slots.fromIterableTo, always(pojoFromIterable)],
    [slots.match, always(isPojo)],
  ]
})(container)
