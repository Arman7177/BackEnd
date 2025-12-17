let net = require('net');

const client = net.createConnection(4000, () => {
    setTimeout(() => {
        client.write('Firt Meassge')
    },1000);
    setTimeout(() => {
        client.write('Second Meassge')
    },3000);
    setTimeout(() => {
        client.write('Third Meassge')
    },5000);
    setTimeout(() => {
        client.write('Fourth Meassge')
    },7000);
})

client.on('data',(data) => {
    console.log('Server: ', data.toString())
})