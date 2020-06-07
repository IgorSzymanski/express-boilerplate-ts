// Wallet module.

import { makeEmail, email } from './Email'
import { Result, map } from '../Result'
import { SimplePoints } from './points/SimplePoints'

export interface Wallet {
  readonly email: email
  readonly points: SimplePoints[]
}

export const makeWallet = (email: string): Result<Wallet> =>
  map((email: email) => wallet(email))(makeEmail(email))

const wallet = (email: email): Wallet => ({ email, points: [] })
