# Bluetao

🚧 Work in Progress - v0.1.0

A functional library focused on working with iterables.

## Example

```javascript
import { map, filter, pipeline } from "jsr:@justbyitself/bluetao"

// Same code works on different types
const transform = pipeline([
  filter(x => x > 2),
  map(x => x * 2)
])

transform([1, 2, 3, 4])           // [6, 8]
transform(new Set([1, 2, 3, 4]))  // Set { 6, 8 }
```

<details>
  <summary>Same example in plain JavaScript</summary>

```javascript
// Without Bluetao, you need different code for each type

// For arrays - easy
const arr = [1, 2, 3, 4]
const resultArr = arr.filter(x => x > 2).map(x => x * 2)
console.log(resultArr) // [6, 8]

// For sets - manual conversion
const set = new Set([1, 2, 3, 4])
const resultSet = new Set(
  [...set].filter(x => x > 2).map(x => x * 2)
)
console.log(resultSet) // Set { 6, 8 }
```

</details>

<details>
  <summary>Same example in plain JavaScript (imperative style)</summary>

```javascript
// Arrays
const arr = [1, 2, 3, 4]
const resultArr = []
for (const x of arr) {
  if (x > 2) resultArr.push(x * 2)
}
console.log(resultArr) // [6, 8]

// Sets
const set = new Set([1, 2, 3, 4])
const resultSet = new Set()
for (const x of set) {
  if (x > 2) resultSet.add(x * 2)
}
console.log(resultSet) // Set { 6, 8 }
```

</details>

## Motivation

### For Users (Developers)

- **Polymorphism**: Same functions work on arrays, sets, maps, strings, and more
- **Composition**: Curried, data-last functions compose naturally
- **Type preservation**: Operations return the same type they receive
- **Consistency**: Unified API across all collection types, fixing JavaScript's inconsistent built-in methods
- **Readability**: Express transformations declaratively

### For Bluetao Developers

- Implement polymorphic functions without repetitive type checks
- Leverage [Morphity](https://github.com/justbyitself/morphity), a trait-based system, to handle polymorphism cleanly

## TODO

- [ ] Improve documentation
- [ ] Add more functions
