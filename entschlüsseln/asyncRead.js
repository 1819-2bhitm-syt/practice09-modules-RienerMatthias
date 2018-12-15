const fs = require('fs');
const filename = "todo.txt";

console.log("Entire content of " + filename + " will be read asynchronously.");
fs.readFile(filename, {encoding: "utf8"}, (err, data) => {
    if(err != null) {
        console.error(err.message);
    } else {
        console.log("Reading " + filename + " finished succesfully.")
        console.log();
        console.log(`Content of ${filename}:`);
        console.log(data);

    }

});
console.log("Meanwhile Node.js app couldn't do anaything else.");
console.log("...");