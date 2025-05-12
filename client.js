const net = require('net')
const readline = require('readline')
const client = net.createConnection({port:3000},()=>{
    console.log("Connected to server");
})
client.on('data',(data)=>{
    console.log(data.toString());
});
client.on('end',()=>{
    console.log("Disconnected from the server");
})
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.on('line',(input)=>{
    client.write(input);
})