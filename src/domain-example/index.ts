import { makeWallet, Wallet } from './wallet/Wallet'
import { Result, fold } from './Result'

const goodWallet = makeWallet('thisis@mail.com')
const badWallet = makeWallet('thisisnotmail')

const onError = (error: Error) => console.log(error.name, error.message)
const onWallet = (wallet: Wallet) => console.log(wallet)

const printWallet = (maybeWallet: Result<Wallet>) => fold(onError, onWallet)(maybeWallet)

console.log(`\n~~~Domain Example module.~~~`)
printWallet(goodWallet)
printWallet(badWallet)
console.log(`\n\n`)
