import { Result, error, ok, chain, flow } from '~/domain-example/Result'

export const unsignedValidator = (x: number): Result<number> =>
  x >= 0 ? ok(x) : error(`${x} is not an unsigned number.`)

export const integerValidator = (x: number): Result<number> =>
  Number.isInteger(x) ? ok(x) : error(`${x} is not an integer.`)

// Checks if number is an usigned integer. (Chains two functions).
export const unsignedIntegerValidator = flow(unsignedValidator, chain(integerValidator))
