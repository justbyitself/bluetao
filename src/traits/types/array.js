import { defineTrait } from "morphity"

import container from '@container'
import * as slots from '@slots'
import type from "@type"

import { always, emptyArray, arrayFromIterable, isArray } from '@functions'

export default defineTrait({
  provides: [
    [slots.getType, always(type)],
    [slots.empty, emptyArray],
    [slots.fromIterableTo, always(arrayFromIterable)],
    [slots.match, always(isArray)],
  ]
})(container)
