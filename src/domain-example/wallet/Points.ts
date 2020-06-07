export interface Points<T extends string = string> {
  readonly type: T
  readonly addToSum: (sum: number) => number
}

export const pointsToNumber = (points: Points) => points.addToSum(0)
export const sumPoints = (points: Points[]) =>
  points.reduce((sum, points) => points.addToSum(sum), 0)
