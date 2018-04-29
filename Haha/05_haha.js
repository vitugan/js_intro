/*
Build a function that do currency converter from USD to UAH, and reverse.
*/

function currencyConvertor(){    
    const oneUAH = 27;
    var amount = 0, result = 0,
        messages = [
            "Do you want to change USD to UAH ?", 
            "Input the amount of USD you want to change: ",
            "Do you want to change UAH to USD ?",
            "Input the amount of UAH you want to change: ",
            "Decide what you want and try again."
        ];

    var currUSD = confirm(messages[0]);
    if(currUSD === true){
        amount = prompt(messages[1]);
        if(amount > 0){
            result = Math.round((oneUAH * amount) * 100) / 100;
            alert("You will receive "+result+" UAH.");
            return result;
        } else {
            alert("Enter a valid amount");
        }
    } 
    var currUAH = confirm(messages[2]);
    if(currUAH === true) {
        amount = prompt(messages[3]);
        if(amount > 0){
            result = Math.round((amount / oneUAH) * 100) / 100;
            alert("You will receive "+result+" USD.")
            return result;
        } else {
            alert("Enter a valid amount");   
        }
    }
    alert(messages[4]);
}

currencyConvertor();