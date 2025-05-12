const net = require('net');
let clients = [];
let clientId = 0;

const server = net.createServer((socket) => {
    socket.id = ++clientId;
    clients.push(socket);

    socket.write(`Welcome! You are Client${socket.id}\n`);
    broadcast(`Client${socket.id} has connected.\n`, socket);

    socket.on('data', (data) => {
        broadcast(`Client${socket.id} says: ${data}`, socket);
    });

    socket.on('end', () => {
        clients = clients.filter(c => c !== socket); // removes the disconnected client by keeping only those whoose clients who are not equal to the current socket
        broadcast(`Client${socket.id} has disconnected.\n`, socket);
    });

    socket.on('error', (err) => {
        console.error(`Client${socket.id} error:`, err.message);
    });
});

function broadcast(message, sender) {
    clients.forEach(client => {
        if (client !== sender) {
            client.write(message);
        }
    });
}

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
