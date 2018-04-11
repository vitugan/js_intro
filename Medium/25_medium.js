/**
 * Write a JavaScript function to find the first not repeated character. For i.e. input 'abacddbec', should return 'e'.
 */
function check_repeated_char(str){
    var counter = 0;
    var arr = str.split('');
        for(var i=0; i<arr.length; i++){
            for(var j=0;j<arr.length; j++){
                if(arr[i] === arr[j]){
                    counter++;
                }
            }
            if(counter == 1) {
                return  arr[i];
             }
            counter = 0;                        
        }
    return false;
}

console.log(check_repeated_char('abacddbec'));