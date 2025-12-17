const net = require("net");

const clients = new Set();

const server = net.createServer((socket) => {

    socket.name = "User" + Math.floor(Math.random() * 1000);
    clients.add(socket);

    socket.write(`Welcome ${socket.name}! You are connected\n`);

    for (const client of clients) {
        if (client !== socket) {
            client.write(`${socket.name} joined the chat\n`);
        }
    }

    socket.on("data", (chunk) => {
        const msg = chunk.toString().trim();
        for (const client of clients) {
            if (client !== socket) {
                client.write(`${socket.name}: ${msg}\n`);
            }
        }
    });

    socket.on("end", () => {
        clients.delete(socket);
        for (const client of clients) {
            client.write(`${socket.name} left the chat\n`);
        }
    });

    socket.on("error", () => {
        clients.delete(socket);
    });
});

server.listen(4000, () => {
    console.log("Chat Server is running on 4000 port");
});


