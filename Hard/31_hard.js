/**
 * Write a recursion function that logs numbers from N to 0. 
 * Read about recursion function in javascript before implementing this. 
 * Do not use "for", function should call itself.
 */

 function recursion(n){
    if(n>0){
        console.log(n);
        recursion(n-1);
    } else {
        console.log(n);
    }
 }
 
 recursion(10);