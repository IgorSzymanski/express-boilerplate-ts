import { app } from './app'

const server = app().then((app) =>
  app.listen(app.get('port'), () => {
    console.info(
      '\t\tApp is running at http://localhost:%d in %s mode',
      app.get('port'),
      app.get('env')
    )
    console.info('\t\tPress CTRL-C to stop\n')
  })
)

export default server
