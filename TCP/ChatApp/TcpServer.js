const net = require('net');

const clients = new Map();

const server = net.createServer((socket) => {
    socket.name = 'User' + Math.floor(Math.random() * 1000);
    
    clients.set(socket.name, socket);

    socket.write(`Welcome ${socket.name}: You are connected\n`);

    for (const [name, client] of clients) {
        if (client !== socket) {
            client.write(`${socket.name} joined the chat\n`);
        }
    }

    socket.on('data', (chunk) => {
        const msg = chunk.toString().trim();
        handleMessage(socket, msg);   
    });

    socket.on('end', () => {
        clients.delete(socket.name);
        for (const [name, client] of clients) {
            client.write(`${socket.name} left the chat\n`);
        }
    });

    socket.on('error', () => {
        clients.delete(socket.name);
    });
});

function broadCast(sender, message) {
    for (const [name,client] of clients) {
        if (client !== sender) {
            client.write(`${sender.name}: ${message}\n`);
        }
    }
};

function sendPrivate (sender, targetName, message) {
    const targetSocket = clients.get(targetName);

    if (!targetSocket) {
        sender.write(`${targetName} not found\n`)
        return;
    }
    targetSocket.write(`PM from ${sender.name}: ${message}\n`)
};

function handleMessage (sender, message) {
    if (message.startsWith('@')) {
        const [firstWord, ...rest] = message.split(' ');
        const targetName = firstWord.slice(1);
        const text = rest.join(' ');

        sendPrivate(sender,targetName,text)
    } else {
        broadCast(sender,message);
    }
}
server.listen(4000, () => {
    console.log('Chat Server is running on 4000 port');
});
