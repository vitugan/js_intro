/**
 * Write a function that validates if input object has required key. 
 * If not - throw new error. 
 * For i.e. validate(["name","surname"],    )should return true. 
 * For i.e. validate(["name","surname","age"], {name:"Roman",surname:"Rodomansky"})should 
 * throw error since "age" wasn't passed on object.
 */

 function validate(props, user_obj = null){     
    if(user_obj === null){
        return true;
    } else {
        for(var i=0; i<props.length; i++){
            if(user_obj[props[i]] === undefined) {
                throw '"'+props[i]+'"'+" wasn't passed on object";
            }
        }
        return true;
    }  
 }
 
try{
    validate(["name","surname", "age"], {name:"Roman",surname:"Rodomansky"});
    validate(["name","surname"], {name:"Roman",surname:"Rodomansky"});
    validate(["name","surname", "age"]);
} 
catch (e) {
    console.log(e);
}


//console.log(is_valid);
