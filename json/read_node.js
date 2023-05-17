// Read a Json file using the node API
const fs = require('fs');
//import * as fs from 'fs';
const fileContents = fs.readFileSync('test.json', 'utf8');
const jsonData = JSON.parse(fileContents);
console.log(jsonData)

