import { defineTrait } from 'morphity'
import container from '@container'
import * as slots from '@slots'
import { identity } from '@functions'

export default defineTrait({
  provides: [[slots.getType, identity]]
})(container)
