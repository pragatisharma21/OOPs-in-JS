const user = {
    firstname : "Pragati",
    lastname : "Sharma",
    age : 21 ,
    // now oops encapsulationgi
    getAgeYear : function(){
        return new Date().getFullYear() - user.age
    }
}
user.getAgeYear()

// function getAgeYear(){
//     return new Date().getFullYear()-age

// }   abstraction achieve karlia isme