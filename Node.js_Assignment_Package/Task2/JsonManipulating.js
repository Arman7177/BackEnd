const fs = require('fs');

const jsonText = fs.readFileSync('./data.json', 'utf8');

let JSobject = JSON.parse(jsonText);

JSobject.country = 'Armenia';
JSobject.skills.push('HTML')

fs.writeFileSync('./data.json', JSON.stringify(JSobject,null,2))
 
let updatedJson = JSON.stringify(JSobject,null,2);

fs.writeFileSync('updated.json',updatedJson)

