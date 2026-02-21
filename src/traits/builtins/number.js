import { defineTrait, equalsTo } from 'morphity'
import container from '@container'
import * as s from '@slots'
import types from '@types'
import * as f from '@functions'

export default defineTrait({
  requires: s.match(types.number),
  provides: [
    [s.getType, f.always(types.number)],
    [s.match, equalsTo],
    [s.add, f.add],
    [s.sub, f.sub],
    [s.mult, f.mult],
    [s.div, f.div],
    [s.quotient, f.quotient],
    [s.mod, f.mod],
    [s.min, f.min],
    [s.max, f.max],
    [s.abs, f.abs],
    [s.isZero, equalsTo(0)],
    [s.isNegative, f.isNegative],
    [s.isPositive, f.isPositive],
    [s.isEven, f.isEven],
    [s.isOdd, f.isOdd],
    [s.isEqualTo, equalsTo],
    [s.isGreaterThan, f.isGreaterThan],
    [s.isLesserThan, f.isLesserThan],
    [s.isGreaterThanOrEqualTo, f.isGreaterThanOrEqualTo],
    [s.isLesserThanOrEqualTo, f.isLesserThanOrEqualTo],
  ]
})(container)
