import { defineTrait, equalsTo } from 'morphity'
import container from '@container'
import { getType, match } from '@slots'
import types from '@types'
import { always } from '@functions'

export default defineTrait({
  requires: match(types.number),
  provides: [
    [getType, always(types.number)],
    [match, equalsTo]
  ]
})(container)
