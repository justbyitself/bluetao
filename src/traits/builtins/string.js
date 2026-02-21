import { defineTrait, equalsTo } from 'morphity'
import container from '@container'
import * as s from '@slots'
import types from '@types'
import * as f from '@functions'

const type = types.string

export default defineTrait({
  requires: s.match(type),
  provides: [
    [s.getType, f.always(type)],
    [s.match, equalsTo],
    [s.camelToKebab, f.camelToKebab],
    [s.toUpper, f.toUpper],
    [s.isUpper, f.ap(equalsTo)(f.toUpper)],
    [s.trim, f.trim],
    [s.isEqualTo, equalsTo]
  ]
})(container)
