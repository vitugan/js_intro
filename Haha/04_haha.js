/*
Using prompt ask user date, name and city, and show alert Petro has a meeting today at 17:00 somewhere in Milan.
*/
function setMeetup(){
    var date = prompt('Input a date: ');
    var name = prompt('Input a name: ');
    var city = prompt('Input a city: ');
    
    alert(name +' has a meeting at '+ date +' somewhere in '+city );
}