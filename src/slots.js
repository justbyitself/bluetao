import { addSlot } from 'morphity'

import container from '@container'

export const empty = addSlot(container)
export const fromIterableTo = addSlot(container)
export const getType = addSlot(container)
export const toIterable = addSlot(container)
export const map = addSlot(container)
export const filter = addSlot(container)
export const reduce = addSlot(container)
export const find = addSlot(container)
export const match = addSlot(container)
export const pipeline = addSlot(container)