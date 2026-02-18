import { apply } from "morphity"

import arrayTrait from "./traits/types/array.js"
import mapTrait from "./traits/types/map.js"
import pojoTrait from "./traits/types/pojo.js"
import setTrait from "./traits/types/set.js"
import stringTrait from "./traits/types/string.js"
import numberTrait from "./traits/types/number.js"
import functionTrait from "./traits/types/function.js"
import regexTrait from "./traits/types/regex.js"

import type from "@type"

export default {
  array: apply(arrayTrait)(Symbol('array')),
  map: apply(mapTrait)(Symbol('map')),
  pojo: apply(pojoTrait)(Symbol('pojo')),
  set: apply(setTrait)(Symbol('set')),
  string: apply(stringTrait)(Symbol('string')),
  number: apply(numberTrait)(Symbol('number')),
  function: apply(functionTrait)(Symbol('function')),
  regex: apply(regexTrait)(Symbol('regex')),
  type
}