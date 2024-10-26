# Nodejs
- Node.js is an open source server environment.

- Node.js allows you to run JavaScript on the server.
## What is Node.js?
- Node.js is an open source server environment
- Node.js is free
- Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
- Node.js uses JavaScript on the server
## Why Node.js?
- Node.js uses asynchronous programming!
## Here is how Node.js handles a file request:
- Sends the task to the computer's file system.
- Ready to handle the next request.
- When the file system has opened and read the file, the server returns the content to the client.
1) Node.js eliminates the waiting, and simply continues with the next request.
2) Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.
## What Can Node.js Do?
- Node.js can generate dynamic page content
- Node.js can create, open, read, write, delete, and close files on the server
- Node.js can collect form data
- Node.js can add, delete, modify data in your database
## What is a Node.js File?
- Node.js files contain tasks that will be executed on certain events
- A typical event is someone trying to access a port on the server
- Node.js files must be initiated on the server before having any effect
- Node.js files have extension ".js"

## Node.js Get Started
- Downalod Node.js {https://nodejs.org/}
- default setting and countinus next install 
- Open code editor and go to terminal type 
    ```
    node -v
    ```

- Now can check with Javascript file (copy and paste in the js file )
    ```
    console.log("Test")
    ```
- save "index.js"

- Open terminal and run the code 
    ```
    node index.js
    ```
- Results show test in the terminal

# What is a Module in Node.js?
- Consider modules to be the same as JavaScript libraries.
- A set of functions you want to include in your application.
### Example 
- Node.js has a set of built-in modules which you can use without any further installation.
- maths.js
- email.js
- image.js
- index.js
- otp.js
### how to use modules 
- To include a module, use the "require()" function with the name of the module:
- this is use in index.js file 
```
const math= require("./maths");
console.log(math)

```
- Now check  if ( node index.js ) results : {} 
- Go to math.js file and export function 
```
function add(a,b){
    return a + b;
}

```
- module.exports=functionName;
```
module.exports="test";
```
- Now check ( node index.js ) results: test
## practicals in index.js and maths.js


# Node.js File System Module
- The Node.js file system module allows you to work with the file system on your computer.
### type of module 
- in-built module,
- built-in module,
- predefined module
- user definded module

### in-built
- Node.js as a File Server
```
var fs = require("fs")
```
- Common use for the File System module:
    - Read files
    - Create files
    - Update files
    - Delete files
    - Rename files
- read files  practical here
- please install nodemon 
```
npm i nodemon -g
```


