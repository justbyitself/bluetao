import { defineTrait, equalsTo } from 'morphity'
import container from '@container'
import { getType, match } from '@slots'
import types from '@types'
import { always } from '@functions'

const type = types.string

export default defineTrait({
  requires: match(type),
  provides: [
    [getType, always(type)],
    [match, equalsTo]
  ]
})(container)
