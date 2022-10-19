// console.log("Hello");

// const fs = require("fs")

// if(!fs.existsSync("os")){
//     fs.mkdirSync("os");
// }

// else{
//     fs.writeFileSync("os/index.js","This is index file");
//     console.log("File Made");
// }


// // Synchronous Server Connection

// const http = require("http");
// const port = 4000;
// const server2 = require("./data")
// const server3 = require("./data2")
// const server = http.createServer((req,res) => {
// console.log("This is Hitesh server");
// res.write("This is my second server\n");
// res.write("This is third server");
// res.end();
// })

// server.listen(port,()=>{console.log(`Server1 is listening to port ${port}`);});
// server2.server2.listen(5000,()=>{console.log("This is Server2 Log");});
// server3.server3.listen(7000,()=>{console.log("This is Server3 Log");});



// // Asynchronous Server Connection

const fs = require("fs");

console.log("started");

const writeFile = () => {
    fs.writeFile("data/text.txt","Add the data",(err)=>{
        if(err){
            console.log((err));
        }
        else{
            console.log(("Data written"));
        }
    });
};

const readFile = () => {
    fs.readFile("data/text.txt",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data.toString());
        }
    });
};

fs.exists("data",(exists)=>{
    if(!exists){
        fs.mkdir("data",(foldererr)=>{
            if(foldererr){
                console.log("Folder has not been created");

            }
            else{
                writeFile();
                readFile();
            }
        });
    }
    else{
        writeFile();
        readFile();
    }
});

console.log("program ended");