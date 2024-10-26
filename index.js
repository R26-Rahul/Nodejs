/* day 01  */
// console.log("Test"); // test

/* Built-in Modules :- create new file maths.js */

const math= require("./maths");
// console.log(math); // {} 
/* This is ematy objects , now we have to acces function then first export there */
// console.log(math(2,5)); // single function acces here  

/* muletiple function acces here  */
// console.log("function1 : "+ math.add(23,4), ", function2 : "+ math.sub(45,34) );

/* Node.js File System Module */
// const fs =require("fs");
// console.log(fs.readFile());

/* requirement for http using  */
const http=require("http");
/* create server and inside calback function
req -> reqest from clint side 
res -> response from server side
*/
const server =http.createServer(function(req, res){
/* samethings write on browser using "write()" */
    // res.writeHead(200,{'Content-Type': "text/plain"})// show head content type
    res.write("<h1>Rahul</h1>")
/* response end the sesion using "end()" */

    res.end()
});
/*like a domian name and port no.: "listen(8080)"  go to browser and search url "http://localhost:8080"*/
server.listen(8080);






