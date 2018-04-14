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
        obj_props = Object.keys(user_obj);  //Convert object props to array
        for(var i=0; i < props.length; i++ ){
            if(!obj_props.includes(props[i])){
                throw '"'+props[i]+'"'+" wasn't passed on object";
            }
        }    
        return true;
    }  
 }
 

var is_valid = validate(["name","surname", "age"], {name:"Roman",surname:"Rodomansky"});
//var is_valid = validate(["name","surname"], {name:"Roman",surname:"Rodomansky"});
//var is_valid = validate(["name","surname", "age"]);
console.log(is_valid);
 
 