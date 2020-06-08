// Wallet module.

import { makeEmail, email } from './Email'
import { map, flow } from '../Result'
import { Points } from './Points'

export interface Wallet {
  readonly email: email
  readonly points: Points[]
}

const wallet = (email: email): Wallet => ({ email, points: [] })

export const makeWallet = flow(makeEmail, map(wallet))

export const addPoints = (points: Points) => (wallet: Wallet): Wallet => ({
  ...wallet,
  points: [...wallet.points, points],
})
