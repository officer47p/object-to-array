// I'm glad to help me in this project.
// Please fork me in Github and consider that this is my first app.

function objecttoarray(obj){
    if(typeof(obj) !== "object"){ // checks if the given thing is an object or not
        throw new Error("The given property is not an object! it's " + typeof(obj)); // it's not an object
    } else{
        let rkeys = Object.keys(obj); // keys list
        let rvalues = Object.values(obj); // values list
        return [rkeys, rvalues]; // returns the results 
    }
}

module.exports = objecttoarray; // exports the function