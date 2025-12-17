const net = require("net");
const readline = require("readline");

const client = net.createConnection(4000, () => {
    console.log("Connected to chat server\n");
});

client.on("data", (data) => {
    console.log(data.toString());
});

const rl = readline.createInterface({
    input: process.stdin
});

rl.on("line", (input) => {
    client.write(input + "\n");
});
