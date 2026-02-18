import { defineTrait } from 'morphity'
import container from '@container'
import { getType, match } from '@slots'
import types from '@types'
import { always } from '@functions'

export default defineTrait({
  requires: match(types.map),
  provides: [[getType, always(types.map)]]
})(container)
