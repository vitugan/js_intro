/**
 * Write a function that returns only pair numbers. For i.e. input [1,5,23,4,2,5,6] should return [4,2,6].
 */

function pair_numbers(arr){
    return arr.filter(function(value){        
    	return (value%2) == 0;             	
    });
}