import express from 'express'
import compression from 'compression'
import { router } from './router'
import './domain-lesson'

import './domain-lesson/wallet/Wallet'

export const app = async () =>
  express()
    .set('port', process.env.PORT || 5000)
    .set('env', process.env.NODE_ENV || 'development')
    .use(compression())
    .use(router)
