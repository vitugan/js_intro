/**
 * Write a JavaScript program to construct the following pattern, 
 * using a nested for
 * loop *{new line}* *{new line}* * *{new line}* * * *{new line}* * * * *.
 */

 function logStars(n){
     var output='';
     for(var i = 0; i <= n ; i++){
        output += '*';
        console.log(output);
     }
 }