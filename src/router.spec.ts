import request from 'supertest'
import { app } from './app'

describe('Routes', () => {
  test('Index page returns "Hello World!"', async (done) => {
    request(await app())
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.body.data).toBe('Hello World!')
        done()
      })
  })
})
