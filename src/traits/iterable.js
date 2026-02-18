import { defineTrait } from 'morphity'
import container from '@container'
import { toIterable } from '@slots'
import { isIterable, identity } from '@functions'

export default defineTrait({
  requires: isIterable,
  provides: [
    [toIterable, identity]
  ]
})(container)
