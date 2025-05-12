const net = require('net')
let clients =[]
let clientId = 0
const server = net.createServer((socket)=>{
    socket.id = ++clientId
    clients.push(socket)
    socket.write(`Welcome! You are client${socket.id}\n`)
     broadcast(`Client${socket.id} has connected.\n`, socket)
    socket.on('data',(data)=>{
        broadcast(`Client${socket.id} says ${data}\n`,socket)
    })
    socket.on('end',()=>{
        clients = clients.filter(c=>c!==socket)
        broadcast(`Client${socket.id} has disconnected \n`,socket)

    })
     socket.on('error', (err) => {
        console.error(`Client${socket.id} error:`, err.message);
    });
})

function broadcast(message,sender){
    clients.forEach((client)=>{
        if(client!==sender) client.write(message)
    })
}
server.listen(5000,()=>{
    console.log("Server running on port 5000")
})