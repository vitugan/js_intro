/**
 *  Write a function that reverse a number. For i.e. input 32243 should returns 34223.
 */

function num_reverse(n){
    n = n + '';
    return parseInt(n.split("").reverse().join(""));
}

console.log(num_reverse(34223));