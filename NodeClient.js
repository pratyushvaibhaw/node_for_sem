const net = require('net')
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const client = net.createConnection({port:3000},()=>{
    console.log("Connected to Server")
})
client.on('data',(data)=>{
    console.log(data.toString())
})
client.on('end',()=>{
    console.log('Disconnected from server')
})
rl.on('line',(input)=>{
    client.write(input)
})