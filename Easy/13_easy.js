/**
 * Write a function that returns average number of values. Do not use Math. For i.e. [1,4,2] should return [2.33].
 */

 function average_num(arr){
    var sum = arr.reduce(function(prev, current){
        return prev + current;
    });
    var average = Math.round((sum / arr.length) * 100) / 100;
    return average;
 }

 console.log(average_num([1,4,2]));