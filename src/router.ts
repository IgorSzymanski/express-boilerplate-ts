import { Router } from 'express'

export const router = Router()
  .get('/', (_, response) => {
    response.json({
      data: 'Hello World!',
    })
  })
  .get('*', (_, response) => {
    response.status(404).json({
      message: 'Page not found!',
    })
  })
