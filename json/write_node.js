const fs = require('fs');

const object = {
    "numero": 12,
    "array": [1, 2, 3],
    "string": "hello"
}

let object_json = JSON.stringify(object)

// https://nodejs.dev/en/learn/writing-files-with-nodejs/

try {
    fs.writeFileSync('test.json', object_json);
    // file written successfully
} catch (err) {
    console.error(err);
}