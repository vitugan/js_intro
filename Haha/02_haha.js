/*
Write a function that implements Pythagorean theorem.
*/

function pythagoreanTheorem(){
	let a = parseInt(prompt('Input a:'));
	let b = parseInt(prompt('Input b:'));
	if ( isNaN(a) || isNaN(b)) {
		alert("Input a valid number and try again.")
		return;
	}	
	c = Math.sqrt(a*a + b*b);
	return c;
}

function pythagoreanTheorem();