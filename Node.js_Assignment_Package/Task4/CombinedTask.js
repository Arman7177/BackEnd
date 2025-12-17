const path = require('path');
const fs = require('fs');

let jsonObject = {
    name: 'Arman',
    age: 25,
    isStudent: true
}

fs.writeFileSync('jsonFile.json', JSON.stringify(jsonObject, null, 2));

let inputPath = 'jsonFile.json';
let fullPath = path.resolve(inputPath);

let jsonFile = JSON.parse(fs.readFileSync('jsonFile.json', 'utf8'));
console.log(jsonFile);      // { name: 'Arman', age: 25, isStudent: true }


jsonFile.timestamp = new Date().toString();
let updatedJsonText = JSON.stringify(jsonFile, null, 2)
fs.writeFileSync('jsonFile.json', updatedJsonText);

console.log('Full Path ->', fullPath);               // /Users/picsartacademy/Arman/Node.js_Assignment_Package/Task5/jsonFile.json
console.log('Directory ->', path.dirname(fullPath)); // /Users/picsartacademy/Arman/Node.js_Assignment_Package/Task5
console.log('Base Name ->', path.basename(fullPath));// jsonFile.json
console.log('Extension ->', path.extname(fullPath)); // .json

let parsed = path.parse(fullPath);
console.log('Parsed Path ->', parsed);
/*
Parsed Path -> {
  root: '/',
  dir: '/Users/picsartacademy/Arman/Node.js_Assignment_Package/Task5',
  base: 'jsonFile.json',
  ext: '.json',
  name: 'jsonFile'
}
*/


let outputDir = path.join(parsed.dir, 'output');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

let outputPath = path.join(outputDir, parsed.base);

fs.writeFileSync(outputPath, updatedJsonText, 'utf8');

console.log(outputPath); // /Users/picsartacademy/Arman/Node.js_Assignment_Package/Task5/output/jsonFile.json

let buffer = Buffer.from(updatedJsonText,'utf8');
console.log(buffer.toString());
/*
{
  "name": "Arman",
  "age": 25,
  "isStudent": true,
  "timestamp": "Thu Dec 04 2025 18:50:20 GMT+0400 (Armenia Standard Time)"
}
*/

console.log(buffer.toString('hex'));
/*
7b0a2020226e616d65223a202241726d616e222c0a202022616765223a
2032352c0a202022697353747564656e74223a20747275652c0a202022
74696d657374616d70223a202254687520446563203034203230323520
31383a35303a323020474d542b30343030202841726d656e6961205374
616e646172642054696d6529220a7d
*/

let restoreText = buffer.toString('utf8');

console.log(restoreText);
/*
{
  "name": "Arman",
  "age": 25,
  "isStudent": true,
  "timestamp": "Thu Dec 04 2025 18:50:20 GMT+0400 (Armenia Standard Time)"
}
*/


