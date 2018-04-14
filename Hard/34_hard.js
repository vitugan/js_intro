/**
 * Write a JavaScript program to find duplicate values in a JavaScript array.
 */

function get_duplicates(arr){
    var duplicates = [];
    arr.sort();
    for(var i=1;i<arr.length;i++){
        if(arr[i-1] === arr[i]){
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
}

var arr = ["name", 22, 1, 22, false, true, "name", false];
console.log(get_duplicates(arr));