/**
 * ead about Bubble Sort, and write a JavaScript function 
 * to apply Bubble Sort algorithm. 
 * Sample input [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213], 
 * and output [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1].
 */

function bubble_sort(a){    
    var temp;        
    for(var i=0;i<a.length; i++){
        debugger
        for(var j=0; j<a.length;j++){            
            if(a[i]>a[j]){
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }        
    }            
    return a;
}

console.log(bubble_sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));