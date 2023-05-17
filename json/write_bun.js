
// Creates a Json file using the Bun API

const object = {
    "numero": 12,
    "array": [1, 2, 3],
    "string": "hello"
}

let object_json = JSON.stringify(object)
await Bun.write("test.json", object_json);