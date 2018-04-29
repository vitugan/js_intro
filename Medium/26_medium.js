/**
 * Write a JavaScript program to calculate the factorial of a number. Sample f(5) should return 120.
 */

 function factorial(n){
    var res = n;
    for(var i = n - 1; i > 0; i--){
        res = res * i;        
    }
     return res;
 }

 console.log(factorial(5));