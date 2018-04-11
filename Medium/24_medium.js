/**
 * Write an function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. For i.e. the quick brown fox and respond with The Quick Brown Fox'.
 */

function uppercase_first_letter(str){
    var res = [];
    str = str.split(" ");
    for(var i = 0; i < str.length; i++ ){
        res.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
    }
    return res.join(" ");
}

console.log(uppercase_first_letter('the quick brown fox'));