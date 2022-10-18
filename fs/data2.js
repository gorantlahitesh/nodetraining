

const http = require("http");
const fs = require('fs');

// const server3 = http.createServer((req,res) => {
// console.log("This is HTML server");
// res.writeHead(200,{"Content-Type":"text/html"});
// // res.write(index2.html);
// res.sendFile(__dirname + "/index2.html");
// res.end();
// });

     
const server3 = http.createServer((request, response) => {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        fs.readFile('./index.html', function (err, html) {
            if (err) {
                throw err; 
            } 
            else{ 
        response.write(html);  
        response.end();  
            }
});

});
module.exports = { server3};
