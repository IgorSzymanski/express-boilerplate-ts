import { Router } from 'express'

export const router = Router()
  .get('/', (_, res) => {
    res.json({ data: 'Hello World!' })
  })
  .get('*', (_, res) => {
    res.status(404).json({ message: 'Page not found!' })
  })
