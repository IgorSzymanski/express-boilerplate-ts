import { map, flow } from '../../Result'
import { Points } from '../Points'
import { unsignedIntegerValidator } from '../validators/NumberValidators'

export interface SimplePoints extends Points<'simple'> {
  amount: number
}

// Private constructor
const simplePoints = (amount: number): SimplePoints => ({
  amount,
  type: 'simple',
  addToSum: (sum: number) => sum + amount,
})

// Smart constructor
export const makeSimplePoints = flow(unsignedIntegerValidator, map(simplePoints))
