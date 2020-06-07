import v from 'validator'
import { Result, ok, error } from '../Result'

// Branded type.
export type email = string & { readonly email: unique symbol }

// Type assertion. Returns email type if input is email. If not, returns string.
export const isEmail = (input: string): input is email => v.isEmail(input)

// Smart constructor.
export const makeEmail = (input: string): Result<email> =>
  isEmail(input) ? ok(input) : error(`${input} is not a valid email!`)
