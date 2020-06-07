interface Points<T extends string = string> {
  readonly type: T
  readonly amount: number
  readonly toNumber: () => number
}
