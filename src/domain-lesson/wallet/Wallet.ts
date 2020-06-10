import v from 'validator'
import { Either, right, left, map, fold } from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
import { flow } from 'fp-ts/lib/function'

type email = string & { readonly email: unique symbol }

// type guard
const isEmail = (input: string): input is email => v.isEmail(input)

export const makeEmail = (input: string): Either<Error, email> =>
  isEmail(input) ? right(input) : left(Error(`${input} is not email.`))

interface Points {
  amount: number
}

interface ExpiringPoints extends Points {
  expirationDate: string
}

export const points: ExpiringPoints = {
  amount: 15,
  expirationDate: Date(),
}

interface Wallet {
  readonly email: email
  readonly points: Array<Points>
}

interface WalletCreateDTO {
  readonly email: email
  readonly points: Array<Points>
}

// Constructor
const wallet = ({ email, points }: WalletCreateDTO): Wallet => ({ email, points })

// Smart constrcutor
const makeWallet = flow(
  makeEmail,
  map((email) => wallet({ email, points: [] }))
)

// Tutaj moze byc error lub Wallet
const mozePortfel = makeWallet('igor@buziaczek.pl')

// Application, dirty
// eslint-disable-next-line no-console
pipe(mozePortfel, fold(console.error.bind(console), console.log.bind(console)))
