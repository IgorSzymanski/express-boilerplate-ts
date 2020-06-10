import express from 'express'
import compression from 'compression'
import { router } from '~/router'

export const app = async () =>
  express()
    .set('port', process.env.PORT || 4000)
    .set('env', process.env.NODE_ENV || 'development')
    .use(compression())
    .use(router)
