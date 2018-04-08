/**
 * Write a function that returns only pair numbers. For i.e. input [1,5,23,4,2,5,6] should return [4,2,6].
 */

function pair_numbers(arr){
    var output =[];
    for(var i=0; i < arr.length; i++){
        if(arr[i]%2 == 0){
            output.push(arr[i]);
        }
    }
    return output;
}
