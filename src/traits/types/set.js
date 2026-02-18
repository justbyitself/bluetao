import { defineTrait } from 'morphity'
import container from '@container'
import * as slots from '@slots'
import type from '@type'
import { always, emptySet, setFromIterable, isSet } from '@functions'

export default defineTrait({
  provides: [
    [slots.getType, always(type)],
    [slots.empty, emptySet],
    [slots.fromIterableTo, always(setFromIterable)],
    [slots.match, always(isSet)],
  ]
})(container)
