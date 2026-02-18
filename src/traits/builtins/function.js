import { defineTrait } from 'morphity'
import container from '@container'
import { getType, match } from '@slots'
import types from '@types'
import { always } from '@functions'
import identity from "../../functions/identity.js"

const type = types.function

export default defineTrait({
  requires: match(type),
  provides: [
    [getType, always(types)],
    [match, identity]
  ]
})(container)
