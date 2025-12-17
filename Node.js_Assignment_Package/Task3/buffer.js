// A) Creating Buffers

let str = 'Hello World';

const buffer = Buffer.from(str);

console.log('Buffer:', buffer);     // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>

// --------------------------------------------
//   Explanation (A):
// - A Buffer stores binary data (raw bytes: numbers 0–255).
// - It is displayed in hexadecimal because:
//   1) Hex is compact
//   2) 1 byte = 2 hex digits
//   3) It is the standard way to view raw memory
// --------------------------------------------


// B) Encoding & Decoding

console.log('UTF-8:', buffer.toString('utf8'));     // Hello World
console.log('HEX:', buffer.toString('hex'));        // 48656c6c6f20576f726c64
console.log('Base64:', buffer.toString('base64'));  // SGVsbG8gV29ybGQ=



let hexString = buffer.toString('hex');

let newBuffer = Buffer.from(hexString, 'hex');

let decodedString = newBuffer.toString('utf8');

console.log('Hex String:', hexString);            // 48656c6c6f20576f726c64
console.log('Buffer', newBuffer);                 // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
console.log('Decoded from Hex:', decodedString);  // Hello World


let buffer2 = Buffer.alloc(10);

buffer2.writeUInt8(65,0);
buffer2.writeUInt8(114,1);
buffer2.writeUInt8(109,2);
buffer2.writeUInt8(97,3);
buffer2.writeUInt8(110,4);
buffer2.writeUInt8(32,5);
buffer2.writeUInt8(87,6);
buffer2.writeUInt8(69,7);
buffer2.writeUInt8(66,8);
buffer2.writeUInt8(33,9);

console.log(buffer2);                   // <Buffer 41 72 6d 61 6e 20 57 45 42 21>
console.log(buffer2.toString('utf8'));  // Arman WEB!


