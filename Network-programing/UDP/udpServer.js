const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message',( msg, rinfo) => {
    console.log(`Message: ${msg} from ${rinfo.address}:${rinfo.port}`);
})

server.bind(4000,() => {
    console.log('Server is running on 4000 port');
})