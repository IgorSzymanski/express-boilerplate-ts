// Wallet module.

interface Wallet1 {
  readonly email: string
  readonly points: Points[]
}

type TransferPayload = {
  source: Wallet
  destination: Wallet
}

/**
 * O represents positive pathway. E represents error.
 */
type Result<O, E extends Error> = O | E

const create = (email: string): Wallet => ({
  email,
  points: [],
})

const addPoints = (points: Points) => (wallet: Wallet): Wallet => ({
  ...wallet,
  points: [...wallet.points, points],
})

// const transfer = (points: number) => (source: Wallet) => (destination: Wallet): TransferPayload  =>
