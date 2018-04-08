/*
Write a function to convert celsius into fahrenheit.
*/

function degreeConvert(c){
	const fahrenheit = 1.8;
	var c = parseInt(prompt('Input the temperature in degrees Celsius'));
	c = c * fahrenheit + 32;
	//console.log(c);
	return c;
}