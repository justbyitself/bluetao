import { defineTrait } from 'morphity'
import container from '@container'
import * as slots from '@slots'
import type from '@type'
import { always, emptyMap, mapFromIterable, isMap } from '@functions'

export default defineTrait({
  provides: [
    [slots.getType, always(type)],
    [slots.empty, emptyMap],
    [slots.fromIterableTo, always(mapFromIterable)],
    [slots.match, always(isMap)],
  ]
})(container)
