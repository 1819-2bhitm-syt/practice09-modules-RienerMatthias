const fs = require('fs');
const filename = "todo.txt";

console.log("Entire content of " + filename + " will be read synchronously.");
console.log("Reading " + filename + " finished succesfully.");
console.log("Meanwhile Node.js app couldn't do anaything else.");
console.log("");
let content = fs.readFileSync("todo.txt",{encoding: "utf-8"} );
console.log(content);