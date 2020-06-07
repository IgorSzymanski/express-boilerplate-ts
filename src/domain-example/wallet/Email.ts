import v from 'validator'
import { Result, ok, error } from '../Result'

export type email = string & { readonly email: unique symbol }

export const isEmail = (input: string): input is email => v.isEmail(input)

export const email = (input: string): Result<email> =>
  isEmail(input) ? ok(input) : error(`${input} is not a valid email!`)
