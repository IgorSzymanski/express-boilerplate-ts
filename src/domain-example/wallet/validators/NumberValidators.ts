import { Result, error, ok, pipe, chain } from '~/domain-example/Result'

export const unsignedValidator = (x: number): Result<number> =>
  x >= 0 ? ok(x) : error(`${x} is not an unsigned number.`)

export const integerValidator = (x: number): Result<number> =>
  Number.isInteger(x) ? ok(x) : error(`${x} is not an integer.`)

// Checks if number is an usigned integer. (Chains two functions).
export const unsignedIntegerValidator = (x: number): Result<number> =>
  pipe(unsignedValidator(x), chain(integerValidator))
