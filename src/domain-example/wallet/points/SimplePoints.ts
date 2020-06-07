import { chain, ok, error, Result, map, pipe } from '../../Result'
import { Points } from '../Points'

export interface SimplePoints extends Points<'simple'> {
  amount: number
}

export const unsignedValidator = (x: number): Result<number> =>
  x >= 0 ? ok(x) : error(`${x} is not an unsigned number.`)

export const integerValidator = (x: number): Result<number> =>
  Number.isInteger(x) ? ok(x) : error(`${x} is not an integer.`)

// Checks if number is an usigned integer. (Chains two functions).
export const unsignedIntegerValidator = (x: number): Result<number> =>
  pipe(unsignedValidator(x), chain(integerValidator))

// Private constructor
const simplePoints = (amount: number): SimplePoints => ({
  amount,
  type: 'simple',
  addToSum: (sum: number) => sum + amount,
})

// Smart constructor
export const makeSimplePoints = (amount: number): Result<SimplePoints> =>
  map((amount: number) => simplePoints(amount))(unsignedIntegerValidator(amount))
