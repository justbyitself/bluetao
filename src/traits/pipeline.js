import { defineTrait } from 'morphity'
import container from '@container'
import * as slots from '@slots'
import { pipeline } from '@functions'

export default defineTrait({
  requires: [slots.toIterable, slots.getType],
  provides: [[slots.pipeline, pipeline(slots.toIterable, slots.getType, slots.fromIterableTo)]]
})(container)
