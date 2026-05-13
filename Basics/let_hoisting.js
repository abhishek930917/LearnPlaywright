// let is block scoped and it is not hoisted to the top of the block. It is only hoisted to the top of the function or global scope.    

let x = "global";
if(true){
    
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = "block";
    console.log(x); // block
}