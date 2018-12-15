const fs = require('fs');
const filename = "todo2.txt";

let content = "- Java üben \n";
content += "- Node.js üben \n";
content += "- Gemüse einkaufen \n";

const filepath = "D:/2. Klasse/SYT/Syt Huemer/entschlüsseln/test/";
fs.writeFile(filepath + filename, content, (err) => {
    if(err != null) {
        console.error(err.message);
    } else {
        console.log("File " + filepath + filename +  " has been saved!");

    }


});

