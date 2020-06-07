/**
 * TypeScript introduction.
 *
 * 1. Types.
 * 2. Generic types.
 * 3. Return types.
 * 4. Run-time type gaurds.
 * 5. Interface.
 * 6. Union types.
 * 7. Property modifies.
 */

/** */

let text = 'this is a text'
const phoneNumber: number = 123

const array: Array<number> = [1, 2, 3]
const tuple: [number, string, boolean] = [1, 'text', true]
const add2: (x: number) => number = (x) => x + 2

interface Square {
  x: number
  y: number
}

type Circle = {
  r: number
}

const square: Square = {
  x: 7,
  y: 7,
}

type Shape = Square | Circle
type Shape2 = Square & Circle

type stringOrNumber = string | number

type OptionalName = {
  id: string
  name?: string
}

const someone: OptionalName = {
  id: 'someone',
}

type Container<O> = {
  myObject: O
}

const container: Container<number> = {
  myObject: 123,
}

/**
 * Program is split into two parts: pure functional, domain layer and dirty, application layer.
 * These rules apply to the former.
 *
 *
 * 1. No if statements.
 * 2. No loops.
 * 3. Function is a single return.
 * 4. No side-effects.
 * 5. Immutability.
 * 6. No assignments in functions.
 * 7. Only functions with 0 or 1 argument.
 */

const add = (x: number) => (y: number) => x + y
