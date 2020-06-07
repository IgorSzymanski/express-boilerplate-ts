import { pipe } from 'fp-ts/lib/pipeable'
import { chain, ok, error, Result, map } from '../../Result'

export interface SimplePoints extends Points<'simple'> {}

export const isUnsigned = (x: number): Result<number> =>
  x >= 0 ? ok(x) : error(`${x} is not an unsigned number.`)
export const isInteger = (x: number): Result<number> =>
  Number.isInteger(x) ? ok(x) : error(`${x} is not an integer.`)
export const isUnsignedInteger = (x: number): Result<number> =>
  pipe(isUnsigned(x), chain(isInteger))

export const makeSimplePoints = (amount: number): Result<SimplePoints> =>
  map((amount: number) => ({ amount, type: 'simple' as const, toNumber: () => amount }))(
    isUnsignedInteger(amount)
  )
