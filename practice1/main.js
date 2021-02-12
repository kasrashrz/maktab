const http = require('http')
const PORT = 8080

const req = (req,res) =>{
  res.writeHead(200)
  res.end('Hello World')
}

const server = http.createServer(req)
server.listen(PORT)