// function checkSum(a,b){
//     return a+b
// }
// checkSum();
// let sum = checkSum(2, 5); 
// console.log("Sum of given numbers is :", sum);

// console.log("Hello");


//create server
const http = require('http');
const port = "3100";
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('hello world');

});
server.listen(port,()=>{
    console.log(`server running at ${port}`)
});


//create file system node.js

// const fs=require('fs');
// fs.writeFile('file.txt','Hello World',(err)=>{
//     if (err) throw err;
//     console.log("data writen file");
// });


//read file
// fs.readFile('file.txt','utf8',(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });



const app=require('./app');
app.sayHello();

const events = require('events');
