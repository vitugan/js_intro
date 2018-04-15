/**
 * Write a function that returns reversed string. For i.e. input "hello world" should return "dlrow olleh".
*/

function str_reverse(str){
	return str.split("").reverse().join("");
}

console.log(str_reverse("hello world"));