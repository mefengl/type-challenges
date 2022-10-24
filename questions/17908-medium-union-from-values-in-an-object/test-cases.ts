import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<AnyMeasurementUnit, 'g' | 'kg' | 'pound' | 'cm' | 'm' | 'inch'>>,
]
