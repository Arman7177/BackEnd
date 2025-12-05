const path = require('path')


console.log('Directory ->', __dirname);                   // /Users/picsartacademy/Arman/Node.js_Assignment_Package
console.log("File ->", __filename);                       // /Users/picsartacademy/Arman/Node.js_Assignment_Package/index.js
console.log('Base Name ->', path.basename(__filename));   // index.js
console.log('Folder Name ->', path.basename(__dirname));  // Node.js_Assignment_Package
console.log('Extension ->', path.extname(__filename));    // .js

let file1 = path.join('src','utils','data.json');         
let file2 = path.resolve('src','utils','data.json');      
let file3 = path.basename('/src/utils/data.json');        

console.log('Joined Path ->', file1);             // src/utils/data.json
console.log("Resolved Path ->", file2);           // /Users/picsartacademy/Arman/Node.js_Assignment_Package/src/utils/data.json
console.log("Basename from path ->", file3);      // data.json


let script = '//src/./utils//smth/../data.json';
let parsed = path.parse(script)
let normalized = path.normalize(script)
let formated = path.format(parsed);


console.log('Normalized Path ->',normalized);   // /src/utils/data.json
console.log('Formated Path ->',formated);       // //src/./utils//smth/../data.json
console.log('Parsed path->',parsed);
/*
    Parsed path-> {
        root: '/',
        dir: '//src/./utils//smth/..',
        base: 'data.json',
        ext: '.json',
        name: 'data'
    }
*/            