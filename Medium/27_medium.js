/**
 * Write a JavaScript function to generate a random integer. 
 * For i.e. console.log(rand(20,1)); 
 * should returns each time random number from in a range 20 to 1.
 */

 function getRandomInRange(max, min){    
     max = max + 1;
    return Math.floor(Math.random() * (max - min) + min);
 }

 console.log(getRandomInRange(20, 1));