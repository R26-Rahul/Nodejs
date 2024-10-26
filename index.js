/* day 01  */
// console.log("Test"); // test

/* Built-in Modules :- create new file maths.js */

const math= require("./maths");
// console.log(math); // {} 
/* This is ematy objects , now we have to acces function then first export there */
// console.log(math(2,5)); // single function acces here  

/* muletiple function acces here  */
console.log("function1 : "+ math.add(23,4), ", function2 : "+ math.sub(45,34) );



