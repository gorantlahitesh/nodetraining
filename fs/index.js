console.log("Hello");

const fs = require("fs")

if(!fs.existsSync("os")){
    fs.mkdirSync("os");
}

else{
    fs.writeFileSync("os/index.js","This is index file");
    console.log("File Made");
}