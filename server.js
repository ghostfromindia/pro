const http = require('http')
const app = require('./index')
const port = 2000
const server = http.createServer(app)

server.listen(port)