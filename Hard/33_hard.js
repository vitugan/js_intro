/**
 * Read about Binary Search. 
 * Implement it using JavaScript. 
 * For i.e. binarySearch(27, {from:0, to:100}), 
 * should print at console log 50,25,38,31,28,27.
 */
function biynarySearch(n, range){
    var start = range.from, 
        end = range.to;    
    
    while(start<=end){
        var middle = Math.ceil((end+start) / 2);
        console.log(middle);
        if(n === middle){            
            return;
        } else if(middle > n){
            end = middle - 1;
        } else {
            start = middle + 1;
        }        
    }    
}

biynarySearch(27, {from: 0,to: 100});