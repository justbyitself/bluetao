import { defineTrait } from 'morphity'
import container from '@container'
import * as slots from '@slots'
import type from '@type'
import { always, emptyString, stringFromIterable, isString } from '@functions'

export default defineTrait({
  provides: [
    [slots.getType, always(type)],
    [slots.empty, emptyString],
    [slots.fromIterableTo, always(stringFromIterable)],
    [slots.match, always(isString)],
  ]
})(container)
