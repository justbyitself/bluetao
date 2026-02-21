// GENERATOR SCRIPT — run with: deno task generate
import { slots } from '../src/manifest.js'
import { join, dirname, fromFileUrl } from 'https://deno.land/std@0.203.0/path/mod.ts'

const root = dirname(dirname(fromFileUrl(import.meta.url)))
const src = join(root, 'src')

const HEADER = '// GENERATED FILE — do not edit manually. Run: deno task generate\n'

// ─── Helper: read js files from a directory (sorted, excluding index.js) ─────

const readJsFiles = async (dir, { exclude = [] } = {}) => {
  const files = []
  for await (const entry of Deno.readDir(dir)) {
    if (entry.isFile && entry.name.endsWith('.js') &&
        !['index.js', ...exclude].includes(entry.name)) {
      files.push(entry.name.replace('.js', ''))
    }
  }
  return files.sort()
}

// ─── Generate src/slots.js ───────────────────────────────────────────────────

const slotsLines = [
  HEADER,
  "import { addSlotWithDescription } from 'morphity'",
  "import container from '@container'",
  '',
  ...slots.map(([name, , desc]) => {
    const description = desc ?? name
    return `export const ${name} = addSlotWithDescription('${description}')(container)`
  }),
  '',
]

await Deno.writeTextFile(join(src, 'slots.js'), slotsLines.join('\n'))
console.log('✓ src/slots.js')

// ─── Generate src/types.js ───────────────────────────────────────────────────

const typeNames = await readJsFiles(join(src, 'traits', 'types'), { exclude: ['type.js'] })

const typesLines = [
  HEADER,
  "import { apply } from 'morphity'",
  ...typeNames.map(name => `import ${name}Trait from './traits/types/${name}.js'`),
  '',
  'export default {',
  ...typeNames.map(name => `  ${name}: apply(${name}Trait)(Symbol('${name}')),`),
  '}',
  '',
]

await Deno.writeTextFile(join(src, 'types.js'), typesLines.join('\n'))
console.log('✓ src/types.js')

// ─── Generate src/index.js ───────────────────────────────────────────────────

const builtinNames = await readJsFiles(join(src, 'traits', 'builtins'))
const traitNames = await readJsFiles(join(src, 'traits'))

const deferImports = [...new Set(
  slots
    .filter(([, defer = 0]) => defer > 0)
    .map(([, defer]) => defer === 1 ? 'defer' : `defer${defer}`)
)].join(', ')

const withDefer = slots.filter(([, defer = 0]) => defer > 0)
const withoutDefer = slots.filter(([, defer = 0]) => defer === 0)

const indexLines = [
  HEADER,
  "export { default as type } from '@type'",
  '',
  "export { default as types } from '@types'",
  '',
  '// Import traits for auto-registration',
  ...builtinNames.map(name => `import './traits/builtins/${name}.js'`),
  '',
  ...traitNames.map(name => `import './traits/${name}.js'`),
  '',
  "import * as slots from '@slots'",
  `import { ${deferImports}, cond } from '@functions'`,
  '',
  '// Data-last versions',
  ...withDefer.map(([name, defer = 0]) => {
    const fn = defer === 1 ? 'defer' : `defer${defer}`
    return `export const ${name} = ${fn}(slots.${name})`
  }),
  '',
  '// Direct re-exports',
  ...withoutDefer.map(([name]) => `export const ${name} = slots.${name}`),
  '',
]

await Deno.writeTextFile(join(src, 'index.js'), indexLines.join('\n'))
console.log('✓ src/index.js')

// ─── Generate src/functions/index.js ─────────────────────────────────────────

const functionNames = await readJsFiles(join(src, 'functions'))

const functionsLines = [
  HEADER,
  ...functionNames.map(name => `export { default as ${name} } from './${name}.js'`),
  '',
]

await Deno.writeTextFile(join(src, 'functions', 'index.js'), functionsLines.join('\n'))
console.log('✓ src/functions/index.js')