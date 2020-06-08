import { right, left, Either, mapLeft } from 'fp-ts/lib/Either'
export { map, chain, fold, flatten } from 'fp-ts/lib/Either'
export { pipe } from 'fp-ts/lib/pipeable'

// Result is alias for Either
export type Result<O> = Either<Error, O>

export const ok = right
export const error = (message: string) => left(Error(message))
export const mapError = mapLeft
