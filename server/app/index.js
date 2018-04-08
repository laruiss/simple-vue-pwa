const { createServer } = require('http')
const app = require('./app')

const port = process.env.PORT || 3500

app.set('port', port)

const server = createServer(app)

server.listen(port, () => {
  console.log('✔ Server listening on port', port)
})
