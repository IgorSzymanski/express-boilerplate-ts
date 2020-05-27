import { app } from './app'

describe('Application factory', () => {
  test('Factory returns express application instance.', async () => {
    const appInstance = await app()

    expect(appInstance).toBeInstanceOf(Object)
  })
})
