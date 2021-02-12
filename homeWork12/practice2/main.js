const http = require('http')
const fs = require('fs');

const PORT = 8080
var json = "";

fs.readFile('msg.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  console.log(data)
  json = data
});

const req = (req,res) =>{
  res.writeHead(200)
  res.end(json)
}

const server = http.createServer(req)
server.listen(PORT)