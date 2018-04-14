/**
 *  Write a JavaScript function that generates 
 * all combinations of a string. 
 * For i.e. input dog, should respond with d,do,dog,o,og,g.
 */

function str_generator(str){	
	var arr = [];
	for(var i = 0; i < str.length; i++){
		for(var j = i+1; j < str.length+1; j++){
			arr.push(str.slice(i, j));
		}
	}		
	return arr.join(",");
}

console.log(str_generator('dog'));