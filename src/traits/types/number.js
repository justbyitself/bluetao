import { defineTrait } from 'morphity'

import container from '@container'
import * as slots from '@slots'
import type from '@type'
import { always, isNumber } from '@functions'

export default defineTrait({
  provides: [
    [slots.getType, always(type)],
    [slots.match, always(isNumber)],
  ]
})(container)
