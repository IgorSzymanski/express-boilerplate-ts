// Wallet module.

import { makeEmail, email } from './Email'
import { Result, map, pipe } from '../Result'
import { Points } from './Points'

export interface Wallet {
  readonly email: email
  readonly points: Points[]
}

export const makeWallet = (email: string): Result<Wallet> => pipe(makeEmail(email), map(wallet))

const wallet = (email: email): Wallet => ({ email, points: [] })

export const addPoints = (points: Points) => (wallet: Wallet): Wallet => ({
  ...wallet,
  points: [...wallet.points, points],
})
