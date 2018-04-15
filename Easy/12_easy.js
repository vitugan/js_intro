/**
 * Write a function that returns min and max numbers. For i.e. input [1,92,-5,25] should return {max:92, min:-5}.
 */
function arr_min_max(arr){
    var min = arr.reduce(function(prev, current){
        return (current < prev ) ? current : prev;
    });

    var max = arr.reduce(function(prev, current){
        return (current > prev) ? current : prev;
    });

    return {'max': max, 'min':min};
}

console.log(arr_min_max([1,92,-5,25]));