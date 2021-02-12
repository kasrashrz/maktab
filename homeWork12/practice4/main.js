const http = require('http')
const users = re
const PORT = 8080
const routes = ["/contact","/about_us","/login","/home"]
const req = (req,res) =>{
  res.writeHead(200)
  console.log(req.url)
  for (let i = 0; i < routes.length; i++) {
    if(req.url == routes[i]){
      res.end(`this is ${routes[i]} page`)
    }
  }
}

const server = http.createServer(req)
server.listen(PORT)