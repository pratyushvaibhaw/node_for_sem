const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/MAKAUT/cse'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('MAKAUT/cse')
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.end('Not found')
    }
})
server.listen(3000,()=>{
    console.log("Server running on port number 3000")
})

const http = require('http')
const server1 = http.createServer((req,res)=>{
    if(req.url==='/heritage/cse'){
        res.writeHead(200,{'Content-type':'text/plain'})
        res.end('heritage/cse')
    }
    else{
        res.writeHead(404,{'Content-type':'plain/text'}),
        res.end("Not found")
    }
})
server1.listen(3000,()=>{console.log("Server running on port 3000")})