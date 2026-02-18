import { defineTrait } from 'morphity'
import container from '@container'
import { getType, match } from '@slots'
import types from '@types'
import { always, matchRegex } from '@functions'

const type = types.regex

export default defineTrait({
  requires: match(type),
  provides: [
    [getType, always(type)],
    [match, matchRegex]
  ]
})(container)
