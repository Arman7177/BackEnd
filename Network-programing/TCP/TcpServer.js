const { Socket } = require("dgram");
const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        socket.write('Server Received: ' + data);
    });

    socket.on('end', ()=> {
        console.log('Connection ended');
    })
})

server.listen(4000, () => {
    console.log('TCP server is running on 4000 port')
})