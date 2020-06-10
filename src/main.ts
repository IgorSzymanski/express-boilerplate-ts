import { app } from './app'

export const server = app().then((app) =>
  app.listen(app.get('port'), () => {
    // eslint-disable-next-line no-console
    console.info(
      '\t\tApp is running at http://localhost:%d in %s mode',
      app.get('port'),
      app.get('env')
    )
    // eslint-disable-next-line no-console
    console.info('\t\tPress CTRL-C to stop\n')
  })
)
