import { getType } from '../slots.js'

// matchType :: typeItem -> value -> boolean
export default typeItem => value => {
  try {
    return getType(value) === typeItem
  } catch {
    return false
  }
}
