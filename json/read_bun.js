// Reads a Json file using the node API

let jsonData
await Bun.file("test.json").text().then(fileContents => { jsonData = JSON.parse(fileContents) });
console.log(jsonData)

