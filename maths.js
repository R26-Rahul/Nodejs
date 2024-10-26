/*  create here same javascript mathomatices function */

function add(a,b){
    return a + b;
}


// console.log( add(1,3)); // 4 
/* how to use in index.js ?  */
// module.exports=add; // single function export

function sub(a , b ){
    return a-b;

}
/* multiple function exports  */
module.exports={
    add,
    sub,
}
