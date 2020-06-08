import { makeWallet, Wallet, addPoints } from './wallet/Wallet'
import { Result, fold, map, flatten, pipe } from './Result'
import { makeSimplePoints } from './wallet/points/SimplePoints'

const goodWallet = makeWallet('ThisIs@mail.com')
const badWallet = makeWallet('thisisnotmail')

const add5Points = pipe(makeSimplePoints(5), map(addPoints))
const goodWalletWith5Points = pipe(
  pipe(
    add5Points,
    map((addPoints) => pipe(goodWallet, map(addPoints)))
  ),
  flatten
)

const onError = (error: Error) => console.log(`${error.name}: `, error.message, error.stack)
const onWallet = (wallet: Wallet) => console.log(wallet)
const printWallet = (maybeWallet: Result<Wallet>) => fold(onError, onWallet)(maybeWallet)

console.log(`\n~~~Domain Example module.~~~`)
printWallet(goodWallet)
printWallet(badWallet)
printWallet(goodWalletWith5Points)
console.log(`\n\n`)
